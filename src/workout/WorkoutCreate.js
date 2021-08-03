import React, {useState} from 'react';

import {DateUtil} from '../util/DateUtil';
import { WorkoutRestUtil } from '../util/RestUtil';

const WorkoutCreate = props => {

    const [editMode, setEditMode] = useState(false);
    const [workoutType, setWorkoutType] = useState('Push');
    const [date, setDate] = useState(DateUtil.formatDate(new Date()));

    const workoutTypes = ['Push', 'Pull', 'Legs'];

    const handleSubmit = event => {
        event.preventDefault();
        let workout = {date : date, workoutType : workoutType.toUpperCase(), exercises : [ ] };
        props.setWorkout(workout);
        WorkoutRestUtil.create(workout);
        //setEditMode(false);
    }

    return (
        !editMode ?
        <div className="workout-create-button" onClick={() => setEditMode(true)}>
            Create Workout
        </div>
        :
        <div className='workout-create-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Date:{" "}
                    <input type="text" placeholder="MM/DD/YYYY" value={date} onChange={event => setDate(event.target.value)}/><br/>
                </label>
                <label>
                    Type:{" "}
                    <select value={workoutType} onChange={event => setWorkoutType(event.target.value)}>
                        <option>Push</option>
                        <option>Pull</option>
                        <option>Legs</option>
                    </select><br/>
                </label>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default WorkoutCreate;