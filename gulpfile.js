const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require("gulp-purgecss");

function buildStyles() {
    return src('src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(purgecss({ content: ['*.html'], safelist:['open', 'active-icon', 'nav-menu-open', 'opened', 'rm-fade'] }))
        .pipe(dest('lib/css'))
}

function fDevStyles() {
    return src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'], safelist:['open', 'active-icon', 'nav-menu-open', 'opened', 'rm-fade']  }))
        .pipe(dest('lib/css'))
}

function DevStyles() {
    return src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('lib/css'))
}

function watchStyle() {
    watch(['src/sass/**/*.scss'], buildStyles)  
}

function watchfStyle() {
    watch(['src/sass/**/*.scss'], fDevStyles)  
}

function watchfDStyle() {
    watch(['src/sass/**/*.scss'], DevStyles)  
}

exports.build = series(buildStyles, watchStyle)
exports.fdev = series(fDevStyles, watchfStyle)
exports.dev = series(DevStyles, watchfDStyle)