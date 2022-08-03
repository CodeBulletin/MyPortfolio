const params = new URL(window.location.href).searchParams;

var ballColor = [0, 0, 0, 123];
var bg = [247, 247, 247, 255];
var num_balls = 75;

var maxDistancePx = 250;
var colAtMaxpx = 50;

const ballRadius = [2, 6];
const minSpeed = 2;
const maxSpeed = 8;
const stweight = 1;

class ball {
    constructor(pos, dir, speed, radius) {
        this.pos = pos;
        this.dir = dir;
        this.dir.mult(speed);
        this.radius = radius;
    }

    update(bounds, deltaTime) {
        this.pos.add(this.dir);
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

    setpos(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }
}

const balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);

    if(params.get('bg') != null) {
        let hex = params.get('bg');
        bg[0] = parseInt(hex.slice(0, 2), 16);
        bg[1] = parseInt(hex.slice(2, 4), 16);
        bg[2] = parseInt(hex.slice(4, 6), 16);
        bg[3] = parseInt(hex.slice(6, 8), 16);
    }
    if(params.get('col') != null) {
        let hex = params.get('col');
        ballColor[0] = parseInt(hex.slice(0, 2), 16);
        ballColor[1] = parseInt(hex.slice(2, 4), 16);
        ballColor[2] = parseInt(hex.slice(4, 6), 16);
        ballColor[3] = parseInt(hex.slice(6, 8), 16);
    }
    if(params.get('particles')) {
        num_balls = parseInt(params.get('particles'));
    }

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
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    maxDistancePx = (width+height) / 12;
    colAtMaxpx = maxDistancePx / 3;
}
