"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import { signIn, useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const { data: session } = useSession();
  return (
    <div className="admin">
      {session && (
        <>
          Signed in as {session?.user?.email} <br />
          {session?.user?.name}
          <Image
            src={session?.user?.image || ""}
            alt=""
            width={100}
            height={100}
          />
        </>
      )}
      {!session ? (
        <Button variant="contained" onClick={() => signIn()}>
          Sign in
        </Button>
      ) : (
        <Button variant="contained" onClick={() => signOut()}>
          Log out
        </Button>
      )}
    </div>
  );
}
