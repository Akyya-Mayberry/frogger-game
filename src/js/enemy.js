function Enemy(x, y, name, sprite) {
    EntityBase.call(this, x, y, name, sprite);
    this.speed = this.getRandomSpeed();
    this.baseLocation = {x: x, y: y};
};

Enemy.prototype = Object.create(EntityBase.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.resetLocation = function() {
    this.x = this.baseLocation.x;
    this.y = this.baseLocation.y;
}

Enemy.prototype.attack = function() {
    alert(`Ouch! Hit. ${this.name} attacked!`);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 5) {
        this.x = 0;
        this.speed = this.getRandomSpeed();
        this.camouflage = this.getRandomTransparency();
        return;
    }

    this.x += (dt * this.speed);
};

function KillerBug(x, y, camouflage = 100) {
    Enemy.call(this, x, y, 'Killer Bug', 'public/images/enemy-bug.png');
    this.camouflage = camouflage;
}

KillerBug.prototype = Object.create(Enemy.prototype);
KillerBug.prototype.constructor = KillerBug;

KillerBug.prototype.getRandomStart = function() {
    return -(Math.floor((Math.random() * 4) + 1));
}

KillerBug.prototype.makeBugs = function(num = 3) {
    return bugs = Array.from(Array(num).keys()).map(function(n, i) {
        console.log('kdkdl: ', this.getRandomTransparency());
        return new KillerBug(this.getRandomStart(), i + 1, this.getRandomTransparency());
    }, this);
}