const gulp = require('gulp');
const serve = require('browser-sync');


gulp.task('reload', () => {
    serve.reload();
    return Promise.resolve();
});

gulp.task('watch', () => {
    return gulp.watch(
        __dirname + '/**/*.js',
        gulp.series('reload')
    );
});

gulp.task('serve', () => {
    serve.init({
        server: {
            baseDir: './'
        }
    });

    gulp.task('watch')();
});