export type FileType = {
  name: string;
  content: string;
  language: string;
};

export type FolderType = {
  name: string;
  isOpen: boolean;
  files: FileType[];
  folders: FolderType[];
};

export type Language = {
  name: string;
  value: string;
  extensions: string[];
};
