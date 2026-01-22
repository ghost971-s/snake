const canvas = document.getElementById("game");
console.log(canvas);

const ctx = canvas.getContext("2d");
console.log(ctx);

const box = 20;

const snake = [{ x: 9 * box, y: 10 * box }];

let food = {
  x: Math.floor(Math.random() * 19) * box,
  y: Math.floor(Math.random() * 19) * box
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw snake
  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? "lime" : "green";
    ctx.fillRect(part.x, part.y, box, box);
  });

  // draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);
}

setInterval(draw(),1000);
