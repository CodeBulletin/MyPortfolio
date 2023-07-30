import p5 from "p5";

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

    draw(col, sketch) {
        sketch.noStroke();
        sketch.fill(col);
        sketch.circle(this.pos.x, this.pos.y, this.radius * 2);
    }

    drawLines(other_ball, col, sketch) {
        let d = sketch.dist(this.pos.x, this.pos.y, other_ball.pos.x, other_ball.pos.y);
        if(d < maxDistancePx) {
            let k = sketch.constrain(d, colAtMaxpx, maxDistancePx);
            let alpha = sketch.map(k, maxDistancePx, colAtMaxpx, 0, sketch.alpha(col));
            sketch.stroke(sketch.red(col), sketch.green(col), sketch.blue(col), alpha);
            sketch.strokeWeight(stweight);
            sketch.line(this.pos.x, this.pos.y, other_ball.pos.x, other_ball.pos.y);
        }
    }

    setpos(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }
}

const balls = [];

var num_balls = 50;

var maxDistancePx = 250;
var colAtMaxpx = 50;

var ballColor;
var ballColor_dark;
var bg;
var bg_dark;
var transition = 100;

var enabled = true;

const ballRadius = [2, 6];
const minSpeed = 2;
const maxSpeed = 5;
const stweight = 1;

var bgcol;
var ballCol;

const doc = document.getElementById("particles-sandbox");

var mode = localStorage.getItem('dark_mode');

const sketch = (s) => {
    
    s.setup = () => {
        s.createCanvas(doc.clientWidth, doc.clientHeight);
        s.pixelDensity(1);
    
        maxDistancePx = (s.width+s.height) / 12;
        colAtMaxpx = maxDistancePx / 3;
    
        for(let i = 0; i < num_balls; i++) {
            balls.push(
                new ball(
                    s.createVector(
                        s.random(0, s.width),
                        s.random(0, s.height)),
                    p5.Vector.random2D(),
                    s.random(minSpeed, maxSpeed),
                    s.random(ballRadius[0], ballRadius[1])))
        }

        ballColor = s.color(0, 0, 0, 123);
        ballColor_dark = s.color(160, 160, 255, 123);
        bg = s.color(247, 247, 247, 255);
        bg_dark = s.color(17, 27, 33, 255);
    }
    
    s.draw = () => {
        if (mode != localStorage.getItem('dark_mode')) {
            mode = localStorage.getItem('dark_mode');
            transition = 0;
        }
        if (transition <= 100) {
            if (mode === "no") {
                bgcol = s.lerpColor(bg_dark, bg, transition);
                ballCol = s.lerpColor(ballColor_dark, ballColor, transition);
            } else {
                bgcol = s.lerpColor(bg, bg_dark, transition);
                ballCol = s.lerpColor(ballColor, ballColor_dark, transition);
            }
            transition += 0.6 * s.deltaTime/100.0;
        }

        s.background(bgcol);

    
        for(let i = 0; i < num_balls; i++) {
            var ball1 = balls[i];
            for(let j = 0; j < num_balls; j++) {
                if(j != i) {
                    var ball2 = balls[j];
                    ball2.drawLines(ball1, ballCol, s);
                }
            }
        }
    
        for(let i = 0; i < num_balls; i++) {
            balls[i].draw(ballCol, s)
        }
    
        for(let i = 0; i < num_balls; i++) {
            balls[i].update([s.width, s.height])
        }
    }
    
    (new ResizeObserver(() => {
        s.resizeCanvas(doc.clientWidth, doc.clientHeight);
        maxDistancePx = (s.width+s.height) / 12;
        colAtMaxpx = maxDistancePx / 3;
    })).observe(doc);

    (new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            if (!enabled) {
                enabled = true;
                s.loop();
            }
        } else {
            if (enabled) {
                enabled = false;
                s.noLoop();
            }
        }
    })).observe(doc);
}

let p5sketch = new p5(sketch, doc)

export { p5sketch }