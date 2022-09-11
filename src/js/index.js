import '../sass/index.scss'
import { accordian } from './accordian';

import { setdata } from "./load";
import { resize_sections } from "./resize"
import { scrollfn } from "./scroll"
import { body, checkbox, home_gif_dark, home_gif_light, homep_dark, homep_light, sleep, set_nav_height, navbar, PAGE, resume_buttons, resume } from "./data"
import { animation } from "./animation"
import { Observe } from "./observer";

document.getElementById('dark_mode_check_box').onchange = () => {
    if (body.classList.contains('dark')) { 
        body.classList.remove('dark');
        localStorage.setItem('dark_mode', "no");
        home_gif_light.style.display = 'block';
        home_gif_dark.style.display = 'none';
        document.getElementById("homep_dark").style.display = 'none';
        document.getElementById("homep_light").style.display = 'block';
    }
    else {
        body.classList.add('dark');
        localStorage.setItem('dark_mode', "yes");
        home_gif_dark.style.display = 'block';
        home_gif_light.style.display = 'none';
        document.getElementById("homep_dark").style.display = 'block';
        document.getElementById("homep_light").style.display = 'none';
    }
}

document.getElementById('nav-sm-buton').onclick = () => {
    var button = document.getElementById('nav-sm-buton');
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'))

    var menu = document.getElementById('nav-items');
    menu.classList.toggle('nav-menu-open', button.classList.contains('opened'));
}

async function on_load() {
    if(localStorage.getItem('dark_mode') === null) {
        localStorage.setItem('dark_mode', "yes");
    }
    if (localStorage.getItem('dark_mode') === "yes") {
        checkbox.checked = true;
        home_gif_light.style.display = 'none';
        homep_light.style.display = 'none';
    } else {
        body.classList.remove('dark');
        home_gif_dark.style.display = 'none';
        homep_dark.style.display = 'none';
    }
    
    set_nav_height(navbar.offsetHeight);
    PAGE.style.scrollPaddingTop = (navbar.offsetHeight) + 'px';
    setdata();
    accordian();
    resize_sections();
    scrollfn();

    Array.from(resume_buttons).forEach(element => {
        element.setAttribute("href", resume);
    });

    await sleep(3000);
    document.getElementById('loading-page').style.display="none";
    await sleep(100);
    Observe();
    animation();
}

window.onload = on_load;
window.onresize = resize_sections;
window.onscroll = scrollfn;

import "./particles";