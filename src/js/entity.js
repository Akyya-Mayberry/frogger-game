var EntityBase = function(x, y, name, sprite) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.name = name;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
};

EntityBase.prototype.transparencies = [1, .2, .5, .02, .6];

EntityBase.prototype.getLocation = function() {
    return (this.x, this.y);
}

EntityBase.prototype.move = function(direction) {
    switch (direction) {
        case 'left':
            this.x -= 1;
            break;
        case 'right':
            this.x += 1;
            break;
        case 'up':
            this.y -= 1;
            break;
        case 'down':
            this.y += 1;
            break;
        default:
            console.log('error');
    }
}

// Draw the EntityBase on the screen, required method for game
EntityBase.prototype.render = function() {

    // global sets the transparency of the EntityBase
    ctx.globalAlpha = this.camouflage ? this.camouflage : 1.0;
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    ctx.globalAlpha = 1.0;
};

EntityBase.prototype.getRandomSpeed = function(max = 5) {
    return Math.floor((Math.random() * max) + 1)
}

EntityBase.prototype.getRandomTransparency = function() {
    return Math.random();
}