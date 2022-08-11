import { Data, Skills } from "./data.js";

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

function setskills() {
    var html = "";
    var i = 0;
    for (const [key, value] of Object.entries(Skills)) {
        html += `<div class='skill-div fade fade-from-right-4'><div class='skill-card ${value}'><div class='bar'></div><h1 class='skill'>${key}</h1><h1 class='lvl'>${value}</h1></div></div>`;
        i += 1;
    }

    document.getElementById("skills-div").innerHTML = html;
}

export function setdata() {
    document.getElementById("age").innerHTML += calcAge(Data.DOB);
    document.getElementById("email").innerHTML += Data.Email;
    document.getElementById("college").innerHTML += Data.College;
    document.getElementById("place").innerHTML += Data.Address;

    document.getElementById("aboutme").innerHTML = aboutme();

    document.getElementById("copyrightyear").innerHTML = (new Date().getFullYear()).toString()

    setskills();
}

