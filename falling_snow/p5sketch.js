let snowflakes = []

function setup() {
    var canvas = createCanvas(600, 800);
    canvas.parent("results")
    fill(100)

    frameRate(30)
    let numberOfSnowflakes = 100

    generateSnowflakes(numberOfSnowflakes)
}

function draw() {
    background('brown');

    generateSnowflakes(5)

    snowflakes.forEach(s => {
        if (s.pos.y > windowHeight) {
            snowflakes.pop(s.indexOf)
        } else {
            s.update()
            s.draw()
        }
    })
}

function generateSnowflakes(number) {
    for (let i = 0; i < number; i++) {
        let randX = Math.floor(Math.random() * windowHeight)
        let randY = Math.floor(Math.random() * 100)
        let speed = Math.floor(Math.random() * 5) + 1

        snowflake = new Snowflake(randX, randY, speed )
        snowflake.generate()
        snowflakes.push(snowflake)
    }
}

class Snowflake {
    constructor(a, b, speed) {
        this.a = a
        this.b = b
        this.speed = speed
        this.pos = null
        this.size = random(2, 5);
    }

    generate() {
        this.pos = createVector(this.a, this.b)
    }

    update() {
        this.pos.y++
        this.pos.x -= Math.sin(Math.PI /2)
    }

    draw() {
        fill(255)
        noStroke()
        ellipse(this.pos.x, this.pos.y * this.speed, this.size);
    }
}