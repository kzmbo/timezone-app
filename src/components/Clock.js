import React from 'react'
import moon from '../pictures/moon.png'
import sun from '../pictures/sun.png'

const Clock = ( {time} ) => {
    function checkTime(){
        let hour = time.getHours()
        if(hour >= 19 || hour < 7) return <img src={moon}></img>
        if(hour < 19 && hour >= 7) return <img src={sun}></img>
    }
    
    return (
        <div id="img-box">
            {checkTime()}
        </div>
    )
}


/* <section id="clock-outside-border">
                <section id="clock-inside">
                    <section id="clock-hour-hand">

                    </section>
                    <section id="clock-minute-hand">

                    </section>
                </section>
            </section> */



export default Clock
