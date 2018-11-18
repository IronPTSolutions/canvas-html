function Triangle(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;

  this.width = 50;
  this.height = 50;
}

Triangle.prototype.draw = function() {
  this.ctx.save();

  this.ctx.beginPath();
  this.ctx.moveTo(this.x, this.y);
  
  this.ctx.lineTo(this.x  + Math.floor(this.height / 2), this.y + this.width);
  this.ctx.lineTo(this.x - Math.floor(this.height / 2), this.y + this.width);
  this.ctx.lineTo(this.x, this.y);

  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.restore();
}