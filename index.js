const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 40;
        this.height = 40;
    }

    draw() {
        c. fillStyle = 'blue';
        c. fillRect
        (this.position.x,
        this.position.y, 
        this.width, 
        this.height
            )
    }
}

const player = new Player();
player.draw()