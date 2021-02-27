var timeDis = $("#time-display")

function handleTimeDisplay(){
    var currentTime = moment().format("MM DD, YYYY hh:mm:ss A")
    timeDis.text(currentTime);
}

setInterval(handleTimeDisplay, 1000);