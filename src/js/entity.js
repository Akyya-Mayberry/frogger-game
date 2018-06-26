// Enemies our player must avoid
var EntityBase = function(x, y, name, sprite) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.name = name;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
};

EntityBase.prototype.speeds = [10, 0, 0, 0, .02, 0, 0];
EntityBase.prototype.transparencies = [1, .2, .5, .02, .6];
EntityBase.prototype.getLocation = function() {
    return (this.x, this.y);
}
EntityBase.prototype.move = function(direction) {
    switch (direction) {
        case 'left':
            this.x -= 1;
            break;
        case 'right':
            this.x += 1;
            break;
        case 'up':
            this.y -= 1;
            break;
        case 'down':
            this.y += 1;
            break;
        default:
            console.log('error');
    }
}

// Update the EntityBase's position, required method for game
// Parameter: dt, a time delta between ticks
EntityBase.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 5) {
        this.x = 0;
        return;
    }
    // this.x += dt;
    // this.x += (83 * dt) + this.randomSpeed();
    this.x += dt * this.speeds[Math.floor((Math.random() * this.speeds.length - 1) + 1)];;
    // this.x += (83 * dt) + this.speeds[Math.floor((Math.random() * this.speeds.length - 1) + 1)];
};

// Draw the EntityBase on the screen, required method for game
EntityBase.prototype.render = function() {

    // global sets the transparency of the EntityBase
    
    ctx.globalAlpha = this.camouflage ? this.camouflage : 1.0;
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    ctx.globalAlpha = 1.0;
};

EntityBase.prototype.randomSpeed = function() {
    return Math.floor((Math.random() * 10) + 1)
}