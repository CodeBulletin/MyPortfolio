import {sections, nav_links, get_nav_height} from "./data"

export function scrollfn() {
    var current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - window.innerHeight / 2) {
            current = section.getAttribute("id");
        }
    });
    
    nav_links.forEach((li) => {
        li.classList.remove("nav-link-active");
        li.blur();
        if (li.href.includes(current) && current != null && current != '') {
            li.classList.add('nav-link-active');
        }
    });
};