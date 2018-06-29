const countDown = document.querySelector('#countdown');
const navMenu = document.querySelector('#myNav');
let allEnemies = KillerBug.prototype.makeBugs();
let player = new Player();
let count = 24;

/**
 * Handles the countdown dislayed that controls
 * when user can begin playing the game
 */
const t = setInterval(function () {
    if (count == 0) {
        const name = document.querySelector('#player-name');
        
        if (name.length > 0 && name.value != '') { player.name = name.value; }
        player.activate();

        navMenu.style.width = '0%';
        clearInterval(t);
    } else {
        countDown.innerHTML = count;
        count--; 
    }
}, 1000);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});