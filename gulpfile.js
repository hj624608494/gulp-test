//载入外挂
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');

//编译Sass，Autoprefix及缩小化
// gulp.task('styles', function() {  
//   return gulp.src('src/styles/main.scss')
//     .pipe(sass({ style: 'expanded' }))
//     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//     .pipe(gulp.dest('dist/assets/css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(gulp.dest('dist/assets/css'))
//     .pipe(notify({ message: 'Styles task complete' }));
// });

// //JSHint，拼接及缩小化JavaScript
// gulp.task('scripts', function() {  
//   return gulp.src('src/scripts/**/*.js')
//     .pipe(jshint('.jshintrc'))
//     .pipe(jshint.reporter('default'))
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('dist/assets/js'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/assets/js'))
//     .pipe(notify({ message: 'Scripts task complete' }));
// });

// //图片压缩
// gulp.task('images', function() {  
//   return gulp.src('src/images/**/*')
//     .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
//     .pipe(gulp.dest('dist/assets/img'))
//     .pipe(notify({ message: 'Images task complete' }));
// });

// //收拾乾淨!
// gulp.task('clean', function() {  
//   return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], {read: false})
//     .pipe(clean());
// });

// //预设任务
// gulp.task('default', ['clean'], function() {  
//     gulp.start('styles', 'scripts', 'images');
// });

// //监听
// gulp.task('watch', function() {
//   // 监听所有.scss档
//   gulp.watch('src/styles/**/*.scss', ['styles']);
//   // 监听所有.js档
//   gulp.watch('src/scripts/**/*.js', ['scripts']);
//   // 监听所有图片档
//   gulp.watch('src/images/**/*', ['images']);
// });

// //即时重整(LiveReload)
// gulp.task('watch', function() {
//   // 建立即时重整伺服器
//   var server = livereload();
//   // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
//   gulp.watch(['dist/**']).on('change', function(file) {
//     server.changed(file.path);
//   });
// });



// var gulp = require('gulp'),
//   uglify = require('gulp-uglify');

gulp.task('default', function(){
  
  //编译Sass，Autoprefix及缩小化
  gulp.src('src/styles/main.scss')
    //.pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    //.pipe(gulp.dest('dist/assets/css'));
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));

    //JSHint，拼接及缩小化JavaScript
    gulp.src('src/scripts/**/*.js')
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));

    //图片压缩
    gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

//监听
gulp.task('watch', function() {
  // 监听所有.scss档
  gulp.watch('src/styles/**/*.scss', ['styles']);
  // 监听所有.js档
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  // 监听所有图片档
  gulp.watch('src/images/**/*', ['images']);
});


//即时重整(LiveReload)
gulp.task('watch', function() {
  // 建立即时重整伺服器
  var server = livereload();
  // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
  gulp.watch(['dist/**']).on('change', function(file) {
    server.changed(file.path);
  });
});