import React from "react";
import { DaysList } from "./components/daysList";

function App() {
  const names = ["day1_1", "day1_2", "day2_1", "day2_2"];

  return (
    <div className="App">
      <header className="App-header">
        <DaysList names={names} />
      </header>
    </div>
  );
}

export default App;
