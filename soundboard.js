var rainButton = document.getElementById("rain-button");
var thunderButton = document.getElementById("thunder-button");
var windButton = document.getElementById("wind-button");

rainButton.addEventListener('click', function() {
    document.getElementById("rain-sound").play();
});
thunderButton.addEventListener('click', function() {
    document.getElementById("thunder-sound").play();
});
windButton.addEventListener('click', function() {
    document.getElementById("wind-sound").play();
});