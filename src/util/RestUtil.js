import axios from 'axios'

const BASE_REST_URI = "http://localhost:8080/api/v1/";
const BASE_WORKOUT_REST_URI = BASE_REST_URI + 'workout/';
const BASE_EXERCISE_REST_URI = BASE_REST_URI + 'exercise/';
const FORWARD_SLASH = '/';
const ADD = 'add';
const EXERCISES = 'exercises';
const NAMES = "names";
const SETS = 'sets';

const spaceToUnderscore = string => {
    if (string.includes(' ')) {
        return string.split(' ').join('_');
    }
    else {
        return string;
    }
}

export class WorkoutRestUtil {

    static create(workout) {
        axios.post(BASE_WORKOUT_REST_URI + ADD, workout);
    }

    static getByDate(date, callback, throws) {
        axios.get(BASE_WORKOUT_REST_URI + date)
            .then(response => callback(response.status, response.data))
            .catch(() => {console.clear(); throws();});
    }

    static getAll(callback) {
        axios.get(BASE_WORKOUT_REST_URI)
            .then(response => callback(response.status, response.data));
    }

    static addExercise(date, exercise) {
        axios.post(BASE_WORKOUT_REST_URI + date + FORWARD_SLASH + EXERCISES, exercise);
    }
}

export class ExerciseRestUtil {    
    static deleteExercise(exerciseUuid) {
        axios.delete(BASE_EXERCISE_REST_URI + exerciseUuid);
    }

    static addSet(exerciseUuid, set) {
        axios.post(BASE_EXERCISE_REST_URI + exerciseUuid + FORWARD_SLASH + SETS, set);
    }
    
    static deleteSet(exerciseUuid, setUuid) {
        axios.delete(BASE_EXERCISE_REST_URI + exerciseUuid + FORWARD_SLASH + SETS + FORWARD_SLASH + setUuid);
    }

    static getAllNames(callback) {
        axios.get(BASE_EXERCISE_REST_URI + NAMES)
             .then(response => callback(response.data));
    }

    static getAllByName(name, callback) {
        console.log(BASE_EXERCISE_REST_URI + spaceToUnderscore(name));
        axios.get(BASE_EXERCISE_REST_URI + name)
             .then(response => callback(response.status, response.data));
    }
}