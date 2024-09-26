const emptyElement = document.getElementById("empty");

function myPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
  }
}
function showLocation(position) {
  emptyElement.innerHTML = "long :" + position.coords.longitude;
}
