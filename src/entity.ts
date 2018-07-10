import ctx from './engine';
import Resources from './resources';

/**
 * Base class that all players and enemies will inherit from
 * @param {start horizontal position} x
 * @param {start verticle position} y
 * @param {name of entity} name
 * @param {image to use for entity} sprite
 */
const EntityBase = (function() {

    function EntityBase(x = 0, y = 0, name, sprite) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.sprite = `../src/public/images/${sprite}`;
        this.getRandomStart = this.getRandomStart;
    }

    /**
     * Provides x,y coordinates/location of entity
     */
    EntityBase.prototype.getLocation = function() {
        return [this.x, this.y];
    };

    /**
     * Updates the sprite
     */
    EntityBase.prototype.changeSprite = function(sprite) {
        this.sprite = `../src/public/images/${sprite}`;
    };

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

        /*
        TODO:
            This function should be updated to take able to take a
            a series of movement [left, up, down] etc
        */
    };

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
        return Math.floor((Math.random() * max) + 1);

        /*
        TODO:
            Once I can get static methods on this class to work
            this can be moved to static method
        */
    };

    /**
     * Provides random transparency number from 0 - 1
     */
    EntityBase.prototype.getRandomTransparency = function() {
        return Math.random();
    };

    /**
     * Provides a random start point using random generated number
     * @param {start range for random number - inclusive} min
     * @param {end range for random number - exclusive} max
     */
    EntityBase.getRandomStart = function(min = 0, max = 5) {
        return Math.floor((Math.random() * max) + min);

        /*
        TODO:
            Currently this is not working, though it should.
        */
    };

    return EntityBase;

})();

export = EntityBase;
