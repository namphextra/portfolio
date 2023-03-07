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
import { CreateFolderPayload, Folder } from "@/types/folder";

export default function Admin() {
  const [folders, setFolders] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [folderTitle, setFolderTitle] = useState("");

  const getFolders = async () => {
    const res = await fetch("/api/folder");
    const folders = await res.json();
    setFolders(folders);
  };

  useEffect(() => {
    getFolders();
  }, []);

  const actions = [
    {
      icon: <CreateNewFolderOutlined />,
      name: "Add new folder",
      onClick: () => {
        setOpenDialog(true);
      },
    },
    { icon: <UploadFileOutlined />, name: "Upload files", onClick: () => {} },
  ];

  const onCloseDialog = () => {
    setFolderTitle("");
    setOpenDialog(false);
  };

  const createFolder = async (params: CreateFolderPayload) => {
    const res = await fetch("/api/folder", {
      method: "POST",
      body: JSON.stringify(params),
    });
    const data = await res.json();
    if (data.success) {
      getFolders();
    }
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
            <Button variant="text" onClick={() => onCloseDialog()}>
              Cancel
            </Button>
            <Button
              variant="text"
              onClick={() => createFolder({ title: folderTitle })}
            >
              {" "}
              Create{" "}
            </Button>
          </>
        }
      />
      <aside className="w-1/12 px-2 py-4">
        <SpeedDial
          icon={<SpeedDialIcon />}
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
      <div className="content__container flex-1 py-8 px-10 flex">
        {folders.map((folder: Folder, key: number) => (
          <div
            key={key}
            className="flex items-center mr-4 p-4 border border-primary rounded-lg"
          >
            <FolderIcon color="primary" className="mr-3" />
            {folder.title}
          </div>
        ))}
      </div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
