// Enemies our player must avoid
var Enemy = function(x, y, sprite = 'public/images/enemy-bug.png') {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
};

Enemy.prototype.speeds = [10, 0, 0, 0, .02, 0, 0];
Enemy.prototype.transparencies = [1, .2, .5, .02, .6];

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 101 * 5) {
        this.x = -7;
        return;
    }
    this.x += (83 * dt) + this.speeds[Math.floor((Math.random() * this.speeds.length - 1) + 1)];
    // this.x += this.speeds[Math.floor((Math.random() * this.speeds.length - 1) + 1)] + (dt * 2);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    // global sets the transparency of the enemy
    
    ctx.globalAlpha = this.camouflage ? this.camouflage : 1.0;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.globalAlpha = 1.0;
};

function KillerBug(x, y, camouflage = 100) {
    Enemy.call(this, x, y);

    this.camouflage = camouflage;
}

KillerBug.prototype = Object.create(Enemy.prototype);
KillerBug.prototype.constructor = KillerBug;

KillerBug.prototype.attack = function(message) {
    alert(message);
}