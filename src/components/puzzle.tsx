import React, { useState } from "react";

interface DayProps {
  name: string;
  implementation: (input: string) => string;
}

export function Puzzle({ name, implementation }: DayProps) {
  const [dayInput, setDayInput] = useState("");
  const [result, setResult] = useState("");
  const [opened, setOpened] = useState(false);

  function run() {
    const timerName = "puzzle " + name;
    console.time(timerName);
    const result = implementation(dayInput);
    console.timeEnd(timerName);
    setResult(result);
  }

  if (opened) {
    return (
      <div>
        <h2>{name}</h2>
        <div>
          <textarea
            cols={42}
            rows={21}
            onChange={(e) => setDayInput(e.currentTarget.value)}
          ></textarea>
        </div>
        <button onClick={run} disabled={!dayInput}>RUN</button>

        {result && <div>Result: {result}</div>}
        <button onClick={() => setOpened(false)}>CLOSE</button>
      </div>
    );
  } else {
    return <div><button onClick={() => setOpened(true)}>SOLVE {name}</button></div>;
  }
}
