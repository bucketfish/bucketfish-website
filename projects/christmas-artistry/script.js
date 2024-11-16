const canvas = document.getElementById("canvas")

var bodyRect = document.body.getBoundingClientRect(),
    rect = canvas.getBoundingClientRect(),
    offset = rect.top - bodyRect.top;

canvas.height = canvas.offsetHeight;
canvas.width = canvas.offsetWidth;

const ctx = canvas.getContext("2d")

let prevX = null
let prevY = null

ctx.lineWidth = 5
ctx.strokeStyle = "#FFF"

let draw = false

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.style.backgroundColor
        ctx.lineWidth = clr.dataset.width

        if (clr.classList.contains("eraser")) {
          ctx.globalCompositeOperation = "destination-out";
        }
        else {
          ctx.globalCompositeOperation = "source-over";
        }
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    // ctx.beginPath();
    // ctx.rect(0, 0, canvas.width, canvas.height);
    // ctx.stroke();

    ctx.clearRect(0, 0, canvas.width, canvas.height)
})


window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)
window.addEventListener("touchstart", (e) => {draw = true; prevX = null; prevY = null; })
window.addEventListener("touchend", (e) => {draw = false; prevX = null; prevY = null;})



window.addEventListener("mousemove", (e) => {
    bodyRect = document.body.getBoundingClientRect(),
    rect = canvas.getBoundingClientRect(),
    offset = rect.top - bodyRect.top;


    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX + window.pageXOffset - rect.left
        prevY = e.clientY + window.pageYOffset - offset
        return
    }

    let currentX = e.clientX + window.pageXOffset - rect.left
    let currentY = e.clientY + window.pageYOffset- offset

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})

addEventListener("resize", (event) => {
  bodyRect = document.body.getBoundingClientRect(),
      rect = canvas.getBoundingClientRect(),
      offset = rect.top - bodyRect.top;

  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;

  ctx.lineWidth = 5
  ctx.strokeStyle = "#FFF"
});


window.addEventListener("touchmove", (e) => {
    bodyRect = document.body.getBoundingClientRect(),
    rect = canvas.getBoundingClientRect(),
    offset = rect.top - bodyRect.top;


    if(prevX == null || prevY == null || !draw){
        prevX = e.touches[0].clientX + window.pageXOffset - rect.left
        prevY = e.touches[0].clientY + window.pageYOffset - offset
        return
    }

    let currentX = e.touches[0].clientX + window.pageXOffset - rect.left
    let currentY = e.touches[0].clientY + window.pageYOffset - offset

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})


//
// let loadimg = document.querySelector(".AAA")
// loadimg.addEventListener("click", () => {
//   var dataURL = localStorage.getItem("one");
//   var img = document.getElementById("canvasload");
//   img.src = dataURL;
//
//   img.onload = function () {
//       ctx.drawImage(img, 0, 0);
//   };
//
//
// })




const canvasobj = document.getElementById("draw")
const buttontext = document.getElementById("buttontext")

var group = document.getElementById("group-pic")
group.height = group.offsetHeight;
group.width = group.offsetWidth;

var context = group.getContext("2d")
context.imageSmoothingEnabled = false;

var currentPage = 0
var currentDraw = "character"

var hideCanvas = [1, 3, 4, 6, 7, 9, 10]
var drawLabels = {
  0: "character",
  2: "scarecrow",
  5: "star",
  8: "sign"
}

var drawings = {
}


let done = document.querySelector(".done")
done.addEventListener("click", () => {

  if (!(currentDraw in drawings)){
    drawings[currentDraw] = canvas.toDataURL();
    // localStorage.setItem(currentDraw, canvas.toDataURL());
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }



  // open next page?

  currentPage += 1
  showNextPage()

})


