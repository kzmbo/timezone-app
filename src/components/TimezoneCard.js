import React from 'react'
import Time from './Time'
import Clock from './Clock'
import Location from './Location'

const TimezoneCard = ( { time } ) => {
    return (
        <div>
            <Time time={time}/>
            <Clock />
            <Location />
        </div>
    )
}

export default TimezoneCard
