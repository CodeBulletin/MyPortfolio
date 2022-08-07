const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function DevStyles() {
    return src('src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('dist/'))
}

function watchStyle() {
    watch(['src/sass/**/*.scss'], DevStyles)  
}

exports.dev = series(DevStyles, watchStyle)