// timer

let deadline = '2018-11-27 20:47:00';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()), // get difference between endtime and current time
        seconds = Math.floor((t/1000) % 60), // transform this difference into seconds
        minutes = Math.floor((t/1000/60) % 60), // transform this difference into minutes
        hours = Math.floor((t/(1000*60*60))); // transform this difference into hours

    if (hours < 10) {
        hours = `0${hours}`; // add zero if cipher less 10
    }
    if (minutes < 10) {
        minutes = `0${minutes}`; // add zero if cipher less 10
    }
    if (seconds < 10) {
        seconds = `0${seconds}`; // add zero if cipher less 10
    }

    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock () {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0) {  // difference between endtime and current time should be 00:00:00
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}

setClock('timer', deadline);