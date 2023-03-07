"use client";

import { useEffect, useState } from "react";
import { Folder } from "@/types/folder";

export default function Admin({ params }) {
  const [folder, setFolder] = useState<Folder | null>(null);
  const getFolder = async () => {
    const res = await fetch(`/api/folder/${params.id}`);
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
