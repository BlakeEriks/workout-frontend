import React, {useState} from 'react';

import DateFnsUtils from '@date-io/date-fns';

import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const WorkoutCreate = props => {

    const [editMode, setEditMode] = useState(false);
    const [workoutType, setWorkoutType] = useState('');
    const [date, setDate] = useState('');

    const workoutTypes = ['Push', 'Pull', 'Legs'];

    return (
        !editMode ?
        <div className="workout-create-button" onClick={() => setEditMode(true)}>
            Create Workout
        </div>
        :
        <div className='workout-create-form'>
            <form>
                <label>
                    <div className="workout-date-picker">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={workoutType}
                            onChange={setWorkoutType}
                            helperText="Please select your currency"
                            >
                            {workoutTypes.map(option => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default WorkoutCreate;