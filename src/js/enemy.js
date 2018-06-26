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
Enemy.prototype.move = function(direction) {
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

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
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

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    // global sets the transparency of the enemy
    
    ctx.globalAlpha = this.camouflage ? this.camouflage : 1.0;
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    ctx.globalAlpha = 1.0;
};

Enemy.prototype.randomSpeed = function() {
    return Math.floor((Math.random() * 10) + 1)
}

function KillerBug(x, y, camouflage = 100) {
    Enemy.call(this, x, y);

    this.camouflage = camouflage;
}

KillerBug.prototype = Object.create(Enemy.prototype);
KillerBug.prototype.constructor = KillerBug;

KillerBug.prototype.attack = function(message) {
    alert(message);
}