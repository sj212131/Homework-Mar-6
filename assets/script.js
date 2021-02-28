window.onload = function(){
  colorCode();
  dataNine();
  dataTen();
  // elevenAM();
  // twelvePM();
  // onePM();
  // twoPM();
  // threePM();
  // fourPM();
  // fivePM();
 }

var timeDis = $("#time-display");
var now = new Date().getHours();
var event9 = $("#input9am")
var event10 = $("#input10am")
var event11 = $("#input11am")
var event12 = $("#input12pm")
var event1 = $("#input1pm")
var event2 = $("#input2pm")
var event3 = $("#input3pm")
var event4 = $("#input4pm")
var event5 = $("#input5pm")
var button9 = $("#button9am")
var button10 = $("#input10am")
var button11 = $("#button11am")
var button12 = $("#button12am")
var button1 = $("#button1am")
var button2 = $("#button2am")
var button3 = $("#button3am")
var button4 = $("#button4am")
var button5 = $("#button5am")

console.log(now)
//Date&time
function handleTimeDisplay(){
  var currentTime = moment().format("MMM DD, YYYY dddd hh:mm:ss A");
  timeDis.text(currentTime);
};
setInterval(handleTimeDisplay, 1000);


//background change by Hour
function colorCode() {
  if (now > 9) {
    event9.addClass("past");
  } else if (now >= 9 && now < 10) {
    event9.addClass("present");
  } else if (now < 9) {
    event9.addClass("future");
  }
  if (now > 10) {
    event10.addClass("past");
  } else if (now >= 10 && now < 11) {
    event10.addClass("present");
  } else if (now < 10) {
    event10.addClass("future");
  }
  if (now > 11) {
    event11.addClass("past");
  } else if (now >= 11 && now < 12) {
    event11.addClass("present");
  } else if (now < 11) {
    event11.addClass("future");
  }
  if (now > 12) {
    event12.addClass("past");
  } else if (now >= 12 && now < 13) {
    event12.addClass("present");
  } else if (now < 12) {
    event12.addClass("future");
  }
  if (now > 13) {
    event1.addClass("past");
  } else if (now >= 13 && now < 14) {
    event1.addClass("present");
  } else if (now < 13) {
    event1.addClass("future");
  }
  if (now > 14) {
    event2.addClass("past");
  } else if (now >= 14 && now < 15) {
    event2.addClass("present");
  } else if (now < 14) {
    event2.addClass("future");
  }
  if (now > 15) {
    event3.addClass("past");
  } else if (now >= 15 && now < 16) {
    event3.addClass("present");
  } else if (now < 15) {
    event3.addClass("future");
  }
  if (now > 16) {
    event4.addClass("past");
  } else if (now >= 16 && now < 17) {
    event4.addClass("present");
  } else if (now < 16) {
    event4.addClass("future");
  }
  if (now > 17) {
    event5.addClass("past");
  } else if (now >= 17 && now < 18) {
    event5.addClass("present");
  } else if (now < 17) {
    event5.addClass("future");
  }
}

// 9Am
function dataNine() {
  event9.text (localStorage.getItem("content"));
}
button9.on("click", function(){
  localStorage.setItem("content", event9.val());
});


// // 10AM
function dataTen() {
  event10.text (localStorage.getItem("content2"));
}
button10.on("click", function(){
  localStorage.setItem("content2", event10.val());
});

// // 11AM
function dataEle() {
  event11.text (localStorage.getItem("content2"));
}
button11.on("click", function(){
  localStorage.setItem("content3", event11.val());
});
// // 12PM

// // 1PM

// // 2PM

// // 3PM

// // 4PM

// // 5PM