function showNextPage(){
  if (currentPage > 0) {
    var hides = document.getElementsByClassName("pg-" + (currentPage - 1))
    for (var i = 0; i < hides.length; i ++){
      hides[i].classList.add("hide")
    }
  }

  if (currentPage in drawLabels){
    currentDraw = drawLabels[currentPage]
  }

  var shows = document.getElementsByClassName("pg-" + (currentPage))
  for (var i = 0; i < shows.length; i ++){
    shows[i].classList.remove("hide")
  }

  if (hideCanvas.includes(currentPage)) {
    canvasobj.classList.add("hide")
    buttontext.innerHTML = "ok! &gt;"
  } else {
    canvasobj.classList.remove("hide")
    buttontext.innerHTML = "done! &gt;"
  }

  var loads = document.getElementsByClassName("load-" + (currentPage))

  for (var i = 0; i < loads.length; i++){
    loads[i].src = drawings[loads[i].dataset.load];

    // console.log(drawings)
  }

  if (currentPage == 10){
    let lastbutton = document.querySelector(".last")
    lastbutton.style.display = "none"


    // canvas!!! aaah.

    group = document.getElementById("group-pic")
    group.height = group.offsetHeight;
    group.width = group.offsetWidth;

    context = group.getContext("2d")
    context.imageSmoothingEnabled = false;



    // canvas dimensions:
    // width: 900px;
    // height: 550px;

    // path, x, y, width, width / height ratio
    ds("images/scarecrow.png", 200, 60, 200, 229 / 399, context)

    ds(drawings["scarecrow"], 260, 120, 80, 60 / 48, context) // scarecrow face


    ds('images/sign.png', 550, 130, 250, 376 / 366, context)



    ds(drawings["sign"], 580, 225, 170, 60 / 48, context, -10) // SIGN

    // context.restore()




    ds(drawings["character"], 650, 440, 150, 60 / 48, context) //char

    ds('images/welcome.png', 520, 420, 150, 415 / 373, context)
    ds('images/yay.png', 170, 340, 300, 554 / 399, context)

    ds('images/tree.png', -15, 120, 300, 247 / 366, context)
    ds('images/door.png', 300, 60, 700, 554 / 399, context)

    ds(drawings["star"], 90, 150, 80, 60 / 48, context) //star



  }

}


function ds(path, posx, posy, width, ratio, ctct, rotation = 0) {
  var image = new Image()
  image.src = path
  image.onload = function(){
    if (rotation != 0){

      ctct.setTransform(1, 0, 0, 1, posx, posy); // sets scale and origin
      ctct.rotate(rotation*Math.PI/180);
      ctct.drawImage(image, 0, 0, width, (1 / ratio) * width)

      ctct.setTransform(1,0,0,1,0,0)
    }
    else {
      ctct.drawImage(image, posx, posy, width, (1 / ratio) * width)

    }

  }
}


window.addEventListener("load", (event) => {
  showNextPage()
});

// Saving drawing as image
// let saveBtn = document.querySelector(".save")
// saveBtn.addEventListener("click", () => {
//   localStorage.setItem("one", canvas.toDataURL());
// })
//


let gpdl = document.getElementById("gp-dl")
gpdl.addEventListener("click", () => {
  let data = group.toDataURL("imag/png")
  let a = document.createElement("a")
  a.href = data
  a.download = "group picture.png"
  a.click()
})


let chardl = document.getElementById("character-dl")
chardl.addEventListener("click", () => {
  let data = drawings["character"]
  let a = document.createElement("a")
  a.href = data
  a.download = "character.png"
  a.click()
})

let scdl = document.getElementById("scarecrow-dl")
scdl.addEventListener("click", () => {
  let data = drawings["scarecrow"]
  let a = document.createElement("a")
  a.href = data
  a.download = "scarecrow.png"
  a.click()
})

let stardl = document.getElementById("star-dl")
stardl.addEventListener("click", () => {
  let data = drawings["star"]
  let a = document.createElement("a")
  a.href = data
  a.download = "star.png"
  a.click()
})

let signdl = document.getElementById("sign-dl")
signdl.addEventListener("click", () => {
  let data = drawings["sign"]
  let a = document.createElement("a")
  a.href = data
  a.download = "sign.png"
  a.click()
})


function downloadDrawing(){
  let data = canvas.toDataURL("imag/png")
  let a = document.createElement("a")
  a.href = data
  // what ever name you specify here
  // the image will be saved as that name
  a.download = "sketch.png"
  a.click()
}
