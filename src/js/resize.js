import {get_nav_height} from "./data";

export function resize_sections() {
    var height = window.innerHeight;

    var height_left = height - get_nav_height();
    var home = document.getElementById('home');
    home.style.minHeight = height_left.toString() + "px";
}