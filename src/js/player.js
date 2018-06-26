function Player(x, y) {
    Enemy.call(this, x, y);
    this.sprite = 'public/images/char-boy.png';
}

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(dt) {
    // console.log('Stay put for now');
}

Player.prototype.validate = function() {
    let valid_moves = new WeakSet;
    
    
    // if (this.x > 1) {
    //     valid_moves.add('left')
    // }
    
    // if (this.x < 5) {
    //     valid_moves.add('right');
    // }
    
    // if (this.y > 1) {
    //     valid_moves.add('up');
    // }

    // if (this.y < 5) {
    //     valid_moves.add('down');
    // }

    return valid_moves;
}

Player.prototype.handleInput = function(input) {
    // console.log('validated: ', this.validate());
    // if (!this.validate()) {
    //     return;
    // }

    const valid_moves = this.validate();

    switch (input) {
        case 'left':
        console.log('kdajsklfj');
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