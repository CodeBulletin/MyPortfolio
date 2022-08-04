function calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
}

function aboutme() {
    return (
        Data["aboutme-top"] + " " + Data["aboutme-bottom"] + "<br><br>\n<span>Skills: </span>" + 
        Data.Skills.join(", ") + "<br><br> <span>Languages: </span>" + 
        Data.Languages.join(", ") + "<br><br> <span>APIs/Library/DB: </span>" +
        Data.APIs.join(", ") + "<br>"
    );
}

function setdata() {
    document.getElementById("age").innerHTML += calcAge(Data.DOB);
    document.getElementById("email").innerHTML += Data.Email;
    document.getElementById("college").innerHTML += Data.College;
    document.getElementById("place").innerHTML += Data.Address;

    document.getElementById("aboutme").innerHTML = aboutme();
}

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

function animation() {

    tween();
    SpanLoad();
}

const light_particles = "./lib/p5/sketch.html?bg=F7F7F7FF&particles=50&col=0000007b";
const dark_particles = "./lib/p5/sketch.html?bg=101015FF&particles=50&col=A0A0FF7b";

const gif_light = "./data/gifs/coding.gif";
const gif_dark = "./data/gifs/dev_animado.gif";

var sections = Array.from(document.getElementsByTagName('section'));
var nav_links = Array.from(document.getElementsByClassName('nav-link'));
var body = document.getElementById('body');
var checkbox = document.getElementById('dark_mode_check_box');
var navbar = document.getElementById('Navbar');
var particles = document.getElementById('particles');
var home_gif = document.getElementById('home_gif');

var nav_height;


function calibratenav() {
    var height = window.innerHeight;
    nav_height = navbar.offsetHeight;

    var height_left = height - nav_height;
    var home = document.getElementById('home');
    home.style.minHeight = height_left.toString() + "px";

    var about = document.getElementById('about');
    about.style.minHeight = height_left.toString() + "px";
}

function scrollfn() {
    var current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - nav_height - 5 ) {
            current = section.getAttribute("id");
        }
    });
    
    nav_links.forEach((li) => {
        li.classList.remove("nav-link-active");
        if (li.href.includes(current) && current != null && current != '') {
            li.classList.add('nav-link-active');
        }
    });
};

window.onscroll = () => {
    scrollfn();
}

window.onresize = () => {
    calibratenav();
}

function menu_open(id, icon_id) {
    var element = document.getElementById(id);
    var element2 = document.getElementById(icon_id);
    if (element.classList.contains('open')) {
        element.classList.remove('open');
        element2.classList.remove('active-icon');
    }
    else {
        element.classList.add('open');
        element2.classList.add('active-icon');
    }
}

function toggle_darkmode() {
    if (body.classList.contains('dark')) { 
        body.classList.remove('dark');
        localStorage.setItem('dark_mode', "no");
        particles.src = light_particles;
        home_gif.src = gif_light;
    }
    else {
        body.classList.add('dark');
        localStorage.setItem('dark_mode', "yes");
        particles.src = dark_particles;
        home_gif.src = gif_dark;
    }
}

function nav_menu_click(button, id) {
    var element = document.getElementById(id);
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'))
    if (element.classList.contains('nav-menu-open')) { 
        element.classList.remove('nav-menu-open');
    }
    else {
        element.classList.add('nav-menu-open');
    }
}

async function on_load() {
    
    if(localStorage.getItem('dark_mode') === null) {
        localStorage.setItem('dark_mode', "yes");
    }
    
    if (localStorage.getItem('dark_mode') === "yes") {
        checkbox.checked = true;
    } else {
        body.classList.remove('dark');
        particles.src = light_particles;
        home_gif.src = gif_light;
    }
    
    setdata();
    calibratenav();
    scrollfn();
    animation();

    console.log(Data.GitLanguages)
}
