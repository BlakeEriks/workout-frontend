import React, { Component } from 'react';

import Weekday from "./Weekday";

import "./weekday-selector.scss";

export const WEEKDAYS_ABBREV = ["Su", "M", "T", "W", "Th", "F", "S"]

class WeekdaySelector extends Component {

    getWeekdays = () => {
        var date = new Date();
        //console.log(date)
        var weekdays = [];
        //set date to most recent monday
        while (date.getDay() !== 1) {
            if (date.getDay() === 0) {
                date.setDate(date.getDate() - 6);
            }
            else {
                date.setDate(date.getDate() - 1);
            }
        }
        //make list of dates for the week
        var i;
        for (i = 0; i < 7; i++) {
            var curDate = new Date(date.valueOf());
            curDate.setDate(date.getDate() + i);
            weekdays.push(curDate)
        }
        //console.log(weekdays);
        return weekdays;
    }

    constructor(props) {
        super(props);
        this.state.weekdays = [new Date(), new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),]
    }

    componentDidMount() {
        this.setState({
            weekdays : this.getWeekdays()
        })
    }

    state = {
        selectedDay : new Date()
    }

    updateSelected = (newSelectedDay) => {
        this.setState(({
            selectedDay : newSelectedDay
        }))
        this.props.updateSelectedDate(newSelectedDay);
    }

    render() {
        return (
            <div className="weekday-selector">
                <hr id="vertical"></hr>
                <Weekday updateSelected={this.updateSelected} day={this.state.weekdays[0]} selected={this.state.selectedDay.getDay() === 1}/>
                <hr id="vertical"></hr>
                <Weekday updateSelected={this.updateSelected} day={this.state.weekdays[1]} selected={this.state.selectedDay.getDay() === 2}/>
                <hr id="vertical"></hr>
                <Weekday updateSelected={this.updateSelected} day={this.state.weekdays[2]} selected={this.state.selectedDay.getDay() === 3}/>
                <hr id="vertical"></hr>
                <Weekday updateSelected={this.updateSelected} day={this.state.weekdays[3]} selected={this.state.selectedDay.getDay() === 4}/>
                <hr id="vertical"></hr>
                <Weekday updateSelected={this.updateSelected} day={this.state.weekdays[4]} selected={this.state.selectedDay.getDay() === 5}/>
                <hr id="vertical"></hr>
                <Weekday updateSelected={this.updateSelected} day={this.state.weekdays[5]} selected={this.state.selectedDay.getDay() === 6}/>
                <hr id="vertical"></hr>
                <Weekday updateSelected={this.updateSelected} day={this.state.weekdays[6]} selected={this.state.selectedDay.getDay() === 0}/>
                <hr id="vertical"></hr>
            </div>
        );
    }
}

export default WeekdaySelector;