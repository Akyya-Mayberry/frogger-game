const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

function makeBugs() {
    const locations = shuffle([[-2, 230], [-180, 150], [-60, 70]]);
    return [
        new KillerBug(locations[0][0], locations[0][1]),
        new KillerBug(locations[1][0], locations[1][1]),
        new KillerBug(locations[2][0], locations[2][1])
    ]
}

const allEnemies = makeBugs();