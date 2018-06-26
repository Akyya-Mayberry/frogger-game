function Player(x, y) {
    Enemy.call(this, x, y);
    this.sprite = 'public/images/char-boy.png';
}

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(dt) {
    // console.log('Stay put for now');
}

Player.prototype.handleInput = function(move) {
    switch (move) {
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
            console.log('invalid movement');
    }
}