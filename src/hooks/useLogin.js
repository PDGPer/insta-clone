import { doc, getDoc } from "firebase/firestore";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

export default function useLogin() {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);

  const login = async (inputs) => {
    // First checks if all fields are filled out, if not, shows an error
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Please fill out all fields", "error");
    }
    try {
      // Tries to sign in with Firebase hook
      const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);
      // If the user exists...
      if (userCred) {
        // Fetches the user document from the database
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        // And saves it to local storage...
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        // ...and Zustand as well
        loginUser(docSnap.data());
      }
      // Otherwise, show error
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return { loading, error, login };
}
