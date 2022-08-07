import { get_nav_height } from "./data";

export function Observe() {
    const objects = Array.from(document.getElementsByClassName('fade'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach( 
            entry => {
                entry.target.classList.toggle('rm-fade', entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target)
                }
            }
        )
    },
    {
        threshold: 0.1,
        rootMargin: (-get_nav_height()).toString() + "px 0px 0px 0px"
    })

    objects.forEach(
        object => {
            observer.observe(object);
        }
    )
}