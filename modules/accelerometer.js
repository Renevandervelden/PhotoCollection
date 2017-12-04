function accelerometer(accelerometerdata) {
    alert ("Your current acceloration is X:" + accelerometerdata.x + ", Y:" + accelerometerdata.y + ", Z:" + accelerometerdata.z);
}

function accelerometerFail(error) {
  alert ("The accelerometer failed " + error.code + " " + error.message);
}