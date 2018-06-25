function Player(x, y) {
    Enemy.call(this, x, y);
    this.sprite = 'public/images/char-boy.png';
}

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(dt) {
    console.log('Stay put for now');
}

Player.prototype.handleInput = function(move) {
    console.log('move: ', move);
}