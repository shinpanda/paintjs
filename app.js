const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// pixel modifier
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting); //click
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

/*
clientX, clientY는 윈도우 전체의 범위 내에서 마우스 위치값
offsetX, offsetY : 캔버스 내에서의 마우스 위치값

canvas는 context를 갖고 있는 HTML의 요소
context는 canvas 안에서 픽셀들을 다루는 작업을 한다.

canvas element는 두 개의 사이즈를 가져야 함.
css 사이즈와 pixel manipulating 사이즈.
아래와 같이 선언해주어야 작동한다.
canvas.width = 700;
canvas.height = 700;
*/
