/**
 * Base class that all players and enemies will inherit from
 * @param {start horizontal position} x 
 * @param {start verticle position} y 
 * @param {name of entity} name 
 * @param {image to use for entity} sprite 
 */
const EntityBase = function(x = 0, y = 0, name, sprite) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.sprite = sprite;
};

/**
 * Provides x,y coordinates/location of entity
 */
EntityBase.prototype.getLocation = function() {
    return (this.x, this.y);
}

/**
 * Provides basic movement of entity along x/y axis
 * @param {which direction to move in} direction
 */
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

/**
 * Draw the EntityBase on the screen, required method for game
 */
EntityBase.prototype.render = function() {
    // globalAlpha sets the transparency of the EntityBase
    ctx.globalAlpha = this.camouflage ? this.camouflage : 1.0;
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    ctx.globalAlpha = 1.0;
};

/**
 * Provides a random speed using random generated number
 * @param {the upper range of random number - exclusive} max
 */
EntityBase.prototype.getRandomSpeed = function(max = 5) {
    return Math.floor((Math.random() * max) + 1)
}

/**
 * Provides a random start point using random generated number
 * @param {start range for random number - inclusive} min
 * @param {end range for random number - exclusive} max
 */
EntityBase.prototype.getRandomStart = function(min = 0, max = 5) {
    return Math.floor((Math.random() * max) + min);
}

/**
 * Provides random transparency number from 0 - 1
 */
EntityBase.prototype.getRandomTransparency = function() {
    return Math.random();
}