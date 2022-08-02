const light_particles = "./lib/p5/sketch.html?bg=F7F7F7FF&particles=50&col=0000007b";
const dark_particles = "./lib/p5/sketch.html?bg=101015FF&particles=50&col=A0A0FF7b";

const gif_light = "./data/gifs/coding.gif";
const gif_dark = "./data/gifs/dev_animado.gif";

var sections = Array.from(document.getElementsByTagName('section'));
var nav_links = <HTMLLinkElement[]>Array.from(document.getElementsByClassName('nav-link'));
var body = <HTMLElement>document.getElementById('body');
var checkbox = <HTMLInputElement>document.getElementById('dark_mode_check_box');
var navbar = <HTMLElement>document.getElementById('Navbar');
var particles = <HTMLIFrameElement>document.getElementById('particles');
var home_gif = <HTMLImageElement>document.getElementById('home_gif');

var nav_height;


function calibratenav() {
    var height = window.innerHeight;
    nav_height = <number>navbar.offsetHeight;

    var height_left = height - nav_height - 1;
    var home = <HTMLElement>document.getElementById('home');
    home.style.minHeight = height_left.toString() + "px";
}

function scrollfn() {
    var current: string = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - nav_height - 5 ) {
            current = <string>section.getAttribute("id");
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
    var element = <HTMLElement>document.getElementById(id);
    var element2 = <HTMLElement>document.getElementById(icon_id);
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
    var element = <HTMLElement>document.getElementById(id);
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
        body.classList.add('dark');
        checkbox.checked = true;
        particles.src = dark_particles;
        home_gif.src = gif_dark;
    } else {
        particles.src = light_particles;
        home_gif.src = gif_light;
    }

    calibratenav();
    scrollfn();
    SpanLoad();
}
