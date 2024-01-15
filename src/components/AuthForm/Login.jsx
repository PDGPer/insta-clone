import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      {/* --------------- EMAIL FIELD ---------------- */}
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />

      {/* ---------------- PASSWORD FIELD ---------------- */}
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />

      {/* ---------------- LOGIN BUTTON ---------------- */}
      <Button w="full" colorScheme="blue" size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
}
