import { useState } from "react";
import { FolderType, FileType } from "../types";
import { useLocalStorage } from "./useLocalStorage";
import { initialFolder } from "../utils/constants";

export function useFileSystem() {
  const [rootFolder, setRootFolder] = useLocalStorage<FolderType>(
    "programizRootFolder",
    initialFolder
  );
  const [activeFile, setActiveFile] = useState<FileType | null>(
    rootFolder.files[0] || null
  );

  const updateFileInFolder = (
    folder: FolderType,
    fileName: string,
    newContent: string
  ): boolean => {
    const fileIndex = folder.files.findIndex((f) => f.name === fileName);
    if (fileIndex !== -1) {
      folder.files[fileIndex].content = newContent;
      return true;
    }
    for (let i = 0; i < folder.folders.length; i++) {
      if (updateFileInFolder(folder.folders[i], fileName, newContent)) {
        return true;
      }
    }
    return false;
  };

  const createNewFile = (
    parentFolder: FolderType,
    fileName: string,
    language: string
  ) => {
    const newFile: FileType = { name: fileName, content: "", language };
    parentFolder.files.push(newFile);
    setRootFolder({ ...rootFolder });
    setActiveFile(newFile);
  };

  const createNewFolder = (parentFolder: FolderType, folderName: string) => {
    const newFolder: FolderType = {
      name: folderName,
      isOpen: true,
      files: [],
      folders: [],
    };
    parentFolder.folders.push(newFolder);
    setRootFolder({ ...rootFolder });
  };

  const deleteFile = (parentFolder: FolderType, fileName: string) => {
    parentFolder.files = parentFolder.files.filter((f) => f.name !== fileName);
    if (activeFile && activeFile.name === fileName) {
      setActiveFile(parentFolder.files[0] || null);
    }
    setRootFolder({ ...rootFolder });
  };

  const toggleFolder = (folder: FolderType) => {
    folder.isOpen = !folder.isOpen;
    setRootFolder({ ...rootFolder });
  };

  return {
    rootFolder,
    setRootFolder,
    activeFile,
    setActiveFile,
    updateFileInFolder,
    createNewFile,
    createNewFolder,
    deleteFile,
    toggleFolder,
  };
}
