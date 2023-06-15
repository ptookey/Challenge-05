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
