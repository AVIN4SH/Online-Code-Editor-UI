import React from "react";
import { Save, RotateCcw, Download, Sun, Moon } from "lucide-react";
import { Language } from "../types";

interface ToolbarProps {
  activeFileLanguage: string;
  onLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSave: () => void;
  onReset: () => void;
  onDownload: () => void;
  onFormat: () => void;
  onThemeToggle: () => void;
  theme: "dark" | "light";
  languages: Language[];
  isFileActive: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  activeFileLanguage,
  onLanguageChange,
  onSave,
  onReset,
  onDownload,
  onFormat,
  onThemeToggle,
  theme,
  languages,
  isFileActive,
}) => {
  return (
    <div
      className={`flex justify-between items-center p-2 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}
    >
      <select
        value={activeFileLanguage}
        onChange={onLanguageChange}
        className={`p-2 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"}`}
        disabled={!isFileActive}
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.name}
          </option>
        ))}
      </select>
      <div className="flex space-x-2">
        <button
          onClick={onSave}
          className="p-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          <Save size={18} />
        </button>
        <button
          onClick={onReset}
          className="p-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
        >
          <RotateCcw size={18} />
        </button>
        <button
          onClick={onDownload}
          className="p-2 rounded bg-green-500 hover:bg-green-600 text-white"
          disabled={!isFileActive}
        >
          <Download size={18} />
        </button>
        <button
          onClick={onFormat}
          className="p-2 rounded bg-purple-500 hover:bg-purple-600 text-white"
          disabled={!isFileActive}
        >
          Format
        </button>
        <button
          onClick={onThemeToggle}
          className="p-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </div>
  );
};
