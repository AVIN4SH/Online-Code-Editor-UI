import React from "react";
import { Play } from "lucide-react";

interface OutputPanelProps {
  onRun: () => void;
  isRunning: boolean;
  theme: "dark" | "light";
  isFileActive: boolean;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({
  onRun,
  isRunning,
  theme,
  isFileActive,
}) => {
  return (
    <div
      className={`h-1/3 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} p-4 overflow-auto`}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Output</h3>
        <button
          onClick={onRun}
          className={`px-4 py-2 rounded text-white flex items-center transition-colors ${
            isRunning ? "bg-yellow-500" : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={!isFileActive || isRunning}
        >
          <Play className="mr-2" size={18} />
          {isRunning ? "Running..." : "Run"}
        </button>
      </div>
      <div
        className={`flex items-center justify-center h-32 ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        } rounded-lg transition-all ${isRunning ? "animate-pulse" : ""}`}
      >
        <p
          className={`text-lg font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          {isRunning
            ? "Running your code..."
            : "Code execution feature coming soon!"}
        </p>
      </div>
    </div>
  );
};
