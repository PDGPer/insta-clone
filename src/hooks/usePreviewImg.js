import { useState } from "react";
import useShowToast from "./useShowToast";

export default function usePreviewImg() {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2 MB
  const handleImageChange = (e) => {
    // Image file is bound from the event object
    const file = e.target.files[0];
    // Checks that the file is both an image and under the size constraint
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        showToast("Error", "File size exceeds the limit of 2 MB", "error");
        setSelectedFile(null);
        return;
      }
      // If it is, it reads the file as a data URL using the FileReader API
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast("Error", "Please select an image file", "error");
      setSelectedFile(null);
    }
  };
  return { selectedFile, handleImageChange, setSelectedFile };
}
