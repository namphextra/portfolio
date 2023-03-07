import { Container } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

async function getFolders() {
  const res = await fetch("/api/folder");
  const folders = await res.json();
  return folders;
}

export default async function Admin() {
  const folders = await getFolders();
  console.log(1111, folders);

  return (
    <Container className="flex">
      <aside className="w-1/12">Sub Menu</aside>
      <div className="content__container flex-1">
        <FolderIcon color="primary" />
      </div>
      <aside className="w-3/12">Main Menu</aside>
    </Container>
  );
}
