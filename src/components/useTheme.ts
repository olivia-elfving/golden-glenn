import { useState, useEffect } from "react";
import { themes } from "./themes";

interface Time {
    hour: number,
    date: number,
    month: number,
    weekday: number
}

function useTheme() {

    const [theme, setTheme] = useState<string>(themes.Cars);
    
    const ghostHour = (time: Time) => {
        if ((time.hour >= 0 && time.hour <= 4) || time.hour >= 23) {
            setTheme(themes.Ghosts);
        } else if (time.month === 9 && (time.date === 30 || time.date === 31)) {
            setTheme(themes.Ghosts);
        } else if (time.month === 10 && (time.date >= 1 && time.date <= 6)) {
            setTheme(themes.Ghosts);
        }
    }

    const bouncing = (time: Time) => {
        // 5 is friday
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
        if (time.weekday === 5 && time.hour >= 15) {
            setTheme(themes.Bouncing)
        }

        /*
            15 februari: internationella barncancerdagen.
            28 december: menlösa barns dag
            20 november: barnkonventionens dag
            13 november: hint till barncancerfonden
        */
    }

    const gingerbread = (time: Time) => {
        // 13 && 20-27 december
        if (time.month === 11 && (time.date === 13 || (time.date >= 20 && time.date <= 27))) {
            setTheme(themes.Gingerbread);
        }
    }
    
    useEffect(() => {
        const now = new Date();
        checkTime();
        setInterval(checkTime, 60000);
        
        function checkTime() {
            const currentTime: Time = {
                hour: now.getHours(),
                date: now.getDate(),
                month: now.getMonth(),
                weekday: now.getDay()
            };

            bouncing(currentTime);
            ghostHour(currentTime);
            gingerbread(currentTime);
        }
    }, []);

    return theme;
}

export default useTheme;

