var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    var height_left = height - nav_height - 1;
    var home = document.getElementById('home');
    home.style.minHeight = height_left.toString() + "px";
}
function scrollfn() {
    var current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - nav_height - 5) {
            current = section.getAttribute("id");
        }
    });
    nav_links.forEach((li) => {
        li.classList.remove("nav-link-active");
        if (li.href.includes(current) && current != null && current != '') {
            li.classList.add('nav-link-active');
        }
    });
}
;
window.onscroll = () => {
    scrollfn();
};
window.onresize = () => {
    calibratenav();
};
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
    button.setAttribute('aria-expanded', button.classList.contains('opened'));
    if (element.classList.contains('nav-menu-open')) {
        element.classList.remove('nav-menu-open');
    }
    else {
        element.classList.add('nav-menu-open');
    }
}
function on_load() {
    return __awaiter(this, void 0, void 0, function* () {
        if (localStorage.getItem('dark_mode') === null) {
            localStorage.setItem('dark_mode', "yes");
        }
        if (localStorage.getItem('dark_mode') === "yes") {
            body.classList.add('dark');
            checkbox.checked = true;
            particles.src = dark_particles;
            home_gif.src = gif_dark;
        }
        else {
            particles.src = light_particles;
            home_gif.src = gif_light;
        }
        calibratenav();
        scrollfn();
        SpanLoad();
    });
}
