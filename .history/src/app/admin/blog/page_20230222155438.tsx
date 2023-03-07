"use client";

import { Container, Button } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    async function getFolders() {
      const res = await fetch("/api/folder");
      const folders = await res.json();
      console.log(1111, folders);
    }
    getFolders();
  }, []);

  return (
    <Container className="flex">
      <aside className="w-1/12">
        <Button variant="outlined">New</Button>
      </aside>
      <div className="content__container flex-1">
        <FolderIcon color="primary" />
      </div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
