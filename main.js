daysE1 = document.getElementById("days");
hoursE1 = document.getElementById("hours");
minsE1 = document.getElementById("mins");
secondsE1 = document.getElementById("seconds");


const newYears = "1 jan 2022";

function countdown() {

    const newYearDate = new Date (newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secondsE1.innerHTML = seconds;
}






// initial Call
countdown();

setInterval(countdown, 1000);