import React, {useState} from 'react';

import "./workout.scss";

import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

const SetAdd = props => {

    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [addMode, setAddMode] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const repInput = React.createRef();
    const weightInput = React.createRef();

    const handleRepChange = (event) => {
        setReps(event.target.value);
    }

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const weightAsNum = parseInt(weight);
        const repsAsNum = parseInt(reps);
        if (isNaN(weightAsNum) || isNaN(repsAsNum)) {
            console.log('Set values must be numbers');
            return;
        }
        props.addSet(weightAsNum, repsAsNum);
        setReps('');
        setWeight('');
        setAddMode(true);
        weightInput.current.focus();
    }

    return (
        <li className="add-set-item" onClick={() => setAddMode(true)} onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {addMode ?
                <React.Fragment>
                    <form className="add-set-form" onSubmit={handleSubmit} >
                        <input type="text" value={weight} onChange={handleWeightChange} ref={weightInput} autoFocus/>  <span className="add-set-text">&nbsp;lbs</span>
                    </form>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <form className="add-set-form" onSubmit={handleSubmit} > 
                        <input type="text" value={reps} onChange={handleRepChange} ref={repInput} />  <span className="add-set-text">&nbsp;reps</span>
                    </form>
                    
                </React.Fragment> 
                 
            : 
            <IconButton size="small" className="add-set-icon" aria-label="addSet">
                <AddBoxIcon className={`add-set-icon ${isHovered && 'hovered'} `}/> 
            </IconButton>
            }
               
        </li>
    );
};

export default SetAdd;