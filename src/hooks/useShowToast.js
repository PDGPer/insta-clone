import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export default function useShowToast() {
  const toast = useToast();

  // useCallback to prevent unnecessary re-renders
  // by caching the function
  const showToast = useCallback(
    (title, description, status) => {
      toast({ title, description, status, duration: 3000, isClosable: true });
    },
    [toast]
  );
  return showToast;
}
