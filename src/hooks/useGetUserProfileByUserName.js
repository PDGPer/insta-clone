import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
import useShowToast from "./useShowToast";

export default function useGetUserProfileByUserName(username) {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        // Fetches the user doc from the local firestore
        const q = query(collection(firestore, "users"), where("username", "==", username));
        // Fetches the matching docs from firebase
        const querySnapshot = await getDocs(q);
        // Ends the function if no docs are found
        if (querySnapshot.empty) return;
        let userDoc;
        // Iterates through the response and adds
        // all doc data to the user profile state
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });
        setUserProfile(userDoc);
      } catch (error) {
        showToast("Error", error.message, "error");
      }
    };
    getUserProfile();
  }, [setUserProfile, username, showToast]);

  return { isLoading, userProfile };
}
