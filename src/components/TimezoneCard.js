import React from 'react'
import Time from './Time'
import Clock from './Clock'
import Location from './Location'

const TimezoneCard = ( { time } ) => {
    return (
        <div id="timezone-card">
            <Time time={time}/>
            <Location />
            <Clock time={time}/>
        </div>
    )
}

export default TimezoneCard
