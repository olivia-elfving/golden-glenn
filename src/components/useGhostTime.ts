import { useState, useEffect } from "react";

function useGhostTime() {
    const [isGhostTime, setGhostTime] = useState<boolean>(false);
    
    useEffect(() => {
        const now = new Date();
        checkTime();
        setInterval(checkTime, 60000);
        
        function checkTime() {
            const currentHour = now.getHours();
            const currentDate = now.getDate();
            const currentMonth = now.getMonth();

            if (currentHour >= 0 && currentHour <= 4) {
                setGhostTime(true);
            } else if (currentMonth === 9 && (currentDate === 30 || currentDate === 31)) {
                setGhostTime(true);
            } else if (currentMonth === 10 && (currentDate >= 1 && currentDate <= 6)) {
                setGhostTime(true);
            } else {
                setGhostTime(false);
            }
        }
    }, []);

    return isGhostTime;
}

export default useGhostTime;

