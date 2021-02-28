var timeDis = $("#time-display");
var saveBtn = $("#saveBtn");
var removeBtn = $("#removeBtn");
var saveInput = $("#input");
var eventDisplay = $("#eventDisplay");
var eventClass = $("event")


function handleTimeDisplay(){
    var currentTime = moment().format("MMM DD, YYYY dddd hh:mm:ss A");
    timeDis.text(currentTime);
};

setInterval(handleTimeDisplay, 1000);


saveBtn.on("click", function(e){
    e.preventDefault();
    var value = saveInput.text();
    console.log(value)
    // if (value === "") {
    //     alert("Please input your event!");
    //     return;
    // } else {
        eventDisplay.text(value);
        eventDisplay.removeClass("hide");
        removeBtn.removeClass("hide");
        saveInput.addClass("hide");
    });

removeBtn.on("click", function(e){
    e.preventDefault();
    eventDisplay.Text = "";
    eventDisplay.addClass("hide");
    removeBtn.addClass("hide");
    saveInput.removeClass("hide");
});
