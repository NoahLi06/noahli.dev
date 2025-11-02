import React, { useState, useRef, useEffect } from "react";
// npm run dev
// Import our command output components
import Help from "./components/Help.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import CommandNotFound from "./components/CommandNotFound.tsx";
import Socials from "./components/Socials.tsx";

const Prompt: React.FC = () => {
  return (
    <span className="prompt-text">
      <span>user@noahli</span>:~$
    </span>
  );
};

function App() {
  const [input, setInput] = useState<string>("");

  const [history, setHistory] = useState<React.ReactNode[]>([
    <p key="0">type 'help' to get started</p>,
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const command = input.trim().toLowerCase();
      let output: React.ReactNode;

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
        case "socials":
          output = <Socials />;
          break;
        default:
          output = <CommandNotFound command={command} />;
      }

      setHistory([...history, commandHistoryLine, output]);
      setInput("");
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="app-container">
      <div className="static-header">
        <p>noahli.dev</p>
      </div>
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
    </div>
  );
}

export default App;
