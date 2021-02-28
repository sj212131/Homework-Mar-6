window.onload = function(){
  colorCode();
  dataNine();
  // tenAM();
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
// function elevenAM() {
//   var input_textarea3 = document.querySelector("#comment11am");
//   var output_div3 = document.querySelector("#comment11am");
//   var save_button3 = document.querySelector("#button11am");

//   save_button3.addEventListener("click", updateOutput3);

//   output_div3.textContent = localStorage.getItem("content3");
//   input_textarea3.value = localStorage.getItem("content3");

//   function updateOutput3() {
//     localStorage.setItem("content3", input_textarea3.value);

//     output_div3.textContent = input_textarea3.value;
//   }
// }

// // 12PM
// function twelvePM() {
//   var input_textarea4 = document.querySelector("#comment12pm");
//   var output_div4 = document.querySelector("#comment12pm");
//   var save_button4 = document.querySelector("#button12pm");

//   save_button4.addEventListener("click", updateOutput4);

//   output_div4.textContent = localStorage.getItem("content4");
//   input_textarea4.value = localStorage.getItem("content4");

//   function updateOutput4() {
//     localStorage.setItem("content4", input_textarea4.value);

//     output_div4.textContent = input_textarea4.value;
//   }
// }

// // 1PM
// function onePM() {
//   var input_textarea5 = document.querySelector("#comment1pm");
//   var output_div5 = document.querySelector("#comment1pm");
//   var save_button5 = document.querySelector("#button1pm");

//   save_button5.addEventListener("click", updateOutput5);

//   output_div5.textContent = localStorage.getItem("content5");
//   input_textarea5.value = localStorage.getItem("content5");

//   function updateOutput5() {
//     localStorage.setItem("content5", input_textarea5.value);

//     output_div5.textContent = input_textarea5.value;
//   }
// }

// // 2PM
// function twoPM() {
//   var input_textarea6 = document.querySelector("#comment2pm");
//   var output_div6 = document.querySelector("#comment2pm");
//   var save_button6 = document.querySelector("#button2pm");

//   save_button6.addEventListener("click", updateOutput6);

//   output_div6.textContent = localStorage.getItem("content6");
//   input_textarea6.value = localStorage.getItem("content6");

//   function updateOutput6() {
//     localStorage.setItem("content6", input_textarea6.value);

//     output_div6.textContent = input_textarea6.value;
//   }
// }

// // 3PM
// function threePM() {
//   var input_textarea7 = document.querySelector("#comment3pm");
//   var output_div7 = document.querySelector("#comment3pm");
//   var save_button7 = document.querySelector("#button3pm");

//   save_button7.addEventListener("click", updateOutput7);

//   output_div7.textContent = localStorage.getItem("content7");
//   input_textarea7.value = localStorage.getItem("content7");

//   function updateOutput7() {
//     localStorage.setItem("content7", input_textarea7.value);

//     output_div7.textContent = input_textarea7.value;
//   }
// }

// // 4PM
// function fourPM() {
//   var input_textarea8 = document.querySelector("#comment4pm");
//   var output_div8 = document.querySelector("#comment4pm");
//   var save_button8 = document.querySelector("#button4pm");

//   save_button8.addEventListener("click", updateOutput8);

//   output_div8.textContent = localStorage.getItem("content8");
//   input_textarea8.value = localStorage.getItem("content8");

//   function updateOutput8() {
//     localStorage.setItem("content8", input_textarea8.value);

//     output_div8.textContent = input_textarea8.value;
//   }
// }

// // 5PM
// function fivePM() {
//   var input_textarea9 = document.querySelector("#comment5pm");
//   var output_div9 = document.querySelector("#comment5pm");
//   var save_button9 = document.querySelector("#button5pm");

//   save_button9.addEventListener("click", updateOutput9);

//   output_div9.textContent = localStorage.getItem("content9");
//   input_textarea9.value = localStorage.getItem("content9");

//   function updateOutput9() {
//     localStorage.setItem("content9", input_textarea9.value);

//     output_div9.textContent = input_textarea9.value;
//   }
// }

