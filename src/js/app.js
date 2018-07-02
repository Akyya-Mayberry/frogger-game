const countDown = document.querySelector('#countdown');
const navMenu = document.querySelector('#nav-menu');
const gameOver = document.querySelector('#game-over');
const playAgainButton = document.querySelector('#play-again');
const avatars = document.querySelector('#avatars');
const defaultPlayer = document.querySelector('#default-avatar');
const stats = document.querySelector('#stats');
const lives =  document.querySelectorAll('.stats-life');
let allEnemies = KillerBug.prototype.makeBugs();
let player = new Player();
let count = 14;

function init() {
    stats.style.opacity = 0;
    navMenu.style.width = '100%';
    gameOver.style.width = '0';
    countdown();
}

init()

/**
 * Handles all set up for setting game in motion
 */
function startGame() {
    document.querySelector('.canvas').width = 505;
    document.querySelector('.canvas').height = 606;
    
    // const name = document.querySelector('#player-name');
    // if (name.value != '') { player.name = name.value; }
    // stats.style.opacity = 1;
    // document.querySelector('#stats-header').innerHTML = `Go ${player.name}!`;
    displayStats();
    
    player.activate();
    navMenu.style.width = '0%';
    
}

/**
 * Handles the countdown dislayed that controls
 * when user can begin playing the game
 */
function countdown() {
    const t = setInterval(function () {
        if (count == 0) {
            startGame();
            clearInterval(t);
        } else {
            countDown.innerHTML = count;
            count--;
        }
    }, 1000);
}

/**
 * Sets the display image for player lives in stats section
 * @param {full path to image} src 
 */
function setUpLives(src=defaultPlayer.src) {
    for (const life of lives) {
        life.src = src;
    }
}

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

        setUpLives(e.target.src);
    }
}

/**
 * Resets game to player profile selection
 */
function setupPlayer() {
    allEnemies = KillerBug.prototype.makeBugs();
    player = new Player();
    count = 10;

    document.querySelector('#stats').style.opacity = '0';
    setUpLives();

    navMenu.style.width = '100%';
    gameOver.style.width = '0';
    
    // document.querySelector('.stats-lives').style.opacity = '0';

    document.querySelector('.selected').classList.remove('selected');
    defaultPlayer.classList.add('selected');

    countdown();
}

/**
 * Displays stats like player name and lives on screen
 */
function displayStats() {
    const name = document.querySelector('#player-name');
    if (name.value != '') { player.name = name.value; }
    stats.style.opacity = 1;
    document.querySelector('#stats-header').innerHTML = `Go ${player.name}!`;
}

////////////////////////////////////////////////////
// Listeners

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

/**
 * Listens for clicking of restart button
 */
playAgainButton.addEventListener('click', function(e) {
    setupPlayer();
});