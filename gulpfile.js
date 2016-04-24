//Created by rinov on 2016/4/23
//LICENSE : MIT

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browser = require('browser-sync');
var gatch = require('./gatch-config.json');

var targetDir = gatch.targetDir;
var target = gatch.target;
var watches = gatch.watches;

var port = gatch.port;
var openBrowser = gatch.openBrowser;

gulp.task('syncro',function(){
	browser({
		port:port,
		open:openBrowser,
		server:{
			baseDir:targetDir,
			index:target,
		}
	});
	for(var i=0;i<watches.length;i++){
		gulp.watch(watches[i],function(){
			browser.reload();
		});
	}
});

gulp.task('default',['syncro']);
