"use client";

import { Folder } from "@/types/folder";
import { memo } from "react";
import { Folder as FolderIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const ListBlogs = ({
  folders,
  prefixPathGoTo,
}: {
  folders: Folder[];
  prefixPathGoTo: string;
}) => {
  const router = useRouter();

  return (
    <div className="flex">
      {folders.map((folder: Folder, key: number) => (
        <div
          key={key}
          className="flex items-center mr-4 p-4 border border-primary rounded-lg cursor-pointer"
          onClick={() => router.push(`${prefixPathGoTo}/${folder.id}`)}
        >
          <FolderIcon color="primary" className="mr-3" />
          {folder.title}
        </div>
      ))}
    </div>
  );
};

export default memo(ListBlogs);
