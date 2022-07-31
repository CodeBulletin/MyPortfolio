const ballRadius = [2, 6];
const bg = [247, 247, 247];
const ballColor = [0, 0, 0, 123];

var maxDistancePx = 250;
var colAtMaxpx = 50;

const num_balls = 50;
const minSpeed = 5;
const maxSpeed = 40;
const stweight = 1;

class ball {
    constructor(pos, dir, speed, radius) {
        this.pos = pos;
        this.dir = dir;
        this.dir.mult(speed);
        this.radius = radius;
    }

    update(bounds, deltaTime) {
        this.pos.add(p5.Vector.mult(this.dir, deltaTime));
        if (this.pos.x-this.radius >= bounds[0]) {
            this.pos.x = 0;
        }
        else if (this.pos.x+this.radius <= 0) {
            this.pos.x = bounds[0];
        }
        if (this.pos.y-this.radius >= bounds[1]) {
            this.pos.y = 0;
        }
        else if (this.pos.y+this.radius <= 0) {
            this.pos.y = bounds[1];
        }
    }

    draw(col) {
        noStroke();
        fill(col);
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }

    drawLines(other_ball, col) {
        let d = dist(this.pos.x, this.pos.y, other_ball.pos.x, other_ball.pos.y);
        if(d < maxDistancePx) {
            let k = constrain(d, colAtMaxpx, maxDistancePx);
            let alpha = map(k, maxDistancePx, colAtMaxpx, 0, col[3]);
            stroke(col[0], col[1], col[2], alpha);
            strokeWeight(stweight);
            line(this.pos.x, this.pos.y, other_ball.pos.x, other_ball.pos.y);
        }
    }
}

const balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    maxDistancePx = (width+height) / 12;
    colAtMaxpx = maxDistancePx / 3;

    for(let i = 0; i < num_balls; i++) {
        balls.push(new ball(createVector(random(0, width), random(0, height)), p5.Vector.random2D(), random(minSpeed, maxSpeed), random(ballRadius[0], ballRadius[1])))
    }
}

function draw() {
    background(bg);

    for(let i = 0; i < num_balls; i++) {
        ball1 = balls[i];
        for(let j = 0; j < num_balls; j++) {
            if(j != i) {
                ball2 = balls[j];
                ball2.drawLines(ball1, ballColor);
            }
        }
    }

    for(let i = 0; i < num_balls; i++) {
        balls[i].draw(ballColor)
    }

    for(let i = 0; i < num_balls; i++) {
        balls[i].update([width, height], deltaTime/100)
    }
    // console.log(frameRate())
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    maxDistancePx = (width+height) / 12;
    colAtMaxpx = maxDistancePx / 3;
}
