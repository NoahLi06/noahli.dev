import React from "react";

// Define the shape of the props this component expects
interface CommandNotFoundProps {
  command: string;
}

const CommandNotFound: React.FC<CommandNotFoundProps> = ({ command }) => {
  return (
    <div className="output-component">
      <p>bash: command not found: {command}</p>
      <p>Type 'help' to see a list of available commands.</p>
    </div>
  );
};

export default CommandNotFound;
