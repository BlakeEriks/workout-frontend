import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

import "./workout.scss";
import WorkoutCreate from './WorkoutCreate';
import Exercise from './Exercise';
import ExerciseAdd from './ExerciseAdd';
import { WorkoutRestUtil, ExerciseRestUtil} from '../util/RestUtil';
import {DateUtil} from '../util/DateUtil';

const Workout = props => {

    const [exists, setExists] = useState(false);
    const [date, setDate] = useState();
    const [workoutType, setWorkoutType] = useState();
    const [exercises, setExercises] = useState();

    const setWorkout = workout => {
        setExists(true);
        setDate(workout.date);
        setWorkoutType(workout.workoutType);
        setExercises(workout.exercises);
    }

    useEffect( () => {
        WorkoutRestUtil.getByDate(DateUtil.formatDate(props.selectedDate), (status, data) => {
            if (status == 200) setWorkout(data);
        }, () => {
            setExists(false);
        });
    }, [props.selectedDate]);

    const addExercise = exerciseName => {
        const newExercise = { uuid: uuidv4(), name: exerciseName, sets: [] };
        console.log(exercises);
        setExercises([...exercises, newExercise]);
        WorkoutRestUtil.addExercise(DateUtil.formatDate(props.selectedDate), newExercise);
    }

    const deleteExercise = exerciseUuid => {
        setExercises([exercises.filter(exercise => exercise.uuid !== exerciseUuid)]);
        ExerciseRestUtil.deleteExercise(exerciseUuid);
    }

    return (
        (exists) ? 
        <ul className="exercise-list">
            {exercises != null && exercises.map(exercise => (
                <Exercise
                    key={exercise.uuid}
                    {...exercise}
                    deleteExercise={deleteExercise}
                />
            ))}
            <ExerciseAdd addExercise={addExercise} />
        </ul>
        : <WorkoutCreate setWorkout={setWorkout}/>
        
    )
};

export default Workout;