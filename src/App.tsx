import React from "react";
import { Day } from "./components/day";
import { day1_1 } from "./services/day1_1";
import { day1_2 } from "./services/day1_2";
import { day2_1 } from "./services/day2_1";
import { day2_2 } from "./services/day2_2";
import { day3_1 } from "./services/day3_1";
import { day3_2 } from "./services/day3_2";

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
