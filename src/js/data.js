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

const Cpp = require('../assets/svg/c++.svg')
const Python = require('../assets/svg/python.svg')
const SFML = require('../assets/svg/SFML.svg')
const Processing = require('../assets/svg/Processing.svg')
const C = require('../assets/svg/c-programming.svg')
const HTML = require('../assets/svg/html.svg')
const CSS = require('../assets/svg/css.svg')
const PHP = require('../assets/svg/php.svg')
const SASS = require('../assets/svg/sass.svg')
const Tensorflow = require('../assets/svg/Tensorflow.svg')
const KERAS = require('../assets/svg/keras.svg')
const Numpy = require('../assets/svg/Numpy.svg')
const Matplotlib = require('../assets/svg/Matplotlib.svg')
const pandas = require('../assets/svg/pandas.svg')
const js = require('../assets/svg/js.svg')
const MySql = require('../assets/svg/mysql.svg')
const SQLite = require('../assets/svg/Sqlite.svg')
const GIT = require('../assets/svg/GIT.svg')
const OpenGL = require('../assets/svg/OpenGL.svg')
const P5 = require('../assets/svg/P5.svg')
const CSharp = require('../assets/svg/c-sharp.svg')
const java = require('../assets/svg/java.svg')
const rust = require('../assets/svg/rust.svg')
const Scikit = require('../assets/svg/Scikit.svg')
const Tailwind = require('../assets/svg/tailwindcss.svg')
const Bootstrap = require('../assets/svg/bootstrap.svg')
const React = require('../assets/svg/react.svg')
const ReactNative = require('../assets/svg/react-native.svg')
const Redux = require('../assets/svg/redux.svg')
const node = require('../assets/svg/nodejs.svg')
const express = require('../assets/svg/expressjs.svg')
const MongoDB = require('../assets/svg/MongoDB.svg')
const Django = require('../assets/svg/Django.svg')
const Vulkan = require('../assets/svg/Vulkan.svg')
const Markdown = require('../assets/svg/Markdown.svg')
const Bash = require('../assets/svg/Bash.svg')
const Fortran = require('../assets/svg/Fortran.svg')
const Typescript = require('../assets/svg/Typescript.svg')
const Redis = require('../assets/svg/Redis.svg')
const R = require('../assets/svg/R.svg')
const Julia = require('../assets/svg/Julia.svg')

const Skills = {
    "C++": [Cpp, 'https://en.wikipedia.org/wiki/C%2B%2B'],
    "Python": [Python, 'https://www.python.org/'],
    "SFML": [SFML, 'https://www.sfml-dev.org/'],
    "Processing": [Processing, 'https://processing.org/'],
    "C": [C, 'https://en.wikipedia.org/wiki/C_(programming_language)'],
    "HTML": [HTML, 'https://en.wikipedia.org/wiki/HTML'],
    "CSS": [CSS, 'https://en.wikipedia.org/wiki/CSS'],
    "PHP": [PHP, 'https://www.php.net/'],
    "SASS": [SASS, 'https://sass-lang.com/'],
    "Tensorflow": [Tensorflow, 'https://www.tensorflow.org/'],
    "Keras": [KERAS, 'https://keras.io/'],
    "Numpy": [Numpy, 'https://numpy.org/'],
    "Matplotlib": [Matplotlib, 'https://matplotlib.org/'],
    "Pandas": [pandas, 'https://pandas.pydata.org/'],
    "Javascript": [js, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
    "MySQL": [MySql, 'https://www.mysql.com/'],
    "SQLite": [SQLite, 'https://www.sqlite.org/index.html'],
    "GIT": [GIT, 'https://git-scm.com/'],
    "OpenGL": [OpenGL, 'https://www.opengl.org/'],
    "P5.js": [P5, 'https://p5js.org/'],
    "C#": [CSharp, 'https://docs.microsoft.com/en-us/dotnet/csharp/'],
    "Java": [java, 'https://www.java.com/en/'],
    "Rust": [rust, 'https://www.rust-lang.org/'],
    "Scikit": [Scikit, 'https://scikit-learn.org/stable/'],
    "Tailwind": [Tailwind, 'https://tailwindcss.com/'],
    "Bootstrap": [Bootstrap, 'https://getbootstrap.com/'],
    "React": [React, 'https://reactjs.org/'],
    "React Native": [ReactNative, 'https://reactnative.dev/'],
    "Redux": [Redux, 'https://redux.js.org/'],
    "Nodejs": [node, 'https://nodejs.org/en/'],
    "Express": [express, 'https://expressjs.com/'],
    "MongoDB": [MongoDB, 'https://www.mongodb.com/'],
    "Django": [Django, 'https://www.djangoproject.com/'],
    "Vulkan": [Vulkan, 'https://www.vulkan.org/'],
    "PyGame": [require('../assets/png/pygame.png'), 'https://www.pygame.org/wiki/about'],
    "Markdown": [Markdown, 'https://en.wikipedia.org/wiki/Markdown'],
    "Bash": [Bash, 'https://www.gnu.org/software/bash/'],
    "Fortran": [Fortran, 'https://fortran-lang.org/'],
    "Typescript": [Typescript, 'https://www.typescriptlang.org/'],
    "Redis": [Redis, 'https://redis.io/'],
    "R": [R, 'https://www.r-project.org/about.html'],
    "Julia": [Julia, 'https://julialang.org/'],
}

const sections = Array.from(document.getElementsByTagName('section'));
const nav_links = Array.from(document.getElementsByClassName('nav-link'));
const body = document.getElementById('body');
const checkbox = document.getElementById('dark_mode_check_box');
const navbar = document.getElementById('Navbar');
const home_gif_dark = document.getElementById('home_gif1');
const home_gif_light = document.getElementById('home_gif2');

var nav_height;

function set_nav_height(height) {
    nav_height = height;
}

function get_nav_height() {
    return nav_height;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

export {Data, Skills, sections, nav_links, body, checkbox, navbar, home_gif_dark, home_gif_light, set_nav_height, get_nav_height, sleep}