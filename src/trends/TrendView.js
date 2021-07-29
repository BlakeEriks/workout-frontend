import React, {useState, useEffect} from 'react';
import moment from 'moment';

import ExerciseGraph from './ExerciseGraph';
import ExerciseSelector from './ExerciseSelector';
import { WorkoutRestUtil, ExerciseRestUtil } from '../util/RestUtil';

const TrendView = () => {

    const [selectedExercise, setSelectedExercise] = useState(); 
    const [exercises, setExercises] = useState();

    useEffect( () => {
        const exerciseCallback = (status, data) => {
            if (status !== 200) {
                console.log('Error fetching exercises for: ' + selectedExercise.name);
            }
            setExercises(data);
        }
        if (!selectedExercise) {
            WorkoutRestUtil.getAll(exerciseCallback);
        }
        else {
            ExerciseRestUtil.getAllByName(selectedExercise.name, exerciseCallback);
        }
    }, [selectedExercise]);

    return (
        <div>
            <ExerciseSelector setSelectedExercise={setSelectedExercise}/>
            <ExerciseGraph selectedExercise={selectedExercise} exercises={exercises}/>
        </div>
    );
};

export default TrendView;