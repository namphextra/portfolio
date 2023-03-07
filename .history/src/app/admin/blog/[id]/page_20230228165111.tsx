"use client";

import { useEffect, useState } from "react";
import { Folder } from "@/types/folder";
import { Link, Breadcrumbs, Typography, Container } from "@mui/material";
import Editor from "@components/editor";

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
    <Container className="flex">
      <aside className="w-1/12 px-2 py-4">
        <p>Edit</p>
      </aside>
      <main className="content__container flex-1 py-8 px-10">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/admin/blog">
            Blogs
          </Link>
          <Typography color="primary">{folder?.title}</Typography>
        </Breadcrumbs>
        <h1>{folder?.title}</h1>
        <Editor content={folder?.content} />
      </main>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
