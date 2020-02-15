import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import TodoItem from "./components/TodoItem";

const App = () => {
  return (
    <main>
      <Greeting />
      <TodoItem />
    </main>
  );
};

export default App;
