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
        this.position.x += this.velocity.x;
        
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
    else this.velocity.y = 0;
    }
}

const player = new Player();
const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed:false,
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update()

    if (keys.right.pressed) {
        player.velocity.x = 5
    } else if (keys.left.pressed) {
        player.velocity.x = -5
    } else player.velocity.x = 0
    
}
animate()


window.addEventListener('keydown', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 65: console.log('left');
        keys.left.pressed = true;
        break

        case 87: console.log('up');
        break

        case 68: console.log('right');
        keys.right.pressed = true;
        break

        case 82: console.log('down');
        break

        case 32: console.log('space');
        break
    }
    console.log(keys.right.pressed)
});

window.addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 65: console.log('left');
        keys.left.pressed = false;
        break

        case 87: console.log('up');
        break

        case 68: console.log('right');
        keys.right.pressed = false;
        break

        case 82: console.log('down');
        break

        case 32: console.log('space');
        break
    }
    console.log(keys.right.pressed)
});