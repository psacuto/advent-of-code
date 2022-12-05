import React from "react";
import { Puzzle } from "./components/puzzle";
import { day1_1, day1_2 } from "./services/day1";
import { day2_1, day2_2 } from "./services/day2";
import { day3_1, day3_2 } from "./services/day3";
import { day4_1, day4_2 } from "./services/day4";
import { day5_1, day5_2 } from "./services/day5";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Puzzle name="Day 1 - 1" implementation={day1_1} />
          <Puzzle name="Day 1 - 2" implementation={day1_2} />
          <Puzzle name="Day 2 - 1" implementation={day2_1} />
          <Puzzle name="Day 2 - 2" implementation={day2_2} />
          <Puzzle name="Day 3 - 1" implementation={day3_1} />
          <Puzzle name="Day 3 - 2" implementation={day3_2} />
          <Puzzle name="Day 4 - 1" implementation={day4_1} />
          <Puzzle name="Day 4 - 2" implementation={day4_2} />
          <Puzzle name="Day 5 - 1" implementation={day5_1} />
          <Puzzle name="Day 5 - 2" implementation={day5_2} />
        </div>
      </header>
    </div>
  );
}

export default App;
