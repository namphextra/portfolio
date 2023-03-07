"use client";
import Image from "next/image";
import { Button, Checkbox } from "@mui/material";
import { signIn, useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Admin() {
  const { data: session } = useSession();
  const [showComponent, setShowComponent] = useState(false);
  return <div className="admin">Admin</div>;
}
