"use client";

import React, { ChangeEventHandler, useEffect, useState } from "react";
import { Folder } from "@/types/folder";
import {
  Link,
  Breadcrumbs,
  Typography,
  Container,
  TextField,
} from "@mui/material";
import Editor from "@/components/Editor/Index";

export default function Admin({ params }: { params: { id: string } }) {
  const [folder, setFolder] = useState<Folder | null>(null);
  const getFolder = async () => {
    const res = await fetch(`/api/folder/${params.id}`);
    const data = await res.json();
    setFolder(data);
  };

  useEffect(() => {
    getFolder();
  }, []);

  const updateContent = async (
    content: string,
    folder: Folder | null
  ): Promise<void> => {
    await fetch(`/api/folder/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(Object.assign({}, folder, { content })),
    });
  };

  const updateTitle = (
    e: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFolder(Object.assign({}, folder, { title: e.target.value }));
    // await fetch(`/api/folder/${params.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(Object.assign({}, folder, { title: e.target.value })),
    // });
  };

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
        <h2 className="my-4">Title</h2>
        <TextField value={folder?.title} onChange={updateTitle} />
        <h2 className="my-4">Content</h2>
        <Editor
          id="editor-content"
          data={folder?.content || ""}
          updateContent={(content) => updateContent(content, folder)}
        />
      </main>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
