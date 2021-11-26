var nametext = document.getElementById('pronounspage-names');
var pronounstext = document.getElementById('pronounspage-pronouns');


fetch('https://en.pronouns.page/api/profile/get/bucketfish')
  .then(response => response.json())
  .then(data => {
    var names = Object.keys(data["profiles"]["en"]["names"]);
    var pronouns = Object.keys(data["profiles"]["en"]["pronouns"]);

    //1 = love, 0 = like, 2 = playful, -1 = dislike, 3 = only if we're close

    nametext.innerHTML = names[0];
    for (var i = 1; i < names.length; i++){
      nametext.innerHTML += ", " + names[i];
    }


    pronounstext.innerHTML = "<a href='https://en.pronouns.page/" + pronouns[0] + "' target='_blank'>" + pronouns[0] + "</a>";
    if (data["profiles"]["en"]["pronouns"][i] == 2){
      pronounstext.innerHTML += " (jokingly)"
    }

    for (var i = 1; i < pronouns.length; i++){
      pronounstext.innerHTML += ", " + "<a href='https://en.pronouns.page/" + pronouns[i] + "' target='_blank'>" + pronouns[i] + "</a>";

      if (data["profiles"]["en"]["pronouns"][pronouns[i]] == 2){
        pronounstext.innerHTML += " (jokingly)";
      }

    }

  }
);
