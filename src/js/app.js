const countDown = document.querySelector('#countdown');
const navMenu = document.querySelector('#nav-menu');
const gameOver = document.querySelector('#game-over');
const avatars = document.querySelector('#avatars');
let allEnemies = KillerBug.prototype.makeBugs();
let player = new Player();
let count = 3;

function init() {
    navMenu.style.width = '100%';
    gameOver.style.width = '0';
}

init()

/**
 * Handles all set up for setting game in motion
 */
function startGame() {
    document.querySelector('.canvas').width = 505;
    document.querySelector('.canvas').height = 606;
    const name = document.querySelector('#player-name');
    
    if (name.value != '') { player.name = name.value; }
    player.activate();
    
    navMenu.style.width = '0%';
    
    // document.querySelector('.stats-lives').style.display = 'initial';
    document.querySelector('.stats-lives').style.opacity = '1';
    document.querySelector('#stats-header').innerHTML = `Go ${player.name}!`;
}

/**
 * Handles the countdown dislayed that controls
 * when user can begin playing the game
 */
const t = setInterval(function () {
    if (count == 0) {
        startGame();
        clearInterval(t);
    } else {
        countDown.innerHTML = count;
        count--;
    }
}, 1000);

/**
 * Updates selected avatar
 * @param {Event target} e 
 */
const updateAvatar = function (e) {
    if (e.target.nodeName === 'IMG') {

        const src = e.target.src.split('/');
        filename = src[src.length - 1];

        player.changeSprite(filename);

        document.querySelector('.selected').classList.remove('selected');
        e.target.classList.add('selected');

        for (const life of document.querySelectorAll('.stats-life')) {
            life.src = e.target.src;
        }
    }
}

// Listen for changes in avatar
avatars.addEventListener('click', updateAvatar);

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