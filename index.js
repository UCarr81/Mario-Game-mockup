const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const gravity = 0.2
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 40;
        this.height = 40;
    }

    draw() {
        c. fillStyle = 'blue'
        c. fillRect
        (this.position.x,
        this.position.y, 
        this.width, 
        this.height
            )
    }
    update() {
        this.draw();
        this.position.y += this.velocity.y;
        
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
    else this.velocity.y = 0;
    }
}

const player = new Player();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update()
}
animate()