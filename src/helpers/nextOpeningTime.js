import { isPublicHoliday } from 'swedish-holidays';
import moment from 'moment';

const times = ["05:35", "09:35", "11.35", "14:35", "18:35", "20:35"];

function holidayTimes(now) {
    if (isPublicHoliday() || isWeekend(now)) {
        times.push("07:35", "16:35");
    }
}

function isWeekend(now) {
    if (now.day() === 6 || now.day() === 0) {
        return true;
    }
    return false;
}

function timeSort() {
    times.sort();
}

function nextOpeningTime() {  
    const now = moment();
    holidayTimes(now);
    timeSort();

    for (let i = 0; i < times.length; i++) {
        const time = moment(times[i], "HH:mm");
        if (time.isAfter(now)) {
            return time.format("HH:mm");
        }
    }

    return times[0];
}

export default nextOpeningTime;
