export const formatJavaScript = (content: string): string => {
  return content
    .replace(/([{([])\s*/g, "$1")
    .replace(/\s*([})\]])/g, "$1")
    .replace(/;?\s*$/gm, ";")
    .replace(/\s*:\s*/g, ": ")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s*=\s*/g, " = ");
};

export const formatPython = (content: string): string => {
  return content
    .replace(/^\s+/gm, "")
    .replace(/\s*:\s*/g, ": ")
    .replace(/\s*=\s*/g, " = ")
    .replace(/\s*,\s*/g, ", ");
};
