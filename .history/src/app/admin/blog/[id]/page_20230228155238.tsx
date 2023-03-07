"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Folder } from "@/types/folder";

export default function Admin() {
  const searchParams = useSearchParams();
  const [folder, setFolder] = useState<Folder | null>(null);
  const getFolder = async () => {
    const res = await fetch(`/api/folder/${searchParams.get("id")}`);
    const folder = await res.json();
    setFolder(folder);
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <div>
      <h1>{folder?.title}</h1>
    </div>
  );
}
