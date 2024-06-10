let timerDisplay = document.querySelector('.timerdisplay');
let stopBtn = document.getElementById('stopbtn');
let startBtn = document.getElementById('startbtn');
let resetBtn = document.getElementById('resetbtn');

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;
let hrs = 0o0;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00 : 00`;
    hrs = mins = secs = msec = 0o0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
            if(mins == 60){
                mins = 0;
                hrs++;
            }
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hrsString = hrs < 10 ? `0${hrs}` : hrs;

    timerDisplay.innerHTML = `${hrsString} : ${minsString} : ${secsString} : ${msecString}`;
    
}