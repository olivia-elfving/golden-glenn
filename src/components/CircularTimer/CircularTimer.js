import React from "react";
import './CircularTimer.css';

function CircularTimer() {
    return (
        <>
            <div className="counterCircle__container">
                <div className="counterCircle" role="progressbar"></div>
            </div> 
        </>
    )
}

export default CircularTimer;