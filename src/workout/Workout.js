import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

import "./workout.scss";
import WorkoutCreate from './WorkoutCreate';
import Exercise from './Exercise';
import ExerciseAdd from './ExerciseAdd';
import { WorkoutRestUtil, ExerciseRestUtil} from '../util/RestUtil';
import {DateUtil} from '../util/DateUtil';

const Workout = props => {

    const [workout, setWorkout] = useState();

    useEffect( () => {
        const workoutCallback = (status, data) => {
            if (status !== 200) {
                console.log('Error fetching workout for date: ' + props.selectedDate);
            }
            setWorkout(data);
            console.log(workout);
        }
        WorkoutRestUtil.getByDate(DateUtil.formatDate(props.selectedDate), workoutCallback);
    }, [props.selectedDate]);

    const addExercise = exerciseName => {
        const newExercise = { uuid: uuidv4(), name: exerciseName, sets: [] };
        setWorkout( prevWorkout => [...prevWorkout.exercises, newExercise] );
        WorkoutRestUtil.addExercise(DateUtil.formatDate(props.selectedDate), newExercise);
    }

    const deleteExercise = exerciseUuid => {
        setWorkout( prevWorkout => [...prevWorkout.exercises.filter(exercise => exercise.uuid !== exerciseUuid)] );
        ExerciseRestUtil.deleteExercise(exerciseUuid);
    }

    return (
        (workout) ? 
        <ul className="exercise-list">
            {workout.exercises != null && workout.exercises.map(exercise => (
                <Exercise
                    key={exercise.uuid}
                    {...exercise}
                    deleteExercise={deleteExercise}
                />
            ))}
            <ExerciseAdd addExercise={addExercise} />
        </ul>
        : <WorkoutCreate />
        
    )
};

export default Workout;