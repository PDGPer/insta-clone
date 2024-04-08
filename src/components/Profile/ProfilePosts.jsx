import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import ProfilePost from "./ProfilePost";

export default function ProfilePosts() {
  const { isLoading, posts } = useGetUserPosts();
  const noPostsFound = !isLoading && posts.length === 0;
  if (noPostsFound) return <NoPostsFound />;

  return (
    <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={1} columnGap={1}>
      {/* -------------------- SKELETONS ------------------- */}
      {isLoading &&
        [0, 1, 2].map((_, index) => (
          <VStack key={index} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {/* -------------------- CONTENT ------------------- */}
      {!isLoading && (
        <>
          {" "}
          {posts.map((post) => (
            <ProfilePost key={post.id} post={post} />
          ))}{" "}
        </>
      )}
    </Grid>
  );
}

const NoPostsFound = () => {
  return (
    <Flex flexDir={"column"} textAlign={"center"} mx={"auto"} mt={10}>
      <Text fontSize={"2x1"}>No Posts Found</Text>
    </Flex>
  );
};
