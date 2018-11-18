function Circle(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
  this.width = 50;
}

Circle.prototype.draw = function() {
  this.ctx.beginPath();

  this.ctx.arc(this.x, this.y + Math.floor(this.width / 2), Math.floor(this.width / 2), 0, Math.PI * 2);

  this.ctx.fill();
  this.ctx.closePath();
}