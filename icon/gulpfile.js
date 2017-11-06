var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.tesk('ysjs', function () {
    gulp.src("./*.js").pipe(uglify()).pipe(gulp.dest('js'));
})


var minift = require('gulp-minify-css');
gulp.tesk('ysjs', function () {
    gulp.src("./*.css").pipe(minift()).pipe(gulp.dest('css'));
})

var htmlmin = require('gulp-htmlmin');
gulp.tesk('yshtml', function () {
    gulp.src("./*index.html").pipe(htmlmin({
        removeComments:true,
        collapseWhitespace:true,
        minifyJs:true,
        minifyCss:true
    })).pipe(gulp.dest('./html/'));
})

gulp.tesk('default',['ysjs','ysjs','yshtml']);