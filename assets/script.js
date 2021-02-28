window.onload = function(){
  colorCode();
  data9();
  data10();
  data11();
  data12();
  data1();
  data2();
  data3();
  data4();
  data5();
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
var button10 = $("#button10am")
var button11 = $("#button11am")
var button12 = $("#button12pm")
var button1 = $("#button1pm")
var button2 = $("#button2pm")
var button3 = $("#button3pm")
var button4 = $("#button4pm")
var button5 = $("#button5pm")


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

//localStorage Date
// 9Am
function data9() {
  event9.text (localStorage.getItem("Event9"));
}

button9.on("click", function(){
  localStorage.setItem("Event9", event9.val());
});


// // 10AM
function data10() {
  event10.text (localStorage.getItem("Event10"));
}
button10.on("click", function(){
  localStorage.setItem("Event10", event10.val());
});

// // 11AM
function data11() {
  event11.text (localStorage.getItem("Event11"));
}
button11.on("click", function(){
  localStorage.setItem("Event11", event11.val());
});


// // 12PM
function data12() {
  event12.text (localStorage.getItem("Event12"));
}
button12.on("click", function(){
  localStorage.setItem("Event12", event12.val());
});


// // 1PM
function data1() {
  event1.text (localStorage.getItem("Event1"));
}
button1.on("click", function(){
  localStorage.setItem("Event1", event1.val());
});


// // 2PM
function data2() {
  event2.text (localStorage.getItem("Event2"));
}
button2.on("click", function(){
  localStorage.setItem("Event2", event2.val());
});


// // 3PM
function data3() {
  event3.text (localStorage.getItem("Event3"));
}
button3.on("click", function(){
  localStorage.setItem("Event3", event3.val());
});


// // 4PM
function data4() {
  event4.text (localStorage.getItem("Event4"));
}
button4.on("click", function(){
  localStorage.setItem("Event4", event4.val());
});


// // 5PM
function data5() {
  event5.text (localStorage.getItem("Event5"));
}
button5.on("click", function(){
  localStorage.setItem("Event5", event5.val());
});

