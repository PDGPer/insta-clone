import { Box, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { auth } from "../../firebase/firebase";

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  // Checks if the user exists (i.e. logged in) directly
  // from the Firebase store.
  const [user, loading, error] = useAuthState(auth);
  // The user existing or not is used to determine if the
  // sidebar should be rendered, as the pathname check alone
  // still makes it flicker for a split second.
  const canRenderSidebar = pathname !== "/auth" && user;
  return (
    <Flex>
      {/* ---------------- LEFT SIDEBAR ---------------- */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* ---------------- CONTENT ON RIGHT ---------------- */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
}
