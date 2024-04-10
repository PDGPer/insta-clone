import { Box, Image } from "@chakra-ui/react";
import React from "react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function FeedPost({ post }) {
  const { userProfile } = useGetUserProfileById(post.createdBy);

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.image} alt={"Feed post image"} />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </>
  );
}
