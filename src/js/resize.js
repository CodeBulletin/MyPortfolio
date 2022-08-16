import { set_nav_height, get_nav_height, navbar } from "./data";

export function resize_sections() {
    var height = window.innerHeight;
    set_nav_height(navbar.offsetHeight);

    var height_left = height - get_nav_height();
    var home = document.getElementById('home');
    home.style.minHeight = height_left.toString() + "px";
    
    var about = document.getElementById('about');
    about.style.minHeight = height_left.toString() + "px";
}