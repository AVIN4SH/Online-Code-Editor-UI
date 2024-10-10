import React from "react";
import {
  Folder,
  ChevronDown,
  ChevronRight,
  File,
  Plus,
  Trash2,
} from "lucide-react";
import { FolderType, FileType } from "../types";

interface FileExplorerProps {
  rootFolder: FolderType;
  activeFile: FileType | null;
  onFileSelect: (file: FileType) => void;
  onCreateFile: (parentFolder: FolderType) => void;
  onCreateFolder: (parentFolder: FolderType) => void;
  onDeleteFile: (parentFolder: FolderType, fileName: string) => void;
  onToggleFolder: (folder: FolderType) => void;
  theme: "dark" | "light";
}

export const FileExplorer: React.FC<FileExplorerProps> = ({
  rootFolder,
  activeFile,
  onFileSelect,
  onCreateFile,
  onCreateFolder,
  onDeleteFile,
  onToggleFolder,
  theme,
}) => {
  const renderFolder = (folder: FolderType, depth = 0) => (
    <div key={folder.name} style={{ marginLeft: `${depth * 16}px` }}>
      <div
        className="flex items-center mb-2 cursor-pointer"
        onClick={() => onToggleFolder(folder)}
      >
        {folder.isOpen ? (
          <ChevronDown className="mr-2" size={18} />
        ) : (
          <ChevronRight className="mr-2" size={18} />
        )}
        <Folder className="mr-2" size={18} />
        <span className="font-medium">{folder.name}</span>
      </div>
      {folder.isOpen && (
        <div>
          {folder.files.map((file) => (
            <div
              key={file.name}
              className={`flex items-center p-2 cursor-pointer ${
                activeFile && activeFile.name === file.name
                  ? theme === "dark"
                    ? "bg-blue-900"
                    : "bg-blue-100"
                  : theme === "dark"
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
              }`}
            >
              <File
                className="mr-2"
                size={18}
                onClick={() => onFileSelect(file)}
              />
              <span onClick={() => onFileSelect(file)}>{file.name}</span>
              <Trash2
                className="ml-auto cursor-pointer text-red-500 hover:text-red-700"
                size={18}
                onClick={() => onDeleteFile(folder, file.name)}
              />
            </div>
          ))}
          {folder.folders.map((subFolder) =>
            renderFolder(subFolder, depth + 1)
          )}
          <div
            className={`flex items-center p-2 cursor-pointer ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
            onClick={() => onCreateFile(folder)}
          >
            <Plus className="mr-2" size={18} />
            <span>New File</span>
          </div>
          <div
            className={`flex items-center p-2 cursor-pointer ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
            onClick={() => onCreateFolder(folder)}
          >
            <Plus className="mr-2" size={18} />
            <span>New Folder</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`w-64 ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-r`}
    >
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Files</h2>
      </div>
      <div className="p-2">{renderFolder(rootFolder)}</div>
    </div>
  );
};
