import React from "react";
import TextUpdater from "./components/TextUpdater";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";
import "./index.css"; 

function App() {
  return (
    <div className="App flex flex-col items-center gap-6 p-6">
      <TextUpdater />
      <Form />
      <UserCard name="John Doe" email="johndoe@example.com" />
      <Button text="Click Me" onClick={() => console.log("Button clicked!")} />
      <LoginForm />
    </div>
  );
}

export default App;



