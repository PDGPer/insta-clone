import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

export default function HomePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        {/* ---------------- FEED POSTS ---------------- */}
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>

        {/* ---------------- SUGGESTED USERS ---------------- */}
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
          {/* <SuggestedUsers /> */}
        </Box>
      </Flex>
    </Container>
  );
}
