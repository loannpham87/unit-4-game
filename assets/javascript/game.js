var crystalClicked = 0;
var numberToGuess = 0;

var wins = 0;
var losses = 0;

function reset() {
  crystalClicked = 0;
  numberToGuess = 0;
}


function start() {


  numberToGuess = Math.floor(Math.random() * 100) + 19;
  $("#random").text(numberToGuess)

  var amethyst = Math.floor(Math.random() * 12) + 1;
  $("#amethyst").attr("data-id", amethyst);
  var geode = Math.floor(Math.random() * 12) + 1;
  $("#geode").attr("data-id", geode);
  var diamond = Math.floor(Math.random() * 12) + 1;
  $("#diamond").attr("data-id", diamond);
  var tourmaline = Math.floor(Math.random() * 12) + 1;
  $("#tourmaline").attr("data-id", tourmaline);
}

start();

$(".crystal").on("click", function () {
  var value = $(this).attr("data-id")
  crystalClicked += parseInt(value)

  $("#total-score").html("<p>" + crystalClicked.toString() + "</p>");
  $("#wins").html("<p>Wins: <br>" + wins.toString() + "</p>");
  $("#losses").html("<p>Losses: <br>" + losses.toString() + "</p>");

  if (parseInt(crystalClicked) > parseInt(numberToGuess)) {
    losses++;
    reset();
    start();

  }
  else if (crystalClicked == numberToGuess) {
    wins++;
    reset();
    start();
  }

});
