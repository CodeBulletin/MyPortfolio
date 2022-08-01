var sections = Array.from(document.getElementsByTagName('section'));
var nav_links = <HTMLLinkElement[]>Array.from(document.getElementsByClassName('nav-link'));
var body = <HTMLElement>document.getElementById('body');
var checkbox = <HTMLInputElement>document.getElementById('dark_mode_check_box');

window.onscroll = (e) => {
    var current: string = "";
  
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop ) {
            current = <string>section.getAttribute("id");
        }
    });
  
    nav_links.forEach((li) => {
        li.classList.remove("nav-link-active");
        if (li.href.includes(current)) {
            li.classList.add('nav-link-active');
        }
    });
};

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
    }
    else {
        body.classList.add('dark');
        localStorage.setItem('dark_mode', "yes");
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

function on_load() {
    if(localStorage.getItem('dark_mode') === null) {
        localStorage.setItem('dark_mode', "yes");
    }
    
    if (localStorage.getItem('dark_mode') === "yes") {
        body.classList.add('dark');
        checkbox.checked = true;
    }
}