function PacMan(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
  this.width = 50;
}

PacMan.prototype.draw = function() {
  this.ctx.save();

  this.ctx.beginPath();
  this.ctx.fillStyle = '#fdff00';
  this.ctx.arc(
    this.x, 
    this.y + this.width / 2,
    this.width / 2,
    -Math.PI / 4,
    Math.PI / 4,
    true
    );
  this.ctx.lineTo(this.x, this.y + this.width / 2);
  
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.beginPath();
  this.ctx.fillStyle = '#000';
  this.ctx.arc(
    this.x + 5,
    this.y + 10,
    2,
    0,
    2 * Math.PI,
    true
  );
  this.ctx.lineTo(this.x, this.y + this.width / 2);

  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.restore();
}