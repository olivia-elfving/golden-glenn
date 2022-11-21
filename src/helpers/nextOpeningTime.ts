import { isPublicHoliday } from 'swedish-holidays';
import moment, { Moment } from 'moment';
import TimeSlot from '../types/TimeSlot';

const times: TimeSlot[]  = [
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

function filterTimes(now: Moment) {
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

function isWeekend(now: Moment) {
    if (now.day() === 6 || now.day() === 0) {
        return true;
    }
    return false;
}

function availableTimes(filteredTimes: TimeSlot[], now: Moment) {
    return filteredTimes.filter(obj => {
        const time = moment(obj.time, "HH:mm");
        if (time.isAfter(now)) {
            return time.format("HH:mm");
        }
        return false;
    })
}

function nextTimeWithInTheHour(nextTimeSlot: TimeSlot, comingTimeSlot: TimeSlot) {
    const _nextTime = moment(nextTimeSlot?.time, "HH:mm");
    const _comingTime = moment(comingTimeSlot?.time, "HH:mm");
    const duration = moment.duration(_comingTime.diff(_nextTime));
    const minutes = duration.asMinutes();
    if (minutes < 60) {
        return comingTimeSlot;
    }
    return null;
}

function nextOpeningTime() {  
    const now = moment();
    const filteredTimes = filterTimes(now);
    const availableFutureTimes = availableTimes(filteredTimes, now);
    const nextTime = nextTimeWithInTheHour(availableFutureTimes[0], availableFutureTimes[1]);
    return [availableFutureTimes[0] || times[0], nextTime];
}

export default nextOpeningTime;
