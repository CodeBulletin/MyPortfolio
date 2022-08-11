import styles from '../sass/index.scss'

import { setdata } from "./load";
import { resize_sections } from "./resize"
import { scrollfn } from "./scroll"
import { body, gif_light, gif_dark, checkbox, home_gif_dark, home_gif_light } from "./data"
import { animation, sleep } from "./animation"
import { Observe } from "./observer";

document.getElementById('nav-setting-button').onclick = () => {
    var element = document.getElementById('settings');
    var element2 = document.getElementById('AV2');

    element.classList.toggle('open');
    element2.classList.toggle('active-icon', element.classList.contains('open'));
}

document.getElementById('dark_mode_check_box').onchange = () => {
    if (body.classList.contains('dark')) { 
        body.classList.remove('dark');
        localStorage.setItem('dark_mode', "no");
        home_gif_light.style.display = 'block';
        home_gif_dark.style.display = 'none';
    }
    else {
        body.classList.add('dark');
        localStorage.setItem('dark_mode', "yes");
        home_gif_dark.style.display = 'block';
        home_gif_light.style.display = 'none';
    }
}

document.getElementById('nav-sm-buton').onclick = () => {
    var button = document.getElementById('nav-sm-buton');
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'))

    var menu = document.getElementById('nav-items');
    menu.classList.toggle('nav-menu-open', button.classList.contains('opened'));
}

document.getElementById('sk-button').onclick = () => {
    document.getElementById('sk-svg').classList.toggle("active");
    document.getElementById('skills-div').classList.toggle("active");
    document.getElementById('sk-name').innerHTML = document.getElementById('sk-svg').classList.contains("active") ? "Show Less" : "Show All"
}

async function on_load() {
    if(localStorage.getItem('dark_mode') === null) {
        localStorage.setItem('dark_mode', "yes");
    }
    if (localStorage.getItem('dark_mode') === "yes") {
        checkbox.checked = true;
        home_gif_light.style.display = 'none';
    } else {
        body.classList.remove('dark');
        home_gif_dark.style.display = 'none';
    }

    setdata();
    resize_sections();
    scrollfn();
    animation();
    await sleep(500)
    Observe();
}

window.onload = on_load;
window.onresize = resize_sections;
window.onscroll = scrollfn;

import { p5sketch } from "./particles" 