# apex-gulpfile-sass
This is a super basic Gulpfile for anyone who only needs JavaScript, Sass, images and vendor (3rd party) file handling.

See http://vmorneau.me/apex-gulpfile-sass/ for more info.

If you don't want Sass handling, look at my basic Gulpfile: https://github.com/vincentmorneau/basic-gulpfile

#Features
- SCSS (parsing)
- CSS (concatenation, minification, autoprefixer)
- JS (concatenation, minification)
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
|-/client
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