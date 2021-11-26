/* ========== RAINBOW HEADER ========== */

function funheader(){
  var parent = document.getElementsByClassName('header')[0].getElementsByTagName('h1')[0];

  var string = "bucket";
  var string2 = "fish";
  parent.innerHTML = "";
  string.split("");
  var i = 0, length = string.length;
  for (i; i < length; i++) {
      parent.innerHTML += "<span style='--n:"+ (100 * i - 1000 + 'ms') + ";'>" + string[i] + "</span>";
  }
  parent.innerHTML += "<wbr>";

  length = string2.length;
  for (i = 5; i < length+5; i++) {
      parent.innerHTML += "<span style='--n:"+ (100 * i - 1000 + 'ms') + ";'>" + string2[i-5] + "</span>";
  }
}

//window.addEventListener('load', (event) => {
  funheader();
//});


/* ========== RAIN BACKGROUND ========== */
var rain = document.getElementById('rain');

var makeItRain = function() {
  //clear out everything
  rain.innerHTML = "";

  var increment = 0;
  var drops = "";

  while (increment < 95) {
    var randoHundo = (Math.floor(Math.random() * (98) + 1));

    var randoFiver = (Math.floor(Math.random() * (10) + 2));
    //increment
    increment += randoFiver;

    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  rain.innerHTML = drops;
}

makeItRain();
