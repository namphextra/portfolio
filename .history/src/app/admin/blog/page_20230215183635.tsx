"use client";

import { Container } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

export default function Admin() {
  return (
    <Container className="flex">
      <aside className="w-1/12">Sub Menu</aside>
      <div className="content__container flex-1">
        <FolderIcon></FolderIcon>
      </div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
