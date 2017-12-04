var times = 0;
function timerFunction() {
  alert ("Test this timer");
  times++;
  if (times > 2) {
    kony.timer.cancel("tryOutTimer");
    times = 0;
  }
}