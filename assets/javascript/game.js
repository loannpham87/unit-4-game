function randomNumber() {
    var min = 19;
    var max = 120;
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementsByClassName('random-number').value = num;
    console.log(randomNumber);
  }
  window.onload = randomNumber;