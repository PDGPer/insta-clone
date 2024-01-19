import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";

export default function useLogout() {
  const [signOut, isLoadingOut, error] = useSignOut(auth);
  const showToast = useShowToast();

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { handleLogout, isLoadingOut, error };
}
