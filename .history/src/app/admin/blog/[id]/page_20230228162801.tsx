"use client";

import { useEffect, useState } from "react";
import { Folder } from "@/types/folder";
import { Link, Breadcrumbs, Typography } from "@mui/material";

export default function Admin({ params }: { params: { id: string } }) {
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
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/admin/blog">
          Blogs
        </Link>
        <Typography color="text.primary">{params.id}</Typography>
      </Breadcrumbs>
    </div>
  );
}
