import React from 'react';
import { useState, useEffect } from "react";
import { msToMinSec } from '../helpers/timeConverter';

function Timer() {
    const [count, setCount] = useState(900000); //900000
    const [countUp, setCountUp] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(function() {
            if (count === 0) {
                clearInterval(intervalId);
            } else {
                setCount(count - 1000);
            } 
        }, 1000);
        return () => clearInterval(intervalId)
    }, [count]);

    useEffect(() => {
        const intervalCountUpId = setInterval(function() {
            if (count === 0) {
                setCountUp(countUp + 1000);
            } else if (countUp > 7200000) {
                clearInterval(intervalCountUpId);
            }
        }, 1000);
        return () => clearInterval(intervalCountUpId);
    }, [count, countUp])

    return (
        <>
            {count > 0 && <p className="bridge__label">Tid till broöppning: {msToMinSec(count)}</p>}
            {count === 0 && <p className="bridge__label">Tid bron vart öppen: {msToMinSec(countUp)}</p>}
        </>
    )  
}

export default Timer;