let snowflakes = []
let canvasWidth = 600
let canvasHeight = 100

function setup() {
    var canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("results")
    fill(100)
    frameRate(30)

    $("#submitForm").click(function() {
        let numberOfSnowflakes = parseInt($("#snowflakesNumber").val())
        generateSnowflakes(numberOfSnowflakes)
    })
}

function draw() {
    background('brown');

    snowflakes.forEach(s => {
            s.update()
            s.draw()
    })
}

function generateSnowflakes(number) {
    for (let i = 0; i < number; i++) {
        let randX = Math.floor(Math.random() * windowHeight)
        let randY = Math.floor(Math.random() * 100)
        //let speed = Math.floor(Math.random() * parseInt($("#maxSpeed").val())) + 1

        let speed = 1
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
        this.size = random(5, 15);
    }

    generate() {
        this.pos = createVector(this.a, this.b)
    }

    update() {
        if (this.pos.y < canvasHeight) {
            let cont = true

            snowflakes.forEach(s => {
                if (cont && s.pos.x === this.pos.x && s.pos.y === this.pos.y +10 ) {
                    cont = false
                }
            }) 

            if (cont) {
                this.pos.y++
            }
        }
    }

    draw() {
        fill(255)
        noStroke()
        ellipse(this.pos.x, this.pos.y * this.speed, this.size);
    }
}