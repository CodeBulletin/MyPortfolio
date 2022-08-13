export function accordian() {
    const checkboxes = Array.from(document.getElementsByClassName("accordian-checkbox"));

    checkboxes.forEach(checkbox => {
        const body = checkbox.parentElement.lastElementChild;
        checkbox.addEventListener("change", event => {
            if (checkbox.checked) {
                body.style.maxHeight = body.scrollHeight.toString() + "px";
            } else {
                body.style.maxHeight = "0px";
            }
        });
        body.style.maxHeight = "0px";
        checkbox.checked = false
    });

    const accordians = Array.from(document.getElementsByClassName('accordian-list'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach( 
            entry => {
                const items = Array.from(entry.target.querySelectorAll(".accordian-item"))
                items.forEach(item => {
                    item.classList.toggle("accordian-animate", entry.isIntersecting)
                })
            }
        )
    });
    accordians.forEach(accordian => {
        observer.observe(accordian)
    })
}

accordian();