/**
 * Base enemy class that all enemies will inherit from
 * @param {start horizontal position} x 
 * @param {start verticle position} y 
 * @param {name of enemy} name 
 * @param {image to use for enemy} sprite 
 */
function Enemy(x, y, name, sprite) {
    EntityBase.call(this, x, y, name, sprite);
    this.speed = this.getRandomSpeed();
    this.baseLocation = {x: x, y: y};
};

Enemy.prototype = Object.create(EntityBase.prototype);
Enemy.prototype.constructor = Enemy;

/**
 * Restores enemy original location
 */
Enemy.prototype.resetLocation = function() {
    this.x = this.baseLocation.x;
    this.y = this.baseLocation.y;
}

/**
 * Displays name of enemy that attack
 */
Enemy.prototype.attack = function() {
    alert(`Ouch! Hit. ${this.name} attacked!`);
}

/**
 * Update the enemy's position, required method for game
 * @param {a time delta between ticks} dt 
 */
Enemy.prototype.update = function(dt) {

    // Resets enemy location if it has gone offscreen 
    if (this.x > 5) {
        this.x = this.getRandomStart();
        this.speed = this.getRandomSpeed();
        this.camouflage = this.getRandomTransparency();
        return;
    }

    this.x += (dt * this.speed);

    /* 
    TODO:
        The enemy offscreen point (5) should not be hardcoded here.
        Need to be set somewhere else. Also consider moving that code
        block to seperate method.
    */
};


/**
 * Killer bug is most basic enemy
 * @param {horizontal location} x 
 * @param {verticle location} y 
 * @param {transparency ability - harder to see} camouflage 
 */
function KillerBug(x, y, camouflage = 100) {
    Enemy.call(this, x, y, 'Killer Bug', 'enemy-bug.png');
    this.camouflage = camouflage;
}

KillerBug.prototype = Object.create(Enemy.prototype);
KillerBug.prototype.constructor = KillerBug;

/**
 * Creates a negative number for starting bug offscreen
 */
KillerBug.prototype.getRandomStart = function() {
    return -(EntityBase.prototype.getRandomStart.apply(this, [0, 4]));
}

/**
 * Creates families of killer bugs
 * @param {Number of killer bugs to create} num 
 */
KillerBug.prototype.makeBugs = function(num = 3) {
    let bugs = Array.from(Array(num).keys()).map(function(n, i) {
        return new KillerBug(this.getRandomStart(), i + 1, this.getRandomTransparency());
    }, this);

    return bugs;
}