class Bird {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.width = 20;
    this.height = 20;
    this.weight = 1;
  }

  update() {
    // let it flap up and down, cycles between -1 and + 1 over and over
    let curve = Math.sin(angle) * 20;
    //2. make sure player stays in canvas
    if (this.y > canvas.height - this.height * 2 + curve) {
      this.y = canvas.height - this.height * 2 + curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      //player moves slow and than faster, to make it more manageable ...multiply it by 9. more like flappy bird
      this.vy *= 0.9;
      this.y += this.vy;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      //set velocity to zero so it drops instantly when I release the key
      this.vy = 0;
    }
    if (spacePressed && this.y > this.height * 3) this.flap();
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  flap() {
    this.vy -= 2;
  }
}

const bird = new Bird();
