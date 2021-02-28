var timeDis = $("#time-display");
var saveBtn = $(".btn-primary");
var removeBtn = $(".btn-remove");
var saveInput = $(".inputText");
var eventDisplay = $(".event");


function handleTimeDisplay(){
    var currentTime = moment().format("MMM DD, YYYY dddd hh:mm:ss A");
    timeDis.text(currentTime);
};

setInterval(handleTimeDisplay, 1000);



saveBtn.on("click", function(e){
    e.preventDefault();
    var valueInput = saveInput.val();
    console.log(valueInput)
    if (valueInput === "") {
        eventDisplay.text('No event scheduled');
        eventDisplay.removeClass("hide");
        saveInput.addClass("hide");
    } else {
        eventDisplay.text(valueInput);
        eventDisplay.removeClass("hide");
        saveInput.addClass("hide");
        localStorage.setItem("eventDetail", valueInput);
    };
    
});

removeBtn.on("click", function(e){
    e.preventDefault();
    eventDisplay.Text = "";
    eventDisplay.addClass("hide");
    saveInput.removeClass("hide");
});
