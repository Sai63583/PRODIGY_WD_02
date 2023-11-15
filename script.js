let time = 0;
let running = 0;
let lapCount = 1;

function startStop() {
    if (running === 0) {
        running = 1;
        increment();
        document.getElementById("startStop").innerHTML = "Pause";
    } else {
        running = 0;
        document.getElementById("startStop").innerHTML = "Resume";
    }
}

function reset() {
    running = 0;
    time = 0;
    lapCount = 1;
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function increment() {
    if (running === 1) {
        setTimeout(function() {
            time++;
            let mins = Math.floor(time / 10 / 60);
            let secs = Math.floor(time / 10 % 60);
            let tenths = time % 10;

            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }

            document.getElementById("display").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
            increment();
        }, 100);
    }
}

function lap() {
    const lapTime = document.getElementById("display").innerHTML;
    const lapList = document.getElementById("laps");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("Lap " + lapCount + ": " + lapTime));
    lapList.appendChild(li);
    lapCount++;
}