function Rectangle(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
  this.width = 50;
  this.height = 50;
}

Rectangle.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}
