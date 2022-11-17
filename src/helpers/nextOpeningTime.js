import { isPublicHoliday } from 'swedish-holidays';
import moment from 'moment';

const times = [
    {
        type: "private",
        time: "05:35",
        weekdays: true,
        weekends: true
    },
    {
        type: "private",
        time: "07:35",
        weekdays: false,
        weekends: true
    },
    {
        type: "commercial",
        startTime: "09:00",
        time: "09:15",
        weekdays: true,
        weekends: false
    },
    {
        type: "private",
        time: "09:35",
        weekdays: true,
        weekends: true
    },
    {
        type: "private",
        time: "11:35",
        weekdays: true,
        weekends: true
    },
    {
        type: "private",
        time: "14:35",
        weekdays: true,
        weekends: true
    },
    {
        type: "private",
        time: "16:35", 
        weekdays: false,
        weekends: true 
    },
    {
        type: "commercial",
        startTime: "18:00",
        time: "18:15",
        weekdays: true,
        weekends: false
    }, 
    {
        type: "private",
        time: "18:35",
        weekdays: true,
        weekends: true
    },
    {
        type: "private",
        time: "20:35",
        weekdays: true,
        weekends: true
    }
];

function filterTimes(now) {
    if (isPublicHoliday() || isWeekend(now)) {
        return times.filter(obj => {
            return obj.weekends === true
        })
    } else {
        return times.filter(obj => {
            return obj.weekdays === true
        })
    }
}

function isWeekend(now) {
    if (now.day() === 6 || now.day() === 0) {
        return true;
    }
    return false;
}

function availableTimes(filteredTimes, now) {
    return filteredTimes.filter(obj => {
        const time = moment(obj.time, "HH:mm");
        if (time.isAfter(now)) {
            return time.format("HH:mm");
        }
        return false;
    })
}

function nextTimeWithInTheHour(timeSlot, now) {
    const _time = moment(timeSlot.time, "HH:mm");
    const duration = moment.duration(_time.diff(now));
    const minutes = duration.asMinutes();
    if (minutes < 60) {
        return timeSlot;
    }
    return null;
}

function nextOpeningTime() {  
    const now = moment();
    const filteredTimes = filterTimes(now);
    const availableFutureTimes = availableTimes(filteredTimes, now);
    const nextTime = nextTimeWithInTheHour(availableFutureTimes[1], now);
    return [availableFutureTimes[0] || times[0], nextTime];
}

export default nextOpeningTime;
