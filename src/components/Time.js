import React from 'react'

const Time = ( {time} ) => {
    return (
        <div id="time-box">
            <p id="time-text">{time.toLocaleTimeString()}</p>
        </div>
    )
}

export default Time
