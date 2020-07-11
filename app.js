var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hours = document.getElementById("hr");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var mSeconds = document.getElementById("msec");
var startbtn = document.getElementById('start');
var interval;

function timer() {
    msec++;
    mSeconds.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minutes.innerHTML = min;
        sec = 0;
    }
    else if (min >= 60) {
        hr++;
        hours.innerHTML = hr;
        min = 0;
    }
}

function start() {
    interval = setInterval(timer, 10);
    startbtn.disabled = true;
}

function stop() {
    clearInterval(interval);
    startbtn.disabled = false;
}

function reset() {
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    mSeconds.innerHTML = 0;
    stop();
}