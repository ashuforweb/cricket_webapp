var runs = 0;
var wickets = 0;
// var intervalID;
window.onload = function() {
  document.getElementById("scr").innerHTML = runs + "/" + wickets;
  setInterval(function() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();
    document.getElementById("tme").innerHTML = hours + ":" + minutes + ":" + seconds;
  }, 1000);
};
