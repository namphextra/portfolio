"use client";

import {
  Container,
  Button,
  Popover,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import {
  Folder as FolderIcon,
  CreateNewFolderOutlined,
  UploadFileOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Dialog from "@components/Dialog";

export default function Admin() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    async function getFolders() {
      const res = await fetch("/api/folder");
      const folders = await res.json();
      setFolders(folders);
    }
    getFolders();
  }, []);

  const actions = [
    {
      icon: <CreateNewFolderOutlined />,
      name: "Add new folder",
      onClick: () => {
        console.log(343434343);

        setOpenDialog(true);
      },
    },
    { icon: <UploadFileOutlined />, name: "Upload files", onClick: () => {} },
  ];

  return (
    <Container className="flex">
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        dialogTitle="New folder"
      />
      <aside className="w-1/12 px-2 py-4">
        <SpeedDial
          icon={<SpeedDialIcon className="w-8 h-8" />}
          ariaLabel="Add new"
          direction="right"
          sx={{ position: "absolute" }}
        >
          {actions.map((action, key) => (
            <SpeedDialAction
              icon={action.icon}
              tooltipTitle={action.name}
              key={key}
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
        <Button
          variant="outlined"
          onClick={onClickPopover}
          className="rounded-3xl shadow"
        >
          New
        </Button>
      </aside>
      <div className="content__container flex-1">
        <FolderIcon color="primary" />
      </div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
