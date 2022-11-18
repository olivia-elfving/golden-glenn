import { useEffect, useState } from "react";
import nextOpeningTime from "../../helpers/nextOpeningTime";

function OpeningTime() {
    const [nextTime, setNextTime] = useState([]);

    useEffect(() => {
        setNextTime(nextOpeningTime());
    }, []);

    const upcomingTime = () => {
        if (nextTime.length && nextTime[0] && nextTime[0].type === "private") {
            return <p data-testid="next_time" className="bridge__label">Nästa planerade broöppning: {nextTime[0].time}</p>;
        }
        else if (nextTime.length && nextTime[0] && nextTime[0].type === "commercial") {
            return <p data-testid="next_time" className="bridge__label">Vanlig tid för broöppning: {nextTime[0].startTime} - {nextTime[0].time}</p>;
        }
    }

    const timeAfterTime = () => {
        if (nextTime.length && nextTime.length > 1 && nextTime[1]) {
            return <p className="bridge__label">Därefter: {nextTime[1]?.startTime || nextTime[1]?.time}</p>;
        }
        return null;
    }

    return (
        <>
            {upcomingTime()}
            {timeAfterTime()}
        </>
    );
}

export default OpeningTime;

