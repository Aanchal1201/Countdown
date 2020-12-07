let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

const ComingDate = new Date("Jan 1,2021 00:00:00").getTime();

function times() {
  let TodayDate = new Date().getTime();
  let diff = ComingDate - TodayDate;

  //1000 for ms 60 for s 60 for m 24 for h
  days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));

  hours.innerHTML = (
    "0" + Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).slice(-2);
  mins.innerHTML = (
    "0" + Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  ).slice(-2);
  secs.innerHTML = ("0" + Math.floor((diff % (1000 * 60)) / 1000)).slice(-2);

  if (diff < 0) {
    clearInterval(x);
    document.getElementsByClassName("countdown")[0].innerHTML =
      "Happy New Year";
  }
}
times();
var x = setInterval(times, 1000);
