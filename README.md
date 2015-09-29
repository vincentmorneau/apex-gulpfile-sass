# apex-gulpfile-sass
This is a super basic Gulpfile for anyone who only needs JavaScript, Sass, images and vendor (3rd party) file handling.

See http://vmorneau.me/apex-gulpfile-sass/ for more info.

If you don't want Sass handling, look at my basic Gulpfile: https://github.com/vincentmorneau/basic-gulpfile

#Changelog
##1.4.0
- Updated dependencies
- Changed terminology
    - `client` to `src`
    - `build` to `dist`
- Removed image minification package
    - was not generic enough for this project
- Removed assets intermediate folder

##1.3.0
- Updated to gulp-concat 		2.6.x
- Updated to gulp-size          2.0.x
- Updated to gulp-minify-css    1.2.x
- Updated to gulp-imagemin      2.3.x
- Updated to gulp-load-plugins	1.0.x-rc.1

##1.2.0
- Updated to gulp-uglify 1.2.x
- Updated to gulp-rename 1.2.x
- Updated to gulp-plumber 1.0.x
- Updated to gulp-load-plugins 0.10.x
- Updated to gulp-del 1.2.x
- Updated to gulp-util 3.0.x
- Updated to gulp-jshint 1.11.x
- Updated to gulp-autoprefixer 2.3.x
- Updated to gulp-minify-css 1.1.x
- Updated to run-sequence 1.1.x
- Updated to gulp 3.9.x
- Updated to jshint-stylish 2.0.x
- Updated to gulp-sourcemaps 1.5.x

##1.1.0
- Updated to gulp-sass 2.0.x
	+ Which updates node-sass to 3.0.0
	+ Fix Source maps now work as expected with Autoprefixer

##1.0.0
- Initial Release

#Features
- SCSS (parsing)
- CSS (concatenation, minification, autoprefixer, sourcemaps)
- JS (concatenation, minification, sourcemaps)
- IMG (optimization)
- Vendor files (copy)
- Output of minified and un-minified JS & CSS
- Filesize indicator
- User friendly error handling

#Install
```npm install```

#Run
```npm start```

#How to use
From the root folder, You can create, edit or delete any files in:
```
|-/src
	|-/assets
		|-scss
		|-img
		|-js
		|-vendor
```

The Gulp magic will happen and compile your files to this folder structure:

```
|-/build
	|-/assets
		|-css
		|-img
		|-js
		|-vendor
```

Note: Everything in the ```/client/``` folder of this repo is to be replaced by your files.

###That's all! Enjoy an easy Sass parsing.