import React, { useState, useRef, useEffect } from "react";
// npm run dev
// Import our command output components
import Help from "./components/Help.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import CommandNotFound from "./components/CommandNotFound.tsx";

const Prompt: React.FC = () => {
  return (
    <span className="prompt-text">
      <span>user@noahli</span>:~$
    </span>
  );
};

function App() {
  // State for the current input
  const [input, setInput] = useState<string>("");

  // State for the command history. It's an array of React Nodes (JSX)
  const [history, setHistory] = useState<React.ReactNode[]>([<Help key="0" />]);

  // Refs for the input and terminal window
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Scroll to the bottom whenever history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Type the keyboard event
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const command = input.trim().toLowerCase();
      let output: React.ReactNode;

      // This is the history line that shows what the user typed
      const commandHistoryLine = (
        <div key={history.length}>
          <Prompt /> {input}
        </div>
      );

      switch (command) {
        case "help":
          output = <Help />;
          break;
        case "about":
          output = <About />;
          break;
        case "projects":
          output = <Projects />;
          break;
        case "clear":
          setHistory([]); // Clear history
          setInput("");
          return;
        default:
          output = <CommandNotFound command={command} />;
      }

      // Add the command and its output to history
      setHistory([...history, commandHistoryLine, output]);
      setInput(""); // Clear the input
    }
  };

  // Focus the input when the user clicks anywhere in the terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="terminal" ref={terminalRef} onClick={focusInput}>
      {history.map((line, index) => (
        <div className="history-line" key={index}>
          {line}
        </div>
      ))}
      <div className="input-line">
        <Prompt />
        <input
          type="text"
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default App;
