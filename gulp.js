const gulp=require('gulp');
const sass=require('gulp-sass');
const browsersync= require('browser-sync');

gulp.task('sass', () =>{
    return gulp
            .src(['src/scss/*.scss'])
            .pipe(sass())
            .pipe(gulp.dest('src/css/'))
            .pipe(browsersync.stream())
});



gulp.task('js', () =>{
    return gulp
            .src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/popper.min.js'  ])
            .pipe(gulp.dest('src/js/'))
            .pipe(browsersync.stream())
});


gulp.task('serve', ['sass'], () =>{
    browsersync.init({
        server:'./src'
    });
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch('src/*.html', 
    browserSync.reload()
    );
});

gulp.task('default', ['serve', 'js']);