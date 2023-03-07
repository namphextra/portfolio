"use client";

import { Container, Button, Popover } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { useEffect, useState } from "react";

export default function Admin() {
  const [folders, setFolders] = useState([]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    async function getFolders() {
      const res = await fetch("/api/folder");
      const folders = await res.json();
      setFolders(folders);
    }
    getFolders();
  }, []);

  return (
    <Container className="flex">
      <aside className="w-1/12">
        <Button variant="outlined" onClick={onClickPopover}>
          New
        </Button>
        <Popover
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          content popover
        </Popover>
      </aside>
      <div className="content__container flex-1">
        <FolderIcon color="primary" />
      </div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
