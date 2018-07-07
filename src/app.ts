const time = document.querySelector('#countdown');
const navMenu = document.querySelector('#nav-menu');
const gameOver = document.querySelector('#game-over');
const wonGame = document.querySelector('#won-game');
const avatars = document.querySelector('#avatars');
const defaultPlayer = document.querySelector('#default-avatar');
const stats = document.querySelector('#stats');
const lives = document.querySelectorAll('.stats-life');
const canvas = document.querySelector('.canvas');
const goButton = document.querySelector('#start-btn');
let allEnemies;
let player;
let countdown: number;

function init() {
    player = new Player();
    allEnemies = KillerBug.prototype.makeBugs();
    displayStats(false);
    displayMenu();
    displayGameOver(false);
    timer(11);
}

init()

/**
 * Handles all set up for setting game in motion
 */
function startGame() {
    document.querySelector('.canvas').width = 505;
    document.querySelector('.canvas').height = 606;

    displayStats();
    displayMenu(false);

    player.activate();
}

/**
 * Handles the timer dislayed that controls
 * when user can begin playing the game
 */
function timer(count = 10) {
    countdown = count;
    time!.innerHTML = `${countdown}`;

    const t = setInterval(function () {
        if (countdown == 0) {
            startGame();
            clearInterval(t);
        } else {
            time!.innerHTML = `${countdown}`;
            countdown--;
        }
    }, 1000);
}

/**
 * Sets the display image for player lives in stats section
 * @param {full path to image} src 
 */
function setUpLives(src = defaultPlayer!.src) {
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
        const filename = src[src.length - 1];

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
    player = new Player();

    displayStats(false);
    setUpLives();
    displayMenu();
    displayGameOver(false);
    displayWonGame(false);

    document.querySelector('.selected').classList.remove('selected');
    defaultPlayer.classList.add('selected');

    timer(15);
}

/**
 * Displays stats like player name and lives on screen
 * @param {boolean indicating whether to show stats} show 
 */
function displayStats(show = true) {
    if (show) {
        const name = document.querySelector('#player-name');
        if (name.value != '') { player.name = name.value; }
        stats.style.opacity = '1';
        document.querySelector('#stats-header').innerHTML = `Go ${player.name}!`;
    } else {
        stats.style.opacity = '0';
    }
}

/**
 * Displays/hides game menu overlay for profile setup
 * @param {boolean indicating whether to show menu} show 
 */
function displayMenu(show = true) {
    navMenu.style.width = show ? '100%' : '0';
}

/**
 * Displays/hides gameover overlay for profile setup
 * @param {boolean indicating whether to show gameover} show 
 */
function displayGameOver(show = true) {
    gameOver.style.width = show ? '100%' : '0';
}

/**
 * Displays/hides won game overlay
 * @param {boolean indicating whether to show won game} show 
 */
function displayWonGame(show = true) {
    wonGame.style.width = show ? '100%' : '0';
}

////////////////////////////////////////////////////
// Listeners

// Listen for changes in avatar
avatars.addEventListener('click', updateAvatar);

// Overrids the countdown to automatically start game
goButton.addEventListener('click', function () { countdown = 0; });

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
document.addEventListener('click', function (e) {
    if (e.target.nodeName === 'BUTTON' &&
        e.target.classList.contains('play-again')) {
        allEnemies = KillerBug.prototype.makeBugs();
        setupPlayer();
    }
});