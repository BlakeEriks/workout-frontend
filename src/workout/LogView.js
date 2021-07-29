import React, { useState } from "react"

import "./workout.scss"
import WeekdaySelector from "../components/WeekdaySelector"
import Workout from "./Workout"

const LogView = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    
    return (
        <div className="weightlift-view">
            <WeekdaySelector updateSelectedDate={setSelectedDate}/>
            <Workout selectedDate={selectedDate} />
        </div>
    )

    // state = {
    //     exercises: [],
    //     selectedDate: new Date()
    // }

    // setExercisesCallback = (status, data) => {
    //     if (status !== 200) {
    //         console.log('Fetching workout for date: ' + this.state.selectedDate + ' returned ' + status);
    //         return;
    //     }
    //     const exercises = data.exercises;
    //     this.setState({exercises});
    // }

    // componentDidMount() {
    //     const today = DateUtil.formatDate(new Date());
    //     WorkoutRestUtil.getWorkoutForDate(today, this.setExercisesCallback);
    // }

    // componentDidUpdate(previousProps, previousState) {
    //     if (previousState.selectedDate && this.state.selectedDate){
    //         if (previousState.selectedDate.getDate() !== this.state.selectedDate.getDate()) {
    //             const date = DateUtil.formatDate(this.state.selectedDate)
    //             WorkoutRestUtil.getWorkoutForDate(date, this.setExercisesCallback);
    //         }
    //     }
    // }

    // updateSelectedDate = newDate => {
    //     this.setState({selectedDate: newDate});
    // }    
}

export default LogView;