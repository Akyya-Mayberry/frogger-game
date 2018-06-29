let allEnemies = KillerBug.prototype.makeBugs();
let player = new Player();
let count = 10;
const countDown = document.querySelector('#countdown');

const t = setInterval(function () {
    if (count == 0) {
        player.activate();
        clearInterval(t);
    } else {
        count--; countDown.innerHTML = count;
    }
}, 1000);

for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    countDown.innerHTML = n;
}

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