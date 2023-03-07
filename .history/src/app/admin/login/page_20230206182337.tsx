"use client";
import { Button } from "@mui/material";
// import { AccountCircle, PasswordRounded } from "@mui/icons-material";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  return (
    <div>
      {!session && (
        <>
          Not signed in <br />
        </>
      )}
      <Button variant="contained" onClick={() => signIn()}>
        Signin
      </Button>
    </div>
  );
}
