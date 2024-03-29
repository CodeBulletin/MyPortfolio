import { Data, Skills, Projects } from "./data.js";

function calcAge(dateString) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
}

function aboutme() {
    return (
        Data["aboutme-top"] + " " + Data["aboutme-bottom"] + "<br><br>\n<span>I like to do: </span>" + 
        Data.Skills.join(", ") + "<br>"
    );
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}  

function setskills() {
    var html = "";
    var i = 0;
    var colors = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6']
    for (const [key, value] of Object.entries(Skills)) {
        html += `
        <div class='skill-div fade fade-from-right-4'>
            <div class='skill-card ${colors[getRandomInt(colors.length)]}'>
                <a href = '${value[1]}' style='text-decoration: none;'>
                    <div class='bar'>
                    </div>
                    <img class='logo' src='${value[0]}' alt='${key}'/>
                    <h1 class='skill'>
                        ${key}
                    </h1>
                </a>
            </div>
        </div>`;
        i += 1;
    }

    document.getElementById("skills-div").innerHTML = html;
}

function makeCard(img_src1, img_src2, head, paragraph, view, download, code) {
    let viewelement = `<a href="${view}">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width=1rem height=1rem viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
            </svg>
            <span>View</span>
        </div>
    </a>`

    let downloadelement = `<a href="${download}">
        <div>
            <svg height=1rem width=1rem viewbox="0 0 48 48">
                <path d="M11 40q-1.2 0-2.1-.9Q8 38.2 8 37v-7.15h3V37h26v-7.15h3V37q0 1.2-.9 2.1-.9.9-2.1.9Zm13-7.65-9.65-9.65 2.15-2.15 6 6V8h3v18.55l6-6 2.15 2.15Z"/>
            </svg>
            <span>Download</span>
        </div>
    </a>`

    let code_element = `<a href="${code}">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
            <span>Code</span>
        </div>
    </a>`

    return `<div class="card fade">
        <img src="${img_src1}" alt="project-image" class="img"/>
        <img src="${img_src2}" alt="project-image" class="img"/>
        <div class="project-details">
            <h2>${head}</h2>
            <div class="details">
                <p>${paragraph}</p>
                <div class="links">` +
                    (view != null ? viewelement : '') +
                    (download != null ? downloadelement : '')+
                    (code != null ? code_element: '')+
                `</div>
            </div>
        </div>
    </div>`
}

export function load_projects(num) {
    if(num == -1) num = Projects.length;
    const a = document.getElementById('projects-display');
    let elements = '';
    for(var i = 0; i < num; i++) {
        elements += makeCard(Projects[i].img1, Projects[i].img2, Projects[i].title, Projects[i].details, Projects[i].view, Projects[i].download, Projects[i].code);
    }
    a.innerHTML = elements + a.innerHTML;
}

export function setdata() {
    document.getElementById("age").innerHTML += calcAge(Data.DOB);
    document.getElementById("email").innerHTML += Data.Email;
    document.getElementById("college").innerHTML += Data.College;
    document.getElementById("place").innerHTML += Data.Address;

    document.getElementById("aboutme").innerHTML = aboutme();

    document.getElementById("copyrightyear").innerHTML = (new Date().getFullYear()).toString()

    setskills();
    load_projects(5);
}

