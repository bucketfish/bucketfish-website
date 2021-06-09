/* ========== RAINBOW HEADER ========== */
var parent = document.getElementsByTagName('header')[0].getElementsByTagName('h1')[0];

var string = parent.innerHTML;
parent.innerHTML = "";
string.split("");
var i = 0, length = string.length;
for (i; i < length; i++) {
    parent.innerHTML += "<span style='--n:"+ (100 * i + 'ms') + ";'>" + string[i] + "</span>";
}

/* ========== RAINDOMISED MESSAGE ========== */
phrases = [
  "may i have your kneecaps?",
  "have a nice cup of tea and enjoy your time exploring my world :)",
  "every second in my mind, a minute passes.",
  "god-tier shitposting at your service!",
  "every month is pride month. happy pride month!",
  "oh dear, you have head strings? that's a problem.",
  "i'm 50% sure the stars will swim about amputated endurance.",
  '<a href="unlisted/h">hhhhhh</a>hhh.',
  "my favorite letter is y.",
  "when nothing is right, go left.",
  "wait... this isn't what i typed!",
  "yes, this is a random message. i stole all of hypixel's 'ez' messages here, too.",
  "i like pineapple on my pizza.",
  "let's be friends instead of fighting okay?",
  "doing a bamboozle fren.",
  "zjierb. zjierbness.",
  "mi jan misali ala li pana sona ala pi toki pona tawa sina.",
  "happy bee day, may 20!",
  "i think webrings are cool!",
  "baby shark dududududu.",
  "sometimes i wonder if anyone ever reads any of these :)",
  "catch-22 :O",
]
try{
  var random = document.getElementById("random");
  random.innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
}
catch{}


/* ========== RIPPLE CURSOR ========== */
var ripple = document.createElement("div");
ripple.classList.add("ripple");
document.getElementsByTagName("body")[0].appendChild(ripple);

var drawRipple = function(ev) {
  var x = ev.clientX;
  var y = ev.clientY;
  var node = document.querySelector(".ripple");
  var newNode = node.cloneNode(true);
  newNode.classList.add("ripple-animate");
  newNode.style.left = ev.clientX - 12 + "px";
  newNode.style.top = ev.clientY - 12 + "px";
  node.parentNode.replaceChild(newNode, node);
};

window.addEventListener("click", drawRipple);
