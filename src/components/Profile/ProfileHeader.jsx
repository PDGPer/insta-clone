import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react";

export default function ProfileHeader() {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
      {/* -------------------- USER PROFILE PIC ------------------- */}
      <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar name="As a Programmer" src="/profilepic.png" alt={"As a Programmer logo"}></Avatar>
      </AvatarGroup>
      {/* ------------------ USER NAME AND BUTTON ----------------- */}
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          {/* -------------------- USER NAME ----------------- */}
          <Text fontSize={{ base: "sm", md: "lg" }}>asaprogrammer_</Text>
          {/* -------------------- EDIT BUTTON ----------------- */}
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.800" }} size={{ base: "xs", md: "sm" }}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          {/* -------------------- POSTS COUNT ----------------- */}
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          {/* -------------------- FOLLOWER COUNT ----------------- */}
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              149
            </Text>
            Followers
          </Text>
          {/* -------------------- FOLLOWING COUNT ----------------- */}
          <Text fontSize={{ base: "xm", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              175
            </Text>
            Following
          </Text>
        </Flex>
        {/* ------------------ USER ABOUT ----------------- */}
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            As a Programmer
          </Text>
        </Flex>
        <Text fontSize={"sm"}>A nice fella that writes code and helps people learn.</Text>
      </VStack>
    </Flex>
  );
}
