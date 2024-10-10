import { Language, FolderType } from "../types";

export const languages: Language[] = [
  { name: "Python", value: "python", extensions: [".py"] },
  { name: "JavaScript", value: "javascript", extensions: [".js"] },
  { name: "TypeScript", value: "typescript", extensions: [".ts", ".tsx"] },
  { name: "Java", value: "java", extensions: [".java"] },
  { name: "C++", value: "cpp", extensions: [".cpp", ".hpp"] },
  { name: "Ruby", value: "ruby", extensions: [".rb"] },
];

export const initialFolder: FolderType = {
  name: "Project",
  isOpen: true,
  files: [
    { name: "main.py", content: 'print("Hello, World!")', language: "python" },
    {
      name: "script.js",
      content: 'console.log("Hello, JavaScript!");',
      language: "javascript",
    },
  ],
  folders: [],
};
