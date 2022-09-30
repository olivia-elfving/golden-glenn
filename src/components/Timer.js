import React from 'react';
import { useState, useEffect } from "react";
import { msToMinSec } from '../helpers/timeConverter';

function Timer() {
    const [count, setCount] = useState(900000); //15min
    
    //console.log("hej")
    useEffect(() => {
        const intervalId = setInterval(function() {
            if (count <= 0) {
                clearInterval(intervalId);
            } else {
                setCount(count - 1000);
                //console.log("interval")
            } 
        }, 1000);
        return () => clearInterval(intervalId)
    }, [count]);

    

    return (
        <>
            <p className="bridge__label">Tid till broöppning: {msToMinSec(count)}</p>
        </>
    )  
}

export default Timer;