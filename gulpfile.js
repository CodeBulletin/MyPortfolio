const { src, dest, watch, series, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require("gulp-purgecss");
const ts = require("gulp-typescript");
const tsConfig = ts.createProject("tsconfig.json")

function buildStyles() {
    return src('src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('lib/css'))
}

function fDevStyles() {
    return src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
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

function buildScript() {
    return tsConfig.src().pipe(tsConfig()).js.pipe(dest('lib/js'))
}

function watchScript() {
    watch(['src/ts/*.ts'], buildScript)
}

const ts_build = series(buildScript, watchScript);

exports.build = parallel(series(buildStyles, watchStyle), ts_build)
exports.fdev = parallel(series(fDevStyles, watchfStyle), ts_build)
exports.dev = parallel(series(DevStyles, watchfDStyle), ts_build)