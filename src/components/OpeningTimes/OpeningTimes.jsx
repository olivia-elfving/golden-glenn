import { useEffect, useState } from "react";
import nextOpeningTime from "../../helpers/nextOpeningTime";

function OpeningTime() {
    const [nextTime, setNextTime] = useState(null);

    useEffect(() => {
        setNextTime(nextOpeningTime());
    }, []);

    if (nextTime && nextTime.type === "private") {
        return <p className="bridge__label">Nästa planerade broöppning: {nextTime.time}</p>;
    }
    else if (nextTime && nextTime.type === "commercial") {
        return <p className="bridge__label">Vanlig tid för broöppning: {nextTime.time} - {nextTime.endTime}</p>;
    }
    return null;
}

export default OpeningTime;

