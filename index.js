(function(){
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  document.getElementById("day-of-week").innerText = weekdays[now.getDay()];
}());

function onShowEmailClick() {
  const emailSource = "YmVsemVrLnBhd2VsQGdtYWlsLmNvbQ==";
  const emailLink = document.getElementById("email-link");
  emailLink.setAttribute("href", `mailto:${atob(emailSource)}`)
  emailLink.innerText = atob(emailSource);
  emailLink.className = "email-show";
}
