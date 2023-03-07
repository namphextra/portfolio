export type Folder = {
  id: string;
  title: string;
}

export type CreateFolderPayload = Omit<Folder, 'id'>