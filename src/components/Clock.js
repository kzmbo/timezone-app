import React from 'react'
import moon from '../pictures/moon.png'
import sun from '../pictures/sun.png'

const Clock = ( {time} ) => {
    function checkTime(){
        if(time.getHours() >= 19) return <img src={moon}></img>
        if(time.getHours() >= 8) return <img src={sun}></img>
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
