// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
// const store = window.localStorage;
// const container = $(".container");
  
//   //const currentTime = { text: dayjs().format ("h:00 A"), hour: dayjs().hour() };
  
//   const range = (start, end, step) => {
//     return Array.from(
//       Array.from(Array(Math.ceil((end - start) / step)).keys()),
//       (x) => start + x * step
//     );
//   };
  
//   const hoursOfTheDay = Array.from(new Array(24)).map((v, i) => {
//     const text = dayjs().hour(i).format("h:00 A");
//     const hour = dayjs().hour(i);
//     return { text, hour };
//   });
  
//   function color(hr) {
//     if (hr.hour.isBefore(currentTime.hour)) {
//       return "bg-gray-300";
//     } else if (hr.hour.isAfter(currentTime.hour)) {
//       return "bg-green-300";
//     } else {
//       return "bg-red-300";
//     }
//   }

//   hoursOfTheDay.forEach((hr) => {
//     const grid = $(
//       `<form data-name="${hr.text}" class="grid grid-cols-12  border-gray-500 "></form>.`
//     );
  
//     const time = $(
//       `<div class="flex items-center justify-center col-span-2 h-16">${hr.text}</div>`
//     );
  
//     const textArea = $(
//       `<textarea name="${
//         hr.text
//       }" maxLength="50" style="resize: none; overflow: hidden;" class="col-span-8 h-16 p-6 ${color(
//         hr
//       )}">${store.getItem(hr.text) || ""}</textarea>`
//     );
  
//     textArea.keydown((e) => {
//       if (e.keyCode == 13 && !e.shiftKey) {
//         e.preventDefault();
//         return false;
//       }
//     });
  
//     const saveButton = $(
//       `<button type="submit" class="col-span-2 h-16 bg-indigo-500 text-white font-bold hover:bg-indigo-400 transition duration-500 ease-in-out"><i class="fas fa-save text-xl"></i></button>`
//     );
  
//     grid.submit((e) => {
//       e.preventDefault();
  
//       const value = $(`textarea[name="${hr.text}"]`).val();
  
//       store.setItem(hr.text, value);
//     });
  
//     grid.append(time);
//     grid.append(textArea);
//     grid.append(saveButton);
  
//     container.append(grid);
//   });
  // Done: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
 $(".saveBtn").on("click", function (event) {
  console.log ("click");
  event.preventDefault();
  //var text = document.querySelector("textarea").value;
  //var time = document.querySelector(".hour").textContent;
  var text= $(this).siblings("textarea").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
  });
  
    //
    // Doing: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    var timeDisplayEl = $("#time-display");
    var currentHour = dayjs().hour();
    console.log("currenthour= ",currentHour);
    var currentTime = dayjs().format("h:00 A");
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id")[3] + $(this).attr("id")[4]);
      console.log("blockhour= ",blockHour);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
    // Done: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    function displayTime() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      timeDisplayEl.text(rightNow);
    }
    setInterval(displayTime, 1000);

    $('#div8 .description').val(localStorage.getItem('div8'));
    $('#div9 .description').val(localStorage.getItem('div9'));
    $('#div10 .description').val(localStorage.getItem('div10'));
    $('#div11 .description').val(localStorage.getItem('div11'));
    $('#div12 .description').val(localStorage.getItem('div12'));
    $('#div13 .description').val(localStorage.getItem('div13'));
    $('#div14 .description').val(localStorage.getItem('div14'));
    $('#div15 .description').val(localStorage.getItem('div15'));
    $('#div16 .description').val(localStorage.getItem('div16'));
    $('#div17 .description').val(localStorage.getItem('div17'));


    // Done: Add code to display the current date in the header of the page.
    // HINT: How can the Day.js library be used to get the current date?
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  });