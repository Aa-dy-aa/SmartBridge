import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (inputValue.trim() === "") {
      console.log("Input is empty!"); // Debugging empty input case
    } else {
      console.log("Submitted Value:", inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-3">
      <label htmlFor="textInput" className="sr-only">
        Enter text
      </label>
      <input
        type="text"
        id="textInput"  // ✅ Added id
        name="textInput" // ✅ Added name
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
        className="border p-2 rounded w-64"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;

