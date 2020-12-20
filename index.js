(function(){
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  document.getElementById("day-of-week").innerText = weekdays[now.getDay()];
}());
