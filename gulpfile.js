const { src, dest, watch, series, parallel } = require('gulp')
const ts = require("gulp-typescript");
const tsConfig = ts.createProject("tsconfig.json")

function buildScript() {
    return tsConfig.src().pipe(tsConfig()).js.pipe(dest('lib/js'))
}

function watchScript() {
    watch(['/src/ts/**/*.ts'], buildScript)
}

exports.default = parallel(series(buildStyles, watchStyle), series(buildScript, watchScript))

//         .pipe(purgecss({ content: ['*.html'] }))
// 