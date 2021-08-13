import React from 'react'
import Time from './Time'
import Clock from './Clock'
import Location from './Location'

const TimezoneCard = ( { time } ) => {
    return (
        <div id="timezone-card">
            <Time time={time}/>
            <Location />
            <Clock />
        </div>
    )
}

export default TimezoneCard
