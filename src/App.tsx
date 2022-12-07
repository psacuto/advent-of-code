import React from "react";
import { Puzzle } from "./components/puzzle";
import { day1_1, day1_2 } from "./services/day1";
import { day2_1, day2_2 } from "./services/day2";
import { day3_1, day3_2 } from "./services/day3";
import { day4_1, day4_2 } from "./services/day4";
import { day5_1, day5_2 } from "./services/day5";
import { day6_1, day6_2 } from "./services/day6";
import { day7_1, day7_2 } from "./services/day7";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Puzzle name="Day 1" part1={day1_1} part2={day1_2} />
          <Puzzle name="Day 2" part1={day2_1} part2={day2_2} />
          <Puzzle name="Day 3" part1={day3_1} part2={day3_2} />
          <Puzzle name="Day 4" part1={day4_1} part2={day4_2} />
          <Puzzle name="Day 5" part1={day5_1} part2={day5_2} />
          <Puzzle name="Day 6" part1={day6_1} part2={day6_2} />
          <Puzzle name="Day 7" part1={day7_1} part2={day7_2} />
        </div>
      </header>
    </div>
  );
}

export default App;
