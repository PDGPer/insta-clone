import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

export default function useEditProfile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return;
  };
}
