let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables to hold the timer value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Variable to hold setInterval() function
let interval = null;

// Variable to hold the stopwatch status
let status = "stopped";

// Logic for stopwatch (incrementing)
function stopwatch() {

    seconds++;

    // Incrementing minutes
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }

    }

    // If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }

    // Displaying updated time values
    document.getElementById("timer").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop() {
    
    if (status === "stopped") {

        // Start stopwatch by calling the setInterval() function
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("start-stop").innerHTML = "Stop";
        status = "started";

    }
    else {
        
        window.clearInterval(interval);
        document.getElementById("start-stop").innerHTML = "Start";
        status = "stopped";

    }

}

function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("start-stop").innerHTML = "Start";

}
