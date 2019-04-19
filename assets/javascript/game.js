
  var crystalClicked = 0;
  var randomNumber = 0;
  var wins = 0;
  var losses = 0;
  var total = 0; //cumulative score of crystalClicked

function start() {

  var crystalValues = [amethyst, geode, diamond, tourmaline];

  var randomNumber = Math.floor(Math.random() * 100) + 19;
  $("#random").text(randomNumber)

  var amethyst = Math.floor(Math.random() * 12) + 1;
  $("#amethyst").attr("data-id",amethyst);
  var geode = Math.floor(Math.random() * 12) + 1;
  $("#geode").attr("data-id",geode);
  var diamond = Math.floor(Math.random() * 12) + 1;
  $("#diamond").attr("data-id",diamond);
  var tourmaline = Math.floor(Math.random() * 12) + 1;
  $("#tourmaline").attr("data-id",tourmaline);
}

start()


$(".crystal").on("click", function () {
  // console.log(this)
  var value = $(this).attr("data-id")
 crystalClicked += parseInt(value)
// console.log(value);

 console.log(crystalClicked);

// total += parseInt(crystalClicked);


  $("#total-score").html("<p>" +crystalClicked.toString() + "</p>");
  $("#wins").html("<p>Wins: <br>" + wins.toString() + "</p>");
  $("#losses").html("<p>Losses: <br>" + losses.toString() + "</p>");

  if (value === randomNumber) {
    wins++;
  }
  else wins = wins
  if (value > randomNumber) {
    losses++;
  }


  //if the total = randomNumber then you win add to the win variable and restart game

  // if (total > randomNumber) {
  //   losses = -- //restart game


  // if the total > randomNumber you lose add to the lose variable and restart game
  // if the total < keep going 
  //when game restarts, you only need to clear result and crystal values
// declare/initialize total variable, if you go Over, loss is incremented, however if you match randomNumber, a win is incremented (if/else)

});

