let time = 0;

let timeSound = 0;

// Create a variable to hold the interval ID
let intervalId;

let timeLimit = 15;

const audio = new Audio('Pop Sound Effect.mp3');

function stopTimer () {
    clearInterval(intervalId);
}

function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
    time++;
    console.log(time);
    document.getElementById("timer").innerHTML = time;
    if (time >= timeLimit) {
        stopTimer;
        console.log("Timer stopped!")
        reset();
    }
    if (time === timeSound) {
        audio.play();
    }
}

function reset() {
    time = 0;
    document.getElementById("timer").innerHTML = 0;
}

// Relay timer ^^^
/////////////////////////////////////// Total time vvv

// let totalTime = 0;

// let totalTimeIntervalId;

// let timeLimit = 15;

// const audio = new Audio('Pop Sound Effect.mp3');

// function stopTimer () {
//     clearInterval(intervalId);
// }

// function startTimer() {
//     intervalId = setInterval(updateTimer, 1000);
// }

// function updateTimer() {
//     time++;
//     console.log(time);
//     document.getElementById("timer").innerHTML = time;
//     if (time >= timeLimit) {
//         stopTimer;
//         console.log("Timer stopped!")
//         reset();
//     }
//     if (time === timeSound) {
//         audio.play();
//     }
// }

// function reset() {
//     time = 0;
//     document.getElementById("timer").innerHTML = 0;
// }


