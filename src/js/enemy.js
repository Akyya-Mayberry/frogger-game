// Enemies our player must avoid
function Enemy(x, y, name, sprite) {
    EntityBase.call(this, x, y, name, sprite)
};

Enemy.prototype = Object.create(EntityBase.prototype);
Enemy.prototype.constructor = Enemy;
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
        return;
    }

    this.x += dt * this.speeds[Math.floor((Math.random() * this.speeds.length - 1) + 1)];;
};


function KillerBug(x, y, camouflage = 100) {
    Enemy.call(this, x, y, 'Killer Bug', 'public/images/enemy-bug.png');
    this.camouflage = camouflage;
}

KillerBug.prototype = Object.create(Enemy.prototype);
KillerBug.prototype.constructor = KillerBug;