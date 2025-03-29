import React, { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState(""); // State to track input value

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/2 max-w-sm text-center">
      <h2 className="text-xl font-semibold mb-2">Text Updater</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="border p-2 rounded w-full"
      />
      <p className="mt-4 text-gray-700 font-medium">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;

