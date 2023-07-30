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
const KERAS = require('../assets/svg/Keras.svg')
const Numpy = require('../assets/svg/numpy.svg')
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
const Redux = require('../assets/svg/redux.svg')
const node = require('../assets/svg/nodejs.svg')
const express = require('../assets/svg/expressjs.svg')
const MongoDB = require('../assets/svg/mongodb.svg')
const Django = require('../assets/svg/django.svg')
const Vulkan = require('../assets/svg/Vulkan.svg')
const Markdown = require('../assets/svg/Markdown.svg')
const Bash = require('../assets/svg/bash.svg')
const Fortran = require('../assets/svg/Fortran.svg')
const Typescript = require('../assets/svg/typescript.svg')
const Redis = require('../assets/svg/redis.svg')
const Julia = require('../assets/svg/julia.svg')

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
    "Julia": [Julia, 'https://julialang.org/'],
}

const Projects = [
    {
        title: "Snake AI",
        img1: require("../assets/png/projects/SnakeAI-S.png"),
        img2: require("../assets/png/projects/SnakeAI-l.png"),
        details: "Snake game solver made using c++ and sfml<br> slover types: random, bfs, dfs, A*, player, hamiltonian",
        code: "https://github.com/CodeBulletin/AI-Snake",
        view: null,
        download: "https://github.com/CodeBulletin/AI-Snake/releases/download/v1.0.0/Release.zip"
    }, {
        title: "MNCA Simulator",
        img1: require("../assets/png/projects/MNCA-S.png"),
        img2: require("../assets/png/projects/MNCA-l.png"),
        details: "Multi neighbour cellular automaton simulator accelerated using shaders <br> Created using: C++, SFML, GLSL",
        code: "https://github.com/CodeBulletin/Multi-Neighbourhood-CA",
        view: null,
        download: "https://github.com/CodeBulletin/Multi-Neighbourhood-CA/releases/download/Main/MNCA.zip"
    }, {
        title: "Maze.EXE",
        img1: require("../assets/png/projects/Maze-S.png"),
        img2: require("../assets/png/projects/Maze-l.png"),
        details: "Maze Generation/Solving/Game Visualization <br> created using: SFML, C++",
        code: "https://github.com/CodeBulletin/Maze.Exe",
        view: "https://www.youtube.com/watch?v=n_ZV4yC-eT4&t=173s",
        download: 'https://github.com/CodeBulletin/Maze.Exe/releases/download/Maze.exe/Release.zip'
    }, {
        title: "Electrostatic Simulator",
        img1: require("../assets/png/projects/ES-S.png"),
        img2: require("../assets/png/projects/ES-l.png"),
        details: "Electro Static/Dynamic/voltage/electric field simulator accelerated using shaders<br> created using: SFML, C++, GLSL",
        code: "https://github.com/CodeBulletin/Electrostatic-Simulation",
        view: null,
        download: "https://github.com/CodeBulletin/Electrostatic-Simulation/releases/download/v1.0.0/Release.zip"
    }, {
        title: "Lissajous Curve Simulator",
        img1: require("../assets/png/projects/LCURVE-S.png"),
        img2: require("../assets/png/projects/LCURVE-l.png"),
        details: "Lissajous Curve Simulator <br> created using: SFML, C++",
        code: "https://github.com/CodeBulletin/Lissajous-Curves",
        view: null,
        download: "https://github.com/CodeBulletin/Lissajous-Curves/releases/download/v1/Release.zip"
    }, {
        title: "Wave Simulator",
        img1: require("../assets/png/projects/SoundWave-S.png"),
        img2: require("../assets/png/projects/SoundWave-l.png"),
        details: "Wave simulator And interference pattern generator accelerated using shaders<br> created using: SFML, C++, GLSL",
        code: "https://github.com/CodeBulletin/Sound-Wave-Simulation",
        view: null,
        download: null
    }, {
        title: "Tic Tac Toe AI",
        img1: require("../assets/png/projects/TicTacToe-S.png"),
        img2: require("../assets/png/projects/TicTacToe-L.png"),
        details: "Tic Tac Toe Min Max AI <br> created using: SFML, C++",
        code: "https://github.com/CodeBulletin/Tic-Tac-Toe-AI",
        view: null,
        download: 'https://github.com/CodeBulletin/Tic-Tac-Toe-AI/releases/download/v1.0.0/Release.zip'
    }, {
        title: "Cellular Automata 1D",
        img1: require("../assets/png/projects/CA1D-S.png"),
        img2: require("../assets/png/projects/CA1D-l.png"),
        details: "Cellular Automata 1D Simulation <br> created using: SFML, C++",
        code: "https://github.com/CodeBulletin/CellularAutomata/tree/master",
        view: null,
        download: "https://github.com/CodeBulletin/CellularAutomata/releases/download/v1.0.0/Release.zip"
    }, {
        title: "Game Of Life",
        img1: require("../assets/png/projects/GOL.png"),
        img2: require("../assets/png/projects/GOL.png"),
        details: "Game Of Life Simulation accelerated using shaders<br> created using: SFML, C++, GLSL",
        code: "https://github.com/CodeBulletin/CellularAutomata2D",
        view: null,
        download: "https://github.com/CodeBulletin/CellularAutomata2D/releases/download/v1/Release.zip"
    }, {
        title: "Mandelbrot Visualization",
        img1: require("../assets/png/projects/MB-S.png"),
        img2: require("../assets/png/projects/MB-l.png"),
        details: "Mandelbrot Visualization accelerated using shaders<br> created using: SFML, C++, GLSL",
        code: "https://github.com/CodeBulletin/Mandelbrot-GPU",
        view: null,
        download: "https://github.com/CodeBulletin/Mandelbrot-GPU/releases/download/v1/Release.zip"
    },  {
        title: "Ascii Video Player",
        img1: require("../assets/png/projects/Ascii-S.png"),
        img2: require("../assets/png/projects/Ascii-l.png"),
        details: "Ascii Video Player that converts video to ascii art style in real time<br> created using: OpenCV, SFML Aduio, C++",
        code: "https://github.com/CodeBulletin/OpenCV_VideoToAscii",
        view: null,
        download: "https://github.com/CodeBulletin/OpenCV_VideoToAscii/releases/download/v1.1/release.zip"
    }, {
        title: "Covid Analyzer",
        img1: require("../assets/png/projects/Covid.png"),
        img2: require("../assets/png/projects/Covid.png"),
        details: "Covid Analyzer that analyzes covid data and displays it in a graph<br> created using: Python, Scikit-learn, plotly",
        code: "https://github.com/CodeBulletin/CovidAnalyzer",
        view: null,
        download: null
    }, {
        title: "Zero Player Pong",
        img1: require("../assets/png/projects/PingPong.png"),
        img2: require("../assets/png/projects/PingPong.png"),
        details: "Zero Player Pong Game that uses genetic algorithm to train the AI<br> created using: Processing",
        code: "https://github.com/CodeBulletin/PingPongAI",
        view: null,
        download: null
    }, {
        title: "Zero Player Pool",
        img1: require("../assets/png/projects/Pool.png"),
        img2: require("../assets/png/projects/Pool.png"),
        details: "Zero Player Pool Game that uses genetic algorithm to train the AI<br> created using: Processing",
        code: "https://github.com/CodeBulletin/PingPongAI",
        view: null,
        download: null
    }, {
        title: "Evolution Simulator",
        img1: require("../assets/png/projects/Evo.png"),
        img2: require("../assets/png/projects/Evo.png"),
        details: "Evolution Simulator that uses genetic algorithm to train the AI<br> created using: Processing",
        code: "https://github.com/CodeBulletin/Evolutnary-Steering",
        view: null,
        download: null
    }, {
        title: "Smart Rockets",
        img1: require("../assets/png/projects/SR.png"),
        img2: require("../assets/png/projects/SR.png"),
        details: "Smart Rockets that uses genetic algorithm to train the AI<br> created using: Processing",
        code: "https://github.com/CodeBulletin/Smart_rocket",
        view: null,
        download: null
    }, {
        title: "Fractals",
        img1: require("../assets/png/projects/Frac1.png"),
        img2: require("../assets/png/projects/Frac2.png"),
        details: "Fractals Visualization<br> created using: Processing",
        code: "https://github.com/CodeBulletin/Fractals",
        view: null,
        download: null
    }, {
        title: "Circular Polarization Simulation",
        img1: require("../assets/png/projects/CP.png"),
        img2: require("../assets/png/projects/CP.png"),
        details: "Circular Polarization Simulation<br> created using: Processing",
        code: "https://github.com/CodeBulletin/Polarization",
        view: null,
        download: null
    }, {
        title: "Super Shapes 3D Visualization",
        img1: require("../assets/png/projects/SH3D1.png"),
        img2: require("../assets/png/projects/SH3D2.png"),
        details: "Super Shapes 3D Visualization That allowes to Create and save the shapes<br> created using: Processing",
        code: "https://github.com/CodeBulletin/SuperShape3D",
        view: null,
        download: "https://github.com/CodeBulletin/SuperShape3D/releases/download/final/SuperShape3d.tar.gz"
    }, {
        title: "GET MAN",
        img1: require("../assets/png/projects/GETMAN.png"),
        img2: require("../assets/png/projects/GETMAN.png"),
        details: "A simple https request manager<br> created using: ReactJS, Typescript",
        code: "https://github.com/CodeBulletin/GETMAN",
        view: "https://codebulletin.github.io/GETMAN/",
        download: null
    }, {
        title: "Book Mania",
        img1: require("../assets/png/projects/BookMania.png"),
        img2: require("../assets/png/projects/BookMania.png"),
        details: "A simple book store<br> created using: PHP, MySQL, HTML, CSS, JS",
        code: "https://github.com/CodeBulletin/Online-Book-Store",
        view: "http://bookmaniapro.000webhostapp.com/PHP/Main/HomePage.php",
        download: null
    }, {
        title: "Voice Wave",
        img1: require("../assets/png/projects/VoiceWave.png"),
        img2: require("../assets/png/projects/VoiceWave.png"),
        details: "A Speech to Text Deep Learning Model <br> created using: Python, Tensorflow, FastAPI",
        code: "https://github.com/CodeBulletin/VoiceWave",
        view: null,
        download: null
    }, {
        title: "My Portfolio",
        img1: require("../assets/png/projects/Portfolio.png"),
        img2: require("../assets/png/projects/Portfolio.png"),
        details: "My Portfolio<br> created using: HTML, CSS, JS, Webpack",
        code: "https://github.com/CodeBulletin/MyPortfolio",
        view: "https://codebulletin.github.io/MyPortfolio/",
        download: null
    }, {
        title: "My Resume",
        img1: require("../assets/png/projects/Resume.png"),
        img2: require("../assets/png/projects/Resume.png"),
        details: "My Resume<br> created using: Hugo",
        code: "https://github.com/CodeBulletin/Resume",
        view: "https://codebulletin.github.io/Resume/",
        download: null
    }
]

const sections = Array.from(document.getElementsByTagName('section'));
const nav_links = Array.from(document.getElementsByClassName('nav-link'));
const body = document.getElementById('body');
const checkbox = document.getElementById('dark_mode_check_box');
const navbar = document.getElementById('Navbar');
const home_gif_dark = document.getElementById('home_gif1');
const home_gif_light = document.getElementById('home_gif2');
const homep_dark = document.getElementById('homep_dark');
const homep_light = document.getElementById('homep_light');
const PAGE = document.getElementById('html');
const resume_buttons = document.getElementsByClassName('Resume');

var nav_height;

function set_nav_height(height) {
    nav_height = height;
}

function get_nav_height() {
    return nav_height;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

const resume = require("../assets/pdf/Resume.pdf")


export {Data, Skills, sections, nav_links, body, checkbox, navbar, home_gif_dark, home_gif_light, homep_dark, homep_light, PAGE, Projects, resume_buttons, resume, set_nav_height, get_nav_height, sleep}