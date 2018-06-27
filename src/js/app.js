function makeBugs() {
    return [
        new KillerBug(-2, 1),
        new KillerBug(-5, 2),
        new KillerBug(-3, 3)
    ]
}

let allEnemies = KillerBug.prototype.makeBugs();
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});