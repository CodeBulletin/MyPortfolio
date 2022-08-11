import { get_nav_height } from "./data";

export function Observe() {
    const objects = Array.from(document.getElementsByClassName('fade')).concat(Array.from(document.getElementsByClassName('fade-x')))

    const observer = new IntersectionObserver(entries => {
        entries.forEach( 
            entry => {
                entry.target.classList.toggle('rm-fade', entry.isIntersecting);
                if (entry.isIntersecting && !entry.target.classList.contains('fade-x')) {
                    observer.unobserve(entry.target)
                }
            }
        )
    },
    {
        threshold: 0.0,
        rootMargin: (-get_nav_height()).toString() + "px 0px 0px 0px"
    })

    objects.forEach(
        object => {
            observer.observe(object);
        }
    )
}