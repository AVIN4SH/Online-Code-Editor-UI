import React, { useRef } from "react";
import { FileType } from "../types";

interface CodeEditorProps {
  activeFile: FileType | null;
  onEditorChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  theme: "dark" | "light";
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  activeFile,
  onEditorChange,
  theme,
}) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="flex-1 relative">
      {activeFile ? (
        <textarea
          ref={editorRef}
          value={activeFile.content}
          onChange={onEditorChange}
          className={`w-full h-full p-4 font-mono text-sm resize-none outline-none ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
          spellCheck="false"
        />
      ) : (
        <div
          className={`w-full h-full flex items-center justify-center ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          No file selected. Create a new file to start coding.
        </div>
      )}
    </div>
  );
};
