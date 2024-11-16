var fish = document.getElementById("cursor_fish")

var fishleft = 50;
var fishtop = 50;
var fishrot = 0;

var fishmovemax = 20; // (10^2 + 10^2)
var fishrotmax = 0.1;

var currentX = 0;
var currentY = 0;

function rotate_fish() {

  let newrot = Math.atan( (currentX-fishleft) / -(currentY - fishtop));
  if (currentY >= fishtop) {
    newrot = Math.PI + newrot
  }

  // newrot = normalise_rotation(newrot)

  var newnewrot = Math.min(Math.abs(newrot), fishrotmax);
  if (newrot >= fishrot) {}
  else {newnewrot = -newnewrot}

  fishrot += newnewrot

  fishrot = normalise_rotation(fishrot)

  // if (fishrot < 0) {fishrot = 2 * Math.PI - fishrot}
  // if (fishrot > 2 * Math.PI) {fishrot -= Math.PI}
  fish.style.rotate = fishrot + "rad";

  setTimeout("rotate_fish()", 40);
}

function normalise_rotation(rot) {
  if (rot < 0) {return 2 * Math.PI - rot}
  else if (rot > 2 * Math.PI) {return rot - 2 * Math.PI}
  else { return rot }
}

rotate_fish()

window.addEventListener("mousemove", (e) => {
  // console.log(fish.style.left)

  currentX = e.clientX;
  currentY = e.clientY;

  // calculate rotation of fish

  // console.log(newrot);
  // let rotate_size = 0;
  //
  // if (Math.abs(fishrot - newrot) < fishrotmax) {
  //   rotate_size = newrot - fishrot;
  // }
  //
  // else {
  //   rotate_size = fishrotmax;
  // }
  //
  // if (newrot > 0) {
  //   fish.style.rotate = fishrot + rotate_size + "rad";
  //   fishrot += rotate_size;
  // }
  // else {
  //   // console.log("?")
  //   fish.style.rotate = fishrot - rotate_size + "rad";
  //   fishrot -= rotate_size;
  // }

  // fishrot = fish.style.rotate;

  // console.log(fish.style.rotate)

  // let move_size = Math.min((currentX-fishleft) * (currentX-fishleft) + (currentY - fishtop) * (currentY - fishtop), fishmovemax)

  // fishleft += Math.cos(fishrot) * fishmovemax;
  // fishtop += Math.sin(fishrot) * fishmovemax;
  // fish.style.left = fishleft + "px";
  // fish.style.top = fishtop + "px";


  // fish.style.left = currentX + "px";
  // fish.style.top = currentY + "px";
    //
    // bodyRect = document.body.getBoundingClientRect(),
    // rect = canvas.getBoundingClientRect(),
    // offset = rect.top - bodyRect.top;
    //
    //
    // if(prevX == null || prevY == null || !draw){
    //     prevX = e.clientX + window.pageXOffset - rect.left
    //     prevY = e.clientY + window.pageYOffset - offset
    //     return
    // }
    //
    // let currentX = e.clientX + window.pageXOffset - rect.left
    // let currentY = e.clientY + window.pageYOffset- offset
    //
    // ctx.beginPath()
    // ctx.moveTo(prevX, prevY)
    // ctx.lineTo(currentX, currentY)
    // ctx.stroke()
    //
    // prevX = currentX
    // prevY = currentY
})
