function Player(x, y, name="Player 1", sprite = 'public/images/char-boy.png') {
    EntityBase.call(this, x, y, name, sprite);
}

Player.prototype = Object.create(EntityBase.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(dt) {
    // console.log('Stay put for now');
}

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
}