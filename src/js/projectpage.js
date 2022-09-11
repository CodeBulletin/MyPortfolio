import "../sass/projects.scss"

import {sleep, checkbox, body, set_nav_height, navbar, PAGE, homep_dark, homep_light} from './data.js'
import {load_projects} from './load'
import {Observe} from "./observer"


document.getElementById('dark_mode_check_box').onchange = () => {
    if (body.classList.contains('dark')) { 
        body.classList.remove('dark');
        localStorage.setItem('dark_mode', "no");
        document.getElementById("homep_dark").style.display = 'none';
        document.getElementById("homep_light").style.display = 'block';
    }
    else {
        body.classList.add('dark');
        localStorage.setItem('dark_mode', "yes");
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
        homep_light.style.display = "none";
    } else {
        homep_dark.style.display = "none";
        body.classList.remove('dark');
    }

    set_nav_height(navbar.offsetHeight);
    PAGE.style.scrollPaddingTop = (navbar.offsetHeight) + 'px';
    load_projects(-1);
    await sleep(3000);
    document.getElementById('loading-page').style.display = 'none';
    await sleep(100);
    Observe();
}

window.onload = on_load;

