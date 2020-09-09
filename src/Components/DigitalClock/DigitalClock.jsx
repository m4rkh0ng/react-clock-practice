import * as React from 'react';
import './DigitalClock.css';

export default class DigitalClock extends React.Component {
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

        return(
            <div className={"digital-clock"}>
                {hours}:{minutes}:{seconds}
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