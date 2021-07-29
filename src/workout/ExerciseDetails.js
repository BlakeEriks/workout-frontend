import React, {useState} from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import "./workout.scss";

const ExerciseDetails = props => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="exercise-details" onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => props.setShowSets(!props.showSets)}>
            <IconButton className="exercise-delete-button" onClick={() => props.deleteExercise(props.uuid)}>
                <CloseIcon className={`exercise-delete-button ${isHovered && 'exercise-delete-button-hovered'}`} />
            </IconButton>
            <div className={`exercise-name ${isHovered && 'hovered'}`} >
                {props.name}
            </div>
            <div className={`set-count ${isHovered && 'hovered'}`} >
                    {props.sets === 0 ? "No" : props.sets.length} Set{props.sets.length !== 1 && "s"}
            </div>
            <IconButton size="small" className='set-drop-down-button' onClick={() => props.setShowSets(!props.showSets)}>
                {props.showSets ? 
                    <ArrowDropUpIcon className={`set-drop-down-button ${isHovered && 'hovered'} `} /> :
                    <ArrowDropDownIcon className={`set-drop-down-button ${isHovered && 'hovered'} `} />
                }
            </IconButton>
        </div>
    );
};

export default ExerciseDetails;