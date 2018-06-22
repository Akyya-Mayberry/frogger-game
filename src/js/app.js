
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const slowBug = new SlowBug(2, 300);
const fastBug = new FastBug(40, 190);
const crackheadBug = new CrackHeadBug(10, 90);

const allEnemies = [slowBug, fastBug, crackheadBug];

setInterval(function() {
    slowBug.attack(`${slowBug.name} attacked!!!!`);
}, 5000)
