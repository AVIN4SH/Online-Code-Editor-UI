# Online Code Editor UI (Frontend)

## Overview

This project is a React-based online code editor. It provides a user-friendly interface for writing, editing, and running code in multiple programming languages. The application is built using React and TypeScript, with a focus on creating a lightweight yet functional coding environment.

## Features

- **Multi-language Support**: Write code in Python, JavaScript, TypeScript, Java, C++, and Ruby.
- **File and Folder Management**: Create, delete, and organize files and folders in a tree-like structure.
- **Custom Code Editor**: A simple, lightweight code editor built from scratch.
- **Local Storage**: Automatically save your work to the browser's local storage.
- **Code Formatting**: Basic code formatting for JavaScript/TypeScript and Python.
- **Dark/Light Theme**: Toggle between dark and light themes for comfortable coding in any environment.
- **Simulated Code Execution**: Simulate running your code and see the output.
- **Keyboard Shortcuts**: Use Ctrl+S to quickly save your work.

## Technical Highlights

- **React Hooks**: Utilizes useState and useEffect for state management and side effects.
- **TypeScript**: Strongly typed for better code quality and developer experience.
- **Custom File System**: Implements a tree-like data structure for file and folder management.
- **Tailwind CSS**: Styled using Tailwind CSS for a responsive and clean UI.
- **No External Editor**: Custom-built code editor without relying on heavy external libraries.
- **Component-based Architecture**: Organized into reusable components for better maintainability.
- **Custom Hooks**: Implements custom hooks for file system management and local storage.

## Project Structure
```
src/
├── components/
│ ├── CodeEditor.tsx
│ ├── FileExplorer.tsx
│ ├── OutputPanel.tsx
│ └── Toolbar.tsx
├── hooks/
│ ├── useFileSystem.ts
│ └── useLocalStorage.ts
| └── syntaxHighlighter.ts (Not Integrated its functionality as many CSS changes will have to be made)
├── utils/
│ ├── constants.ts
│ └── formatters.ts
├── types/
│ └── index.ts
├── App.tsx
└── index.tsx
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/programiz-clone.git
   ```

2. Install dependencies:
   ```
   cd programiz-clone
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:3000

## Future Enhancements

- Implement real code execution on the backend
- Add more advanced code editor features like syntax highlighting and auto-completion
- Integrate with cloud storage for saving projects
- Implement user authentication and project sharing capabilities
- Add support for more programming languages
- Implement a plugin system for extending functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
