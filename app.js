const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let speed = 2;
let temp = canvas.height - 100;

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillRect(10, temp, 20, 20);
  bird.move();
  bird.draw();
  requestAnimationFrame(animate);
  angle += 0.12;
};
animate();

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") spacePressed = true;
  temp++;
});
window.addEventListener("keyup", (e) => {
  if (e.code === "Space") spacePressed = false;
});
