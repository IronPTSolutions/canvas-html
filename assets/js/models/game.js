function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  this.ctx = this.canvas.getContext('2d');

  this.rectangle = new Rectangle(this.ctx);
  this.triangle = new Triangle(this.ctx, 100, 0);
  this.circle = new Circle(this.ctx, 170, 0);
  this.pacMan = new PacMan(this.ctx, 240, 0);
  this.mario = new Mario(this.ctx, 270, 0);
}

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.draw = function() {  
  this.rectangle.draw();
  this.triangle.draw();
  this.circle.draw();
  this.pacMan.draw();
  this.mario.draw();
}