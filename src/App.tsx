import React, { useState, useEffect } from "react";
import { FileExplorer } from "./components/FileExplorer";
import { Toolbar } from "./components/Toolbar";
import { CodeEditor } from "./components/CodeEditor";
import { OutputPanel } from "./components/OutputPanel";
import { useFileSystem } from "./hooks/useFileSystem";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { languages } from "./utils/constants";
import { formatJavaScript, formatPython } from "./utils/formatters";
import { FolderType } from "./types";

export default function App() {
  const {
    rootFolder,
    setRootFolder,
    activeFile,
    setActiveFile,
    updateFileInFolder,
    createNewFile,
    createNewFolder,
    deleteFile,
    toggleFolder,
  } = useFileSystem();

  const [theme, setTheme] = useLocalStorage<"dark" | "light">(
    "programizTheme",
    "dark"
  );
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        handleSave();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (activeFile) {
      const newContent = e.target.value;
      setActiveFile({ ...activeFile, content: newContent });
      updateFileInFolder(rootFolder, activeFile.name, newContent);
    }
  };

  const handleRun = () => {
    if (activeFile) {
      setIsRunning(true);
      setTimeout(() => {
        setIsRunning(false);
      }, 2000);
    }
  };

  const handleSave = () => {
    // Saving is handled automatically by the useLocalStorage hook
    console.log("Files saved to local storage.");
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all files? This action cannot be undone."
      )
    ) {
      setRootFolder({
        name: "Project",
        isOpen: true,
        files: [
          {
            name: "main.py",
            content: 'print("Hello, World!")',
            language: "python",
          },
          {
            name: "script.js",
            content: 'console.log("Hello, JavaScript!");',
            language: "javascript",
          },
        ],
        folders: [],
      });
      setActiveFile(null);
    }
  };

  const handleDownload = () => {
    if (activeFile) {
      const blob = new Blob([activeFile.content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = activeFile.name;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleFormat = () => {
    if (activeFile) {
      let formattedContent = activeFile.content;
      if (
        activeFile.language === "javascript" ||
        activeFile.language === "typescript"
      ) {
        formattedContent = formatJavaScript(formattedContent);
      } else if (activeFile.language === "python") {
        formattedContent = formatPython(formattedContent);
      }
      setActiveFile({ ...activeFile, content: formattedContent });
      updateFileInFolder(rootFolder, activeFile.name, formattedContent);
    }
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (activeFile) {
      const newLanguage = e.target.value;
      setActiveFile({ ...activeFile, language: newLanguage });
      updateFileInFolder(rootFolder, activeFile.name, activeFile.content);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleCreateNewFile = (parentFolder: FolderType) => {
    const newFileName = prompt("Enter the new file name:");
    if (newFileName) {
      const fileExtension = newFileName.split(".").pop() || "";
      const language =
        languages.find((lang) => lang.extensions.includes(`.${fileExtension}`))
          ?.value || "plaintext";
      createNewFile(parentFolder, newFileName, language);
    }
  };

  const handleCreateNewFolder = (parentFolder: FolderType) => {
    const newFolderName = prompt("Enter the new folder name:");
    if (newFolderName) {
      createNewFolder(parentFolder, newFolderName);
    }
  };

  return (
    <div
      className={`flex h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <FileExplorer
        rootFolder={rootFolder}
        activeFile={activeFile}
        onFileSelect={setActiveFile}
        onCreateFile={handleCreateNewFile}
        onCreateFolder={handleCreateNewFolder}
        onDeleteFile={deleteFile}
        onToggleFolder={toggleFolder}
        theme={theme}
      />
      <div className="flex flex-col flex-1">
        <Toolbar
          activeFileLanguage={activeFile?.language || ""}
          onLanguageChange={handleLanguageChange}
          onSave={handleSave}
          onReset={handleReset}
          onDownload={handleDownload}
          onFormat={handleFormat}
          onThemeToggle={toggleTheme}
          theme={theme}
          languages={languages}
          isFileActive={!!activeFile}
        />
        <CodeEditor
          activeFile={activeFile}
          onEditorChange={handleEditorChange}
          theme={theme}
        />
        <OutputPanel
          onRun={handleRun}
          isRunning={isRunning}
          theme={theme}
          isFileActive={!!activeFile}
        />
      </div>
    </div>
  );
}
