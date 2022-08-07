const Data = {
    "DOB": "july 04 2001",
    "Email": "codebulletin@gmail.com",
    "Address": "New Delhi, India",
    "College": "Deshbandhu College",
    "Specialization": ["Full-Stack Development", "Machine Learning", "Data Science", "Deep Learning", "Software Devolpment"],
    "aboutme-top": "I am a third year BSc student in Delhi University.",
    "aboutme-bottom": "I have a youtube channel named Code Bulletin.",
    "Skills": ["Full Stack Web Development", "Machine Learning", "Deep Learning", "Software Devlopment"],
    "Languages": ["C", "C++", "Python", "CSS", "SASS", "HTML5", "Javascript", "PHP", "Java", "Processing", "Markdown", "Shellscript", "Rust", "R", "Julia", "Mathematica", "Maxima", "Typescript", "Fortran", "C#"],
    "APIs": ["React", "React Native", "Redux", "Nodejs", "Express", "Tailwind", "Bootstrap", "P5", "SQL", "MongoDB", "Redis", "django", "GIT", "Tensorflow", "Keras", "Scikit", "Numpy", "Matplotlib", "Pandas", "SFML", "OpenGL", "Vulkan", "PyGame"]
}

const Skills = {
    "C++": "Expert",
    "Python": "Expert",
    "SFML": "Expert",
    "Processing": "Expert",
    "C": "Advance",
    "HTML": "Advance",
    "CSS": "Advance",
    "PHP": "Advance",
    "SASS": "Advance",
    "Tensorflow": "Advance",
    "Keras": "Advance",
    "Numpy": "Advance",
    "Matplotlib": "Advance",
    "Pandas": "Advance",
    "Javascript": "Advance",
    "SQL": "Advance",
    "SQLite": "Advance",
    "GIT": "Advance",
    "OpenGL": "Advance",
    "P5.js": "Advance",
    "C#": "Intermediate",
    "Java": "Intermediate",
    "Rust": "Intermediate",
    "Scikit": "Intermediate",
    "Tailwind": "Intermediate",
    "Bootstrap": "Intermediate",
    "React": "Intermediate",
    "React Native": "Intermediate",
    "Redux": "Intermediate",
    "Nodejs": "Intermediate",
    "Express": "Intermediate",
    "MongoDB": "Intermediate",
    "django": "Intermediate",
    "Vulkan": "Intermediate",
    "PyGame": "Intermediate",
    "Markdown": "Intermediate",
    "Shellscript": "Intermediate",
    "Fortran": "Beginner",
    "Typescript": "Beginner",
    "Redis": "Beginner",
    "R": "Beginner",
    "Julia": "Beginner",
}

const sections = Array.from(document.getElementsByTagName('section'));
const nav_links = Array.from(document.getElementsByClassName('nav-link'));
const body = document.getElementById('body');
const checkbox = document.getElementById('dark_mode_check_box');
const navbar = document.getElementById('Navbar');
const home_gif = document.getElementById('home_gif');

const light_particles = "./lib/p5/sketch.html?bg=F7F7F7FF&particles=50&col=0000007b";
const dark_particles = "./lib/p5/sketch.html?bg=111B21FF&particles=50&col=A0A0FF7b";

const gif_light = "./data/gifs/coding.gif";
const gif_dark = "./data/gifs/dev_animado.gif";

var nav_height;

function set_nav_height(height) {
    nav_height = height;
}

function get_nav_height() {
    return nav_height;
}

export {Data, Skills, sections, nav_links, body, checkbox, navbar, home_gif, gif_dark, gif_light, set_nav_height, get_nav_height}