"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="home">
      {session && (
        <>
          Signed in as {session?.user?.email} <br />
          {session?.user?.name}
          <Image src={session?.user?.image || ""} alt="" width={100} />
        </>
      )}
      <Button variant="contained" onClick={() => signIn()}>
        Sign in
      </Button>
    </div>
  );
}
