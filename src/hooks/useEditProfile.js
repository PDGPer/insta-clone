import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useState } from "react";
import { firestore, storage } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";

export default function useEditProfile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile);
  const showToast = useShowToast();

  const editProfile = async (inputs, selectedFile) => {
    // If the the profile is being updated or the user
    // isn't logged in, do nothing
    if (isUpdating || !authUser) return;
    setIsUpdating(true);

    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";
    try {
      if (selectedFile) {
        // Uploads the image to firebase
        await uploadString(storageRef, selectedFile, "data_url");
        // Gets the URL of the just uploaded image from the storage
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }

      // Creates a new user object with the updated fields
      const updatedUser = {
        ...authUser,
        fullName: inputs.fullName || authUser.fullName,
        username: inputs.username || authUser.username,
        bio: inputs.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL,
      };

      // Updates the user in the database...
      await updateDoc(userDocRef, updatedUser);
      // ...in local storage...
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      // ...and Zustand
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
      showToast("Success", "Profile updated successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { editProfile, isUpdating };
}
