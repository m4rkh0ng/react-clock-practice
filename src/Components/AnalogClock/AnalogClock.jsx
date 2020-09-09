import * as React from 'react';
import './AnalogClock.css';
import DigitalClock from '../DigitalClock/DigitalClock.jsx';

export default class AnalogClock extends React.Component {
    clockInterval = "";
    constructor(props) {
        super(props);
        this.handleDate = this.handleDate.bind(this);
        this.state = {
            hours: "",
            minutes: "",
            seconds: ""
        }
    }

    componentDidMount() {
        this.clockInterval = setInterval(this.handleDate, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval);
    } 

    render() {
        const { hours, minutes, seconds } = this.state;
        
        const secondsStyle = {
            transform: `rotate(${seconds * 6}deg)`
        }

        const minutesStyle = {
            transform: `rotate(${minutes * 6}deg)`
        }

        const hoursStyle = {
            transform: `rotate(${hours * 30}deg)`
        }

        const { title } = this.props;

        return(
            <div className="clock-container">
                <div className={"analog-clock"}>
                    <div className={"dial seconds"} style={secondsStyle}/>
                    <div className={"dial minutes"} style={minutesStyle}/>
                    <div className={"dial hours"} style={hoursStyle}/>
                    <div className={"numerals"}></div>
                </div>
                <div className="clock-info">
                    <div className={"timezone"}>{title}</div>
                    <DigitalClock dateDiff={this.props.dateDiff}/>
                </div>
            </div>
        )
    }

    handleDate() {
        const { dateDiff } = this.props;
        const date = new Date();
        date.setHours(date.getUTCHours() + dateDiff);
        
        let hours = this.formatTime(date.getUTCHours());
        let minutes = this.formatTime(date.getMinutes());
        let seconds = this.formatTime(date.getSeconds());

        this.setState({ hours, minutes, seconds }); 
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}