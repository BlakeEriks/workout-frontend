import React, {useState} from 'react';

const WorkoutCreate = props => {

    const [editMode, setEditMode] = useState(false);
    const [workoutType, setWorkoutType] = useState('Push');
    const [date, setDate] = useState(new Date());

    const workoutTypes = ['Push', 'Pull', 'Legs'];

    const handleSubmit = event => {
        event.preventDefault();
        console.log(date + ' ' + workoutType);
    }

    return (
        !editMode ?
        <div className="workout-create-button" onClick={() => setEditMode(true)}>
            Create Workout
        </div>
        :
        <div className='workout-create-form'>
            <form onSubmit={handleSubmit}>
                <input type="date" value={date} onChange={event => setDate(event.target.value)}/>
                <select value={workoutType} onChange={event => setWorkoutType(event.target.value)}>
                    <option>Push</option>
                    <option>Pull</option>
                    <option>Legs</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default WorkoutCreate;