# Snake

Make the Snake game where a snake travels around to eat apples. Each apple makes the snake a bit longer.

## 1. Checkout the template code

The initial code creates a canvas and a drawing function. The drawing function paints the canvas black with the following code:

```
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}
setInterval(draw, 1000 / 5);
```

Load the html file in Chrome to see this black box.

## 2. Add an apple

Each apple will be a square, add the size of a square as a variable outside of the draw function:

```
const squareSize = 20;
```

Then create an apple structure outside of the draw function:

```
const apple = {
    x: 15,
    y: 15,
};
```

Then, inside the draw function and after painting the black background, draw the apple:

```
    ctx.fillStyle = "red";
    ctx.fillRect(
        apple.x * squareSize,
        apple.y * squareSize,
        squareSize - 2,
        squareSize - 2,
    );
```

Now load the html page again and you should see your apple.

## 3. Add the snake

Add a snake structure that will define where the snake is and the direction he is moving:

```
const snake = {
    x: 10,
    y: 10,
    dx: 0,
    dy: 0,
};
```

You'll also need to track a tail for the snake and the length its tail:

```
const trail = [];
let tail = 5;
```

Next in the draw function, draw the snake:

```
    ctx.fillStyle = "lime";
    for (let i = 0; i < trail.length; i++) {
        ctx.fillRect(
            trail[i].x * squareSize,
            trail[i].y * squareSize,
            squareSize - 2,
            squareSize - 2,
        );
    }
```

There's no tail defined yet though, so in the draw function we need to always add to his tail:

```
    trail.push({ x: snake.x, y: snake.y });
    while (trail.length > tail) {
        trail.shift();
    }
```

Now reload the html page and you should see your snake sitting in one spot.

## 4. Move the snake

To move the snake we'll listen to keyboard keys (up, down, left, right). Create a new function that captures keyboard keys and changes the direction of our snake:

```
function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            snake.dx = -1;
            snake.dy = 0;
            break;
        case 38:
            snake.dx = 0;
            snake.dy = -1;
            break;
        case 39:
            snake.dx = 1;
            snake.dy = 0;
            break;
        case 40:
            snake.dx = 0;
            snake.dy = 1;
            break;
    }
}
```

We need to tell Chrome that this function should receive keyboard events. So add this to the top of our js file:

```
document.addEventListener("keydown", keyPush);
```

Now we need to move the snake based on the direction its heading. We'll do this in the draw function. Add this code:

```
    snake.x += snake.dx;
    snake.y += snake.dy;
```

But what happens when the snake hits the edges? He'll wrap around to the other side. So we need this code:

```
    const gameSize = 20;
    if (snake.x < 0) {
        snake.x = gameSize - 1;
    }
    if (snake.x > gameSize - 1) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = gameSize - 1;
    }
    if (snake.y > gameSize - 1) {
        snake.y = 0;
    }
```

Now load the html page and drive around your snake.

## 5. Eat the apple

When you hit the apple the snake just goes right over it. He needs to eat it and have it make his tail longer. So we need to check if he hits one by adding this code to the draw function:

```
    if (apple.x == snake.x && apple.y == snake.y) {
        tail++;
        apple.x = Math.floor(Math.random() * gameSize);
        apple.y = Math.floor(Math.random() * gameSize);
    }
```

Reload the html page and try to eat those apples!

## 6. Kill the snake

You lose the game when the snake bumps into his own tail. We'll have it return to its original size when this happens. Check for this scenario inside the for loop for his tail by adding this:

```
        if (trail[i].x == snake.x && trail[i].y == snake.y) {
            tail = 5;
        }
```

And your done! See how big you can get a snake!

## Congratulations
