import React from "react";
import { Day } from "./day";

interface DaysListProps {
    names: string[];
}

export function DaysList(props: DaysListProps) {
    return (
        <div>
            {
                props.names.map(name => <Day name={name} />)
            }
        </div>
    );
}