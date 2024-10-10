//! Not Integrated completely yet

const highlightJavaScript = (code: string): string => {
  const keywords =
    /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await)\b/g;
  const strings = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
  const numbers = /\b\d+\b/g;
  const comments = /(\/\/.*|\/\*[\s\S]*?\*\/)/g;

  return code
    .replace(comments, '<span style="color: #6A9955;">$1</span>')
    .replace(keywords, '<span style="color: #569CD6;">$1</span>')
    .replace(strings, '<span style="color: #CE9178;">$1</span>')
    .replace(numbers, '<span style="color: #B5CEA8;">$1</span>');
};

const highlightPython = (code: string): string => {
  const keywords =
    /\b(def|class|if|else|elif|for|while|import|from|as|return|try|except|finally|with|lambda|yield)\b/g;
  const strings = /(["'`])(?:(?=(\\?))\2.)*?\1/g;
  const numbers = /\b\d+\b/g;
  const comments = /(#.*)/g;

  return code
    .replace(comments, '<span style="color: #6A9955;">$1</span>')
    .replace(keywords, '<span style="color: #569CD6;">$1</span>')
    .replace(strings, '<span style="color: #CE9178;">$1</span>')
    .replace(numbers, '<span style="color: #B5CEA8;">$1</span>');
};

export const highlightCode = (code: string, language: string): string => {
  switch (language) {
    case "javascript":
    case "typescript":
      return highlightJavaScript(code);
    case "python":
      return highlightPython(code);
    default:
      return code;
  }
};
