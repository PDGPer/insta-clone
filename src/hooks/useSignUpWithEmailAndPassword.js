import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

export default function useSignUpWithEmailAndPassword() {
  // Firebase hooks
  const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
  // Custom hook with Chakra UI parts
  const showToast = useShowToast();
  // Zustand store commands
  const loginUser = useAuthStore((state) => state.login);
  // const logoutUser = useAuthStore((state) => state.logout);

  const signup = async (inputs) => {
    // Signup attempt starts; first checks if all fields are filled out
    if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
      // If not, shows an error on the toast
      showToast("Error", "Please fill out all fields", "error");
      return;
    }

    // Additional check to prevent duplicate usernames
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }

    // If checks pass...
    try {
      // Tries to create a new user with the Firebase hooks
      // Also checks if email and password aren't duplicates
      // of those that already exist in the database
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
      // If it fails, shows an error on the toast
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      // If it succeeds, generates a new user object...
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        // ...and pushes it to the Firestore with Firebase hooks...
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        // ...while also saving it in the local storage...
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        // ...and adding the user object to the Zustand store.
        loginUser(userDoc);
      }
      // If it fails, shows an error on the toast
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
}
