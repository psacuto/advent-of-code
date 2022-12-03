import React from "react";
import { Day } from "./components/day";
import { day1_1, day1_2 } from "./services/day1";
import { day2_1, day2_2 } from "./services/day2";
import { day3_1, day3_2 } from "./services/day3";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Day name="Day 1 - 1" implementation={day1_1} />
          <Day name="Day 1 - 2" implementation={day1_2} />
          <Day name="Day 2 - 1" implementation={day2_1} />
          <Day name="Day 2 - 2" implementation={day2_2} />
          <Day name="Day 3 - 1" implementation={day3_1} />
          <Day name="Day 3 - 2" implementation={day3_2} />
        </div>
      </header>
    </div>
  );
}

export default App;
