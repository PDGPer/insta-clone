import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();

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
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon />
          {error.message}
        </Alert>
      )}
      {/* ---------------- LOGIN BUTTON ---------------- */}
      <Button w="full" colorScheme="blue" size={"sm"} fontSize={14} onClick={() => login(inputs)} isLoading={loading}>
        Log in
      </Button>
    </>
  );
}
