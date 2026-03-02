      const canvas = document.getElementById("game");
      console.log(canvas);
      const ctx = canvas.getContext("2d");
      console.log(ctx);
      let direction = "RIGHT";  
      const box = 20;
      let game = setInterval( draw,300); 
      const snake = [{ x: 9 * box, y: 10 * box }];
      let score = 0;
      let food = {
        x: Math.floor(Math.random() * 19) * box,
        y: Math.floor(Math.random() * 19) * box
      };
      //ecoute le  clavier pour changer la direction du serpent
      document.addEventListener("keydown",changeDirection);
      function changeDirection(event){
        if(event.key === "ArrowLeft"&& direction !="RIGHT") direction = "LEFT";
        if(event.key === "ArrowUp"&& direction !="DOWN") direction = "UP";
        if(event.key === "ArrowRight"&& direction !="LEFT") direction = "RIGHT";
        if(event.key === "ArrowDown"&& direction !="UP") direction = "DOWN";
        if(event.key === "p"|| event.key === "P") clearInterval(game);
        if(event.key === "r"|| event.key === "R") game = setInterval( draw,300);
      }
      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw snake
        snake.forEach((part, index) => {
          ctx.fillStyle = index === 0 ? "lime" : "blue";
          ctx.fillRect(part.x, part.y, box, box);
        });

        // draw food
        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, box, box);
               //position actuel de la tete du serpent
       let headX = snake[0].x;
       let headY = snake[0].y;
      //deplacement du serpent selon la direction
      if(direction === "LEFT") headX -= box;
      if(direction === "UP") headY -= box;      
      if(direction === "RIGHT") headX += box;
      if(direction === "DOWN") headY += box;
      //fonction pour dessiner le serpent et la nourriture
      if (headX < 0 || headX + box > canvas.width || headY < 0 || headY + box > canvas.height) {
      alert("Game Over");
       clearInterval(game);
      }
       
      // nouvelle position de la tete du serpent
      let newHead = {
        x: headX,
        y:headY};
      snake.unshift(newHead);
      //snake.pop();
      //verifie si le serpent mange la nourriture
    if(headX === food.x && headY === food.y){
        score+=50;
        document.getElementById("score").innerHTML = "score:" + score;
        //genere une nouvelle nourriture a une position aleatoire
        food = {
            x: Math.floor(Math.random() * 19) * box,
            y: Math.floor(Math.random() * 19) * box
        };
      }
        else {
          snake.pop(); 
        }
        }  
   game; 
   
