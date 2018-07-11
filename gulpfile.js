const gulpfile = require('gulp');
const autoPreFixer = require('gulp-autoprefixer');

gulpfile.task('styles', () => {
	gulpfile.src('**/*.css')
		.pipe(autoPreFixer())
		.pipe(gulpfile.dest('gulp.css'))
});