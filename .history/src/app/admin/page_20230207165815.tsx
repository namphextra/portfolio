"use client";
import Image from "next/image";
import { Button, Checkbox } from "@mui/material";
import { getServerSession } from "next-auth/next";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { redirect } from "next/navigation";
import { authOptions } from "pages/api/auth/[...nextauth].ts";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/admin/login");
  }
  const [showComponent, setShowComponent] = useState(false);
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
      <Checkbox
        checked={showComponent}
        onChange={() => setShowComponent(!showComponent)}
      />
    </div>
  );
}
