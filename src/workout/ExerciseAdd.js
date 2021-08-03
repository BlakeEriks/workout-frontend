import React, {useState} from 'react';

import "./workout.scss";

const ADD_EXERCISE = "Add Exercise";
const ESCAPE_KEY = 27;

const ExerciseAdd = props => {

    const [name, setName] = useState('');
    const [addMode, setAddMode] = useState(false);

    const handleChange = event => {
        setName(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (name !== "") {
            props.addExercise(name);
        }
        setName('');
        setAddMode(false);
    }

    const handleKeyPress = event => {
        if (event.keyCode === ESCAPE_KEY) {
            setAddMode(false);
            setName();
        }
    }

    return (
        <li className="add-exercise" onClick={() => setAddMode(true)}>
            {addMode ? 
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" value={name} onChange={handleChange} onKeyDownCapture={handleKeyPress} autoFocus/>
                    </label>
                </form> 
            : ADD_EXERCISE}
        </li>
    );
};

export default ExerciseAdd;