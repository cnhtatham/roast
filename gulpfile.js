var gulp = require('gulp'),
    nano = require('gulp-cssnano'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if');
browserSync = require('browser-sync').create();

// gulp.task('hello', function() {
//     console.log('hello');
// });

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', nano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass', 'useref'], function () {
    gulp.watch('app/scss/style.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload)
});