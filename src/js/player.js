/**
 * Base player class that all players will inherit from
 * @param {start horizontal position} x 
 * @param {start verticle position} y 
 * @param {name of player} name 
 * @param {image to use for player} sprite 
 */
function Player(x, y, name="Player 1", sprite = 'public/images/char-boy.png') {
    EntityBase.call(this, x, y, name, sprite);
}

Player.prototype = Object.create(EntityBase.prototype);
Player.prototype.constructor = Player;

/**
 * Decide what to do with this
 */
Player.prototype.update = function() {
    /* 
    TODO:
        Decide what purpose this serves. 
    */ 
}

/**
 * Moves the player along the x/y axis based
 * @param {direction player attempts to move in} input 
 */
Player.prototype.handleInput = function(input) {
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