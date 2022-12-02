import React, { useState } from "react";
import * as days from "../services/days";

interface DayProps {
  name: string;
}

export function Day(props: DayProps) {
  const [dayInput, setDayInput] = useState("");
  const [result, setResult] = useState("");
  const [solvable, setSolvable] = useState(false);

  function execute(name: string) {
    setResult((days as any)[name](dayInput));
  }

  if (solvable) {
    return (
      <div>
        <h2>{props.name}</h2>
        <textarea
          cols={42}
          rows={21}
          onChange={(e) => setDayInput(e.currentTarget.value)}
        ></textarea>
        <button onClick={() => execute(props.name)} disabled={!dayInput}>
          {props.name}
        </button>

        {result && <span>Result: {result}</span>}
      </div>
    );
  } else {
    return <button onClick={() => setSolvable(true)}>SOLVE {props.name}</button>;
  }
}
