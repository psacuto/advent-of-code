import React, { useState } from "react";

interface DayProps {
  name: string;
  implementation: (input: string) => string;
}

export function Day({name, implementation}: DayProps) {
  const [dayInput, setDayInput] = useState("");
  const [result, setResult] = useState("");
  const [opened, setOpened] = useState(false);

  function execute() {
    setResult(implementation(dayInput));
  }

  if (opened) {
    return (
      <div>
        <h2>{name}</h2>
        <textarea
          cols={42}
          rows={21}
          onChange={(e) => setDayInput(e.currentTarget.value)}
        ></textarea>
        <button onClick={execute} disabled={!dayInput}>Execute</button>

        {result && <span>Result: {result}</span>}
        <button onClick={() => setOpened(false)}>CLOSE</button>
      </div>
    );
  } else {
    return <div><button onClick={() => setOpened(true)}>SOLVE {name}</button></div>;
  }
}
