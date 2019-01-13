let segments = []

function setup() {
    var canvas = createCanvas(600, 800);
    canvas.parent("results")
    background(0)
    noSmooth()
    noLoop()

    let a = createVector(0, 100)
    let b = createVector(600, 100)
    let c = createVector(300, p5.Vector.dist(a, b) * sqrt(3) / 2 + 100)

    stroke(255);

    segments.push(new Segment(a, b))
    segments.push(new Segment(b, c))
    segments.push(new Segment(c, a))

    segments.forEach(s => {
        s.draw()
    })
}

function draw() {
    $("#submitForm").click(function () {
        let nextGen = []

        segments.forEach(s => {
            let children = s.generate()

            children.forEach(c => {
                nextGen.push(c)
            })
        })

        segments = nextGen

        segments.forEach(s => {
            s.draw()
        })
    })
}

class Segment {
    constructor(a, b) {
        this._a = a.copy()
        this._b = b.copy()
    }

    generate() {
        let children = []

        let v = p5.Vector.sub(this._b, this._a)
        v.div(3)

        let b1 = p5.Vector.add(this._a, v)
        children[0] = new Segment(this._a, b1)

        let a1 = p5.Vector.sub(this._b, v)
        children[3] = new Segment(a1, this._b)

        v.rotate(-PI/3)
        let c = p5.Vector.sub(b1, v)

        children[2] = new Segment(b1, c)
        children[1] = new Segment(c, a1)

        return children
    }

    draw() {
        line(this._a.x, this._a.y, this._b.x, this._b.y)
    }
}