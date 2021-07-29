import React from 'react';
import "./app.scss"

const ViewSelector = props => {
    return (
        <ul className="navList">
            <li onClick={() => props.setView("goalView")}>Weekly Goals</li>
            <li onClick={() => props.setView("logView")}>Logbook</li>
            <li onClick={() => props.setView("trendView")}>Trends</li>
        </ul>
    );
};

export default ViewSelector;