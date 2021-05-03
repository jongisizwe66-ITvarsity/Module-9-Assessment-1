var startTime;
var endTime;
var origTimePeriod;
var newTimePeriod;
var time;

function startTimer(){
    startTime = new Date();
    endTime = getEndTime();
    origTimePeriod = endTime.getTime() - startTime.getTime();

    newTimePeriod = origTimePeriod;

}

//display the time
function displayCountdown(){
    startTimer();
    var timeLeft;
    time = setInterval(() => (
    timeLeft = msToTime(newTimePeriod),
    document.getElementById('clock').innerHTML = `<p>${timeLeft['hours']}h ${timeLeft['minutes']}m ${timeLeft['seconds']}s </P>` ,
    
    //bar counter
    newHieght = Math.floor((newTimePeriod / origTimePeriod) * 100) * 3,
    document.getElementById('progressBar').style.height = newHieght + 'px',
    newTimePeriod -= 1000, // subtrect 1 second very time the function is called
    stopTime(newTimePeriod)
    ), 1000)
}

// stops the time if it's equal to the set time
function stopTime(newTimer){
    if(newTimer < 0 ){
        clearInterval(time);
        document.getElementById('clock').innerHTML = `<p>Complete!</p>`;
    }
}

//convert miliseconds to hours minutes and seconds
function msToTime(miliseconds){
    var mHour = 1000 * 60 * 60;
    var mMinute = 1000 * 60;
    var mSecond = 1000;

    var hours = Math.floor(miliseconds / mHour);
    var minutes = Math.floor( (miliseconds % mHour) / mMinute);
    var seconds = Math.floor( (miliseconds % mMinute ) / mSecond);

    var time = [];
    time['hours'] = hours;
    time['minutes'] = minutes;
    time['seconds'] = seconds;

    return time;

}

function getEndTime(){
    var dt = new Date();
    var hours = parseInt(document.getElementById('hours').value);
    var minutes = parseInt(document.getElementById('minutes').value);
    var seconds = parseInt(document.getElementById('seconds').value);
    
    dt.setHours(dt.getHours() + hours);
    dt.setMinutes(dt.getMinutes() + minutes);
    dt.setSeconds(dt.getSeconds() + seconds);

  return dt;
}

// stops the timer
function completeTime(){
    document.getElementById('clock').innerHTML = `<p>Complete!</p>`;
    clearInterval(time);
}