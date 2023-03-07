"use client";

import { Container, Button, Popover } from "@mui/material";
import {
  Folder as FolderIcon,
  CreateNewFolderOutlined,
  UploadFileOutlined,
} from "@mui/icons-material";
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
      <aside className="w-1/12 px-2 py-4">
        <Button variant="outlined" onClick={onClickPopover}>
          New
        </Button>
        <Popover
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <div className="px-4">
            <div className="py-3 flex items-center hover:bg-secondary">
              <CreateNewFolderOutlined color="primary" className="mr-3" />
              Add new folder
            </div>
            <div className="py-3 flex items-center hover:bg-secondary">
              <UploadFileOutlined color="primary" className="mr-3" />
              Upload files
            </div>
          </div>
        </Popover>
      </aside>
      <div className="content__container flex-1">
        <FolderIcon color="primary" />
      </div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
