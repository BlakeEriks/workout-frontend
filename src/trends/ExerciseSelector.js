import React, {useState, useEffect} from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

import { ExerciseRestUtil } from '../util/RestUtil';
import "./trend.scss"

const useStyles = makeStyles({
    root: {
        width: '300px',
        margin: "0 auto",
        background: 'rgba(220,220,220,0.5)',
    },
    option: {
        fontSize: 15,
        width: '300px',
    },
    paper: {
        background: 'rgba(220,220,220,0.4)',
    }
});

const ExerciseSelector = props => {

    const [exerciseNames, setExerciseNames] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        ExerciseRestUtil.getAllNames(setExerciseNames);
    }, []);

    const onSelect = (event, value) => {
        console.log(value);
        props.setSelectedExercise(value);
    }

    return (
        <Autocomplete
            options={exerciseNames}
            getOptionLabel={(exercise) => exercise.name}
            classes={{...classes}}
            onChange={onSelect}
            renderInput={(params) => <TextField {...params} label="Exercise" variant="outlined" />}
        />
    );
}

export default ExerciseSelector;