import React from 'react';
import {WEEKDAYS_ABBREV} from "./WeekdaySelector"
import "./weekday-selector.scss";

const Weekday = props => {
    return (
        <div className={`weekday ${props.selected ? "selected" : ""}`}
             onClick={() => props.updateSelected(props.day)}
        >
            {WEEKDAYS_ABBREV[props.day.getDay()]}
        </div>
    );
};

export default Weekday;