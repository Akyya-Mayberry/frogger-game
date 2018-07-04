/**
 * Base player class that all players will inherit from
 * @param {start horizontal position} x 
 * @param {start verticle position} y 
 * @param {name of player} name 
 * @param {image to use for player} sprite 
 */
function Player(x = 2, y = 5, name="Player 1", sprite = 'char-boy.png') {
    EntityBase.call(this, x, y, name, sprite);
    this.activated = false;
    this.camouflage = 1.0;
    this.lives = 3;
    this.hurt = 0;
}

Player.prototype = Object.create(EntityBase.prototype);
Player.prototype.constructor = Player;

/**
 * Activates player (allows user to move player)
 */
Player.prototype.activate = function() {
    player.activated = true;
}

/**
 * Returns whether or not player still has life
 */
Player.prototype.isAlive = function() {
    return this.lives > 0;
}

/**
 * Set player as dead
 */
Player.prototype.kill = function() {
    this.lives = 0;
    this.activated = false;
    this.hurt = 10;
    this.camouflage = .50;
}

/**
 * Decide what to do with this
 */
Player.prototype.update = function() {
    
    // Player collision is animated by altering hurt/camouflage setting.
    this.hurt == 0 ? this.camouflage = 1.0 : this.hurt--;
    
    document.querySelectorAll('.stats-life').forEach(function(life, index) {
        life.style.opacity = this.lives >= index + 1 ? 1 : .50;
    }, this);

    return this.isAlive();
    /* 
    TODO:
        Decide what other purposes this serves. 
    */ 
}

/**
 * Decrement user life count by 1
 */
Player.prototype.loseALife = function() {
    this.lives -= 1;
}

/**
 * Animates user collision 
 */
Player.prototype.hit = function() {
    
    this.loseALife();
    player.hurt = 10;
    this.camouflage = .35;
    
    if (this.y < 2) {
        this.setLocation(2, 5);
    } else {
        this.setLocation(this.x - 1, this.y + 2);
    }
}

/**
 * Place player at specific location
 * @param {placement of player on horizontal axis} x
 * @param {placement of player on verticle axis} y
 */
Player.prototype.setLocation = function(x, y) {
    if (x > 0 && x < 6 && y > 0 && y < 6) { 
        this.x = x; this.y = y
    } else {
        this.x = 2;
        this.y = 5;
    }
}

/**
 * Moves the player along the x/y axis based
 * @param {direction player attempts to move in} input 
 */
Player.prototype.handleInput = function(input) {
    if (!player.activated) { return; }

    switch (input) {
        case 'left':
            if (this.x > 0) { this.move(input) };
            break;
        case 'right':
            if (this.x < 4) { this.move(input) };
            break;
        case 'up':
            if (this.y > 0) { this.move(input) };
            break;
        case 'down':
            if (this.y < 5) { this.move(input) };
            break;
        default:
            console.log('invalid movement');
    }

    /*
    TODO:
        All of the out-of-bounds/offscreen numbers are hardcoded
        here. This needs to be refactor and stored on the class
        or somewhere easier to maintain.
    */
}