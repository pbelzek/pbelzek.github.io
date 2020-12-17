(function(){
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const now = new Date();
  document.getElementById("day-of-week").innerText = weekdays[now.getDay() - 1];
}());
