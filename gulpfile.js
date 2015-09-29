// GULPFILE with Sass
// - - - - - - - - - - - - - - -
// This file processes all of the assets in the "src" folder
// and outputs the finished files in the "dist" folder.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    del = require('del'),
    runSequence = require('run-sequence');

// 2. SETTINGS VARIABLES
// - - - - - - - - - - - - - - -
var paths = {
        src: 'src/',
        dist: 'dist/',
        sourcemaps: './'
    },
    assets = {
        js: 'js/',
        css: 'css/',
        scss: 'scss/',
        img: 'img/',
        lib: 'lib/'
    },
    files = {
        js: '**/*.js',
        css: '**/*.css',
        scss: '**/*.scss',
        all: '**/*.*',
    },
    sizeOptions = {
        showFiles: true
    },
    renameOptions = {
        suffix: '.min'
    };

// 3. TASKS
// - - - - - - - - - - - - - - -
// Cleans the dist directory
gulp.task('clean', function() {
    del([paths.dist]);
});

// Compiles the JavaScript (error handling via plumber)
gulp.task('js', function() {
    return gulp.src(paths.src + assets.js + files.js)
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.size(sizeOptions))
        .pipe(plugins.sourcemaps.write(paths.sourcemaps))
        .pipe(gulp.dest(paths.dist + assets.js))
        .pipe(plugins.uglify()).on('error', function(e) {})
        .pipe(plugins.rename(renameOptions))
        .pipe(plugins.size(sizeOptions))
        .pipe(gulp.dest(paths.dist + assets.js));
});

// Cleans the dist css directory before re-creating the css
gulp.task('clean-css', function() {
    del([paths.dist + assets.css]);
});

// Compiles scss and minifies css
gulp.task('scss', function() {
    return gulp.src(paths.src + assets.scss + files.scss)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init({loadMaps: true}))
        .pipe(plugins.sass({errLogToConsole: true, sourcemap: true}))
        .pipe(plugins.autoprefixer())
        .pipe(plugins.size(sizeOptions))
        .pipe(plugins.sourcemaps.write(paths.sourcemaps))
        .pipe(gulp.dest(paths.dist + assets.css));
});

// Compiles scss and minifies css
gulp.task('css', function() {
    return gulp.src(paths.dist + assets.css + files.css)
        .pipe(plugins.plumber())
        .pipe(plugins.minifyCss())
        .pipe(plugins.rename(renameOptions))
        .pipe(plugins.size(sizeOptions))
        .pipe(gulp.dest(paths.dist + assets.css));
});

// Builds the style
gulp.task('style', function() {
    runSequence('clean-css', 'scss', 'css', function() {});
});

// Optimizes img files
gulp.task('img', function() {
    return gulp.src(paths.src + assets.img + files.all)
        .pipe(gulp.dest(paths.dist + assets.img));
});

// Copies lib files as is
gulp.task('lib', function() {
    return gulp.src(paths.src + assets.lib + files.all)
        .pipe(gulp.dest(paths.dist + assets.lib));
});

// Watch for changes and recompiles
gulp.task('watch', function() {
    gulp.watch(paths.src + assets.js + files.js, ['js']);
    gulp.watch(paths.src + assets.scss + files.scss, ['style']);
    gulp.watch(paths.src + assets.img + files.all, ['img']);
    gulp.watch(paths.src + assets.lib + files.all, ['lib']);
});

// Default task: builds your app
gulp.task('default', function() {
    runSequence('clean', ['js', 'style', 'img', 'lib', 'watch'], function() {
        console.log("Successfully built!");
    });
});