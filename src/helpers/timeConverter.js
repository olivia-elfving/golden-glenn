function msToMinSec (ms) {
    const minutes = Math.floor(ms/60000);
    const seconds = Math.round((ms % 60000)/1000);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds; 
    //return seconds
}

export {
    msToMinSec
}