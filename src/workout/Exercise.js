import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

import ExerciseDetails from './ExerciseDetails';
import Set from './Set';
import SetAdd from './SetAdd';
import {ExerciseRestUtil} from "../util/RestUtil";

import "./workout.scss";

const Exercise = props => {

    const [showSets, setShowSets] = useState(false);
    const [sets, setSets] = useState(props.sets);

    useEffect( () => {
        setSets(props.sets);
    }, [props.sets]);

    const addSet = (setWeight, setReps) => {
        const newSet = { weight: setWeight, reps: setReps, uuid: uuidv4() };
        setSets( [...sets, newSet] );
        ExerciseRestUtil.addSet(props.uuid, newSet);
    }

    const deleteSet = setUuid => {
        setSets( [...sets.filter(set => set.uuid !== setUuid)] );
        ExerciseRestUtil.deleteSet(props.uuid, setUuid);
    }

    return (
        <li className="exercise-item">
            <ExerciseDetails setShowSets={setShowSets} showSets={showSets} sets={sets} 
                                name={props.name} deleteExercise={props.deleteExercise}/>
            {
            showSets &&
            <ul className="set-list">
                {sets.map(set => (
                    <Set key={set.uuid} {...set} deleteSet={deleteSet}/>
                ))}
                <SetAdd addSet={addSet}/>
            </ul>
            }
        </li>
    );
};

export default Exercise;