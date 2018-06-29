/**
 * Base player class that all players will inherit from
 * @param {start horizontal position} x 
 * @param {start verticle position} y 
 * @param {name of player} name 
 * @param {image to use for player} sprite 
 */
function Player(x, y, name="Player 1", sprite = 'char-boy.png') {
    EntityBase.call(this, x, y, name, sprite);
    this.activated = false;
    this.camouflage = 1.0;
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
 * Decide what to do with this
 */
Player.prototype.update = function() {
    
    // Player collision is animated by altering hurt/camouflage setting.
    this.hurt == 0 ? this.camouflage = 1.0 : this.hurt--;

    /* 
    TODO:
        Decide what other purposes this serves. 
    */ 
}

/**
 * Animates user collision 
 */
Player.prototype.hit = function() {
    
    player.hurt = 10;
    this.camouflage = .35;
    this.setLocation(2, 5);
}

/**
 * Place player at specific location
 * @param {placement of player on horizontal axis} x
 * @param {placement of player on verticle axis} y
 */
Player.prototype.setLocation = function(x, y) {
    if (x > 0 && x < 5 && y > 0 && y < 6) { this.x = x; this.y = y };
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