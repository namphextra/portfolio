export type Folder = {
  id: string;
  title: string;
  content: string;
}

export type CreateFolderPayload = Omit<Folder, 'id'>