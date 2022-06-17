const time = document.querySelector('.time');

function digitalClock() {
    let dateTime = new Date();
    let clock = dateTime.toLocaleTimeString();
    time.innerText = clock;
    console.log(clock);
}

setInterval(digitalClock, 1000);