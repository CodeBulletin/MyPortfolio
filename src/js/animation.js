import { Data } from "./data";
import "snapsvg-cjs";

const span = document.getElementById('specialization');
const sleep = ms => new Promise(r => setTimeout(r, ms));
var specialization = Data.Specialization;
const pointer = "|"

async function SpanLoad() {
    await sleep(1000);

    var index = 0;
    while (true) {
        var current = specialization[index];

        for(var i = 0; i < current.length; i++) {
            span.innerHTML = current.slice(0, i+1) + pointer;
            await sleep(100);
        }

        await sleep(600);

        for(var i = current.length-1; i >= -1; i--) {
            span.innerHTML = current.slice(0, i+1) + pointer;
            await sleep(50);
        }

        await sleep(300);

        index += 1;
        if (index >= specialization.length) {
            index = 0;
        }
    }
}

function tween() {    
    var svg = document.getElementById("blob");
    var s = Snap(svg);
    var B1 = Snap.select('#blob1');
    var B2 = Snap.select('#blob2');
    var B3 = Snap.select('#blob3');
    var B4 = Snap.select('#blob4');

    var B1D = B1.node.getAttribute('d');
    var B2D = B2.node.getAttribute('d');
    var B3D = B3.node.getAttribute('d');
    var B4D = B4.node.getAttribute('d');

    const R1 = () => {
        var r = Math.random();
        if (r <= 1/3) {
            TB2D()
        } else if (r <= 2/3) {
            TB3D()
        } else {
            TB4D();
        }
    }

    const R2 = () => {
        var r = Math.random();
        if (r <= 1/3) {
            TB1D()
        } else if (r <= 2/3) {
            TB3D()
        } else {
            TB4D();
        }
    }

    const R3 = () => {
        var r = Math.random();
        if (r <= 1/3) {
            TB2D()
        } else if (r <= 2/3) {
            TB1D()
        } else {
            TB4D();
        }
    }

    const R4 = () => {
        var r = Math.random();
        if (r <= 1/3) {
            TB2D()
        } else if (r <= 2/3) {
            TB3D()
        } else {
            TB1D();
        }
    }

    var TB1D = function(){
        B1.animate({ d: B1D }, 2000, mina.linear, R1); 
    }

    var TB2D = function(){
        B1.animate({ d: B2D }, 2000, mina.linear, R2);  
    }

    var TB3D = function(){
        B1.animate({ d: B3D }, 2000, mina.linear, R3);  
    }

    var TB4D = function(){
        B1.animate({ d: B4D }, 2000, mina.linear, R4);  
    }

    TB2D();
}

export async function animation() {
    tween();
    SpanLoad();
}