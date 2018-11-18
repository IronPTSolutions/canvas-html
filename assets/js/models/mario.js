function Mario(ctx, x, y) {
  this.ctx = ctx;
  this.y = y || 0;
  this.x = x || 0;
  this.width = 60;
  this.height = 50;

  this.image = new Image();
  this.image.src = './assets/img/mario.png';
  this.image.onload = function() {
    this.width = this.image.width;
    this.height = this.image.height;
  }.bind(this);
}

Mario.prototype.draw = function() {
  this.ctx.drawImage(
    this.image,
    this.x,
    this.y,
    this.width,
    this.height
    );
}