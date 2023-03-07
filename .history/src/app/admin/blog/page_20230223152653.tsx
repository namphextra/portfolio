"use client";

import {
  Container,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
  Button,
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
  const [openDialog, setOpenDialog] = useState(false);
  const [folderTitle, setFolderTitle] = useState("");

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

  const onCloseDialog = () => {
    setFolderTitle("");
    setOpenDialog(false);
  };

  return (
    <Container className="flex">
      <Dialog
        open={openDialog}
        onClose={() => onCloseDialog()}
        dialogTitle="New folder"
        dialogContent={
          <TextField
            variant="outlined"
            value={folderTitle}
            onChange={(e) => setFolderTitle(e.target.value)}
          />
        }
        dialogActions={
          <>
            <Button variant="text">Cancel</Button>
            <Button variant="text"> Create </Button>
          </>
        }
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
      </aside>
      <div className="content__container flex-1">
        <FolderIcon color="primary" />
      </div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
