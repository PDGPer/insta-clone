import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function HomePage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container
        // Container only goes up to medium breakpoint
        // HTML body is the reference
        maxW={"container.md"}
        padding={0}
      >
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* This <Box> holds the contents that show on the left
        side of the screen. They won't be displayed until the
        breakpoint hits medium */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone img"></Image>
          </Box>
          {/* Holds the right side
          VStack works like flex, but vertically */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="Playstore logo" />
              <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}
