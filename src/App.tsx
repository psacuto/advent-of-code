import React from "react";
import { DaysList } from "./components/daysList";
import logo from "./logo.svg";

function App() {
  const names = ["day1_1", "day1_2"];

  return (
    <div className="App">
      <header className="App-header">
        <DaysList names={names} />
      </header>
    </div>
  );
}

export default App;
