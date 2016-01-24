const source = require('vinyl-source-stream');
const gulp = require('gulp');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');

const reload = browserSync.reload;

gulp.task('browser-sync', () => {
	browserSync({
		server: {},
		middleware: [historyApiFallback()],
		ghostMode: false
	});
});

function handleErrors() {
	const args = Array.prototype.slice.call(arguments);
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);
	this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
	const props = {
		entries: ['./src/' + file],
		debug: true,
		cache: {},
		packageCache: {},
		transform: [babelify.configure({ stage: 0 })]
	};

	// watchify() if watch requested, otherwise run browserify() once
	const bundler = watch ? watchify(browserify(props)) : browserify(props);

	function rebundle() {
		const stream = bundler.bundle();
		return stream
		.on('error', handleErrors)
		.pipe(source(file))
		.pipe(gulp.dest('./build/'))
		.pipe(reload({ stream: true }));
	}

	// listen for an update and run rebundle
	bundler.on('update', () => {
		rebundle();
		gutil.log('Rebundle...');
	});

	// run it once the first time buildScript is called
	return rebundle();
}

gulp.task('scripts', () => {
	return buildScript('main.js', false); // this will run once because we set watch to false
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['scripts', 'browser-sync'], () => {
	return buildScript('main.js', true); // browserify watch for JS changes
});
