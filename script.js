dayjs.extend(window.dayjs_plugin_advancedFormat);

var currentDay = dayjs().format("dddd, MMM Do");
$("#currentDay").text(currentDay);

var currentTime=dayjs().format("HH");
console.log(currentTime);

var userInput=$(".description");

$(".time-block").each(function(){
  var id = $(this).attr("id");

  if (id < currentTime){
    console.log(id)
    console.log(currentTime)
    $(this).addClass("past")
  }

  else if (id === currentTime){
    $(this).addClass("present")
  }

  else if (id > currentTime){
    $(this).addClass("future")
  }
})

var date = $("#currentDay");
date.text(dayjs().format("dddd, MMMM D"));
var nth = date.text().slice(-1);
if (nth>3){
  date.text(date.text()+"th");
} else if (nth==3){
  date.text(date.text()+"rd");
} else if (nth==2){
  date.text(date.text()+"nd");
} else if (nth==1){
  date.text(date.text()+"st");
} else if (nth==0){
  date.text(date.text()+"th");
}
