import React, { useState } from "react";

interface DayProps {
  name: string;
  part1: (input: string) => string;
  part2: (input: string) => string;
}

export function Puzzle({ name, part1, part2 }: DayProps) {
  const [dayInput, setDayInput] = useState("");
  const [result, setResult] = useState("");
  const [opened, setOpened] = useState(false);

  function run(program: (input: string) => string) {
    const result = program(dayInput);
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
        <button onClick={() => run(part1)} disabled={!dayInput}>RUN PART 1</button>
        <button onClick={() => run(part2)} disabled={!dayInput}>RUN PART 2</button>
        <button onClick={() => setOpened(false)}>CLOSE</button>
        {result && <div>Result: <pre>{result}</pre></div>}
      </div>
    );
  } else {
    return <div><button onClick={() => setOpened(true)}>SOLVE {name}</button></div>;
  }
}
