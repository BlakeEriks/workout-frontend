import React, {useState} from 'react';

import "./workout.scss";

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Set = props => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <li onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`set-item ${isHovered && 'hovered'}`}>
            <IconButton className={'set-delete-button'}  aria-label="delete" size="small" onClick={() => props.deleteSet(props.uuid)}>
                <CloseIcon className={`set-delete-button ${isHovered && 'set-delete-button-hovered'}`} fontSize="small" />
            </IconButton>
            {props.weight} lbs x {props.reps} reps {props.pr && "*"}
        </li>
    );
};

export default Set;