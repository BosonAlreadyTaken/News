/**
 * Created by liuxin on 2017/5/26.
 */
// 引入模块
var gulp = require('gulp');
//gulp-connect:自动更新当前文件的内容，调用reload方法自动刷新页面；uglify是压缩JS文件，lessmin是压缩css文件,concat是合并所有的文件到指定的文件
var $ = require('gulp-load-plugins')();

var open = require('open');

// 声明一个全局变零，定义目录路径
var app = {
    srcPath : 'src/',
    devPath : 'build/',
    prdPath : 'dist/'
};


// 将依赖放置到开发/环境中（vender是我们重新命名的一个文件夹它会自动生成）
gulp.task('lib', function () {
    gulp.src('./bower_components/**/*.js')
        .pipe(gulp.dest(app.devPath + 'vendor'))//pipe不会保存数据（缓存）只是处理数据
        .pipe(gulp.dest(app.prdPath + 'vendor'))
        .pipe($.connect.reload());
});


// 将html文件放置到开发/发布环境中
gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload());
});


// 将json文件放置到开发/发布环境中(实际开发中可能用不到, 这里模拟假数据)
gulp.task('json', function () {
    gulp.src(app.srcPath + 'data/**/*.json')
        .pipe(gulp.dest(app.devPath+'data'))
        .pipe(gulp.dest(app.prdPath+'data'))
        .pipe($.connect.reload());
});

// 将less文件
gulp.task('less', function () {
    gulp.src(app.srcPath + 'style/index.less')
        .pipe($.less()) // 编译less文件为css文件
        .pipe(gulp.dest(app.devPath+'style'))
        .pipe($.cssmin()) // 因为要输出到发布目录下, 所以要对css文件进行压缩
        .pipe(gulp.dest(app.prdPath+'style'))
        .pipe($.connect.reload());
});

// js文件
gulp.task('js', function () {
    gulp.src(app.srcPath + 'script/**/*.js')
        .pipe($.concat('index.js')) // 对所有的js文件进行合并
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe($.uglify()) // 部署到发布环境需要将js文件进行压缩
        .pipe(gulp.dest(app.prdPath + 'js'))
        .pipe($.connect.reload());
});


// image
gulp.task('image', function () {
    gulp.src(app.srcPath + 'images/**/*')
        .pipe(gulp.dest(app.devPath + 'images'))
        .pipe(gulp.dest(app.prdPath + 'images'))
        .pipe($.connect.reload());
});

// 清除任务
gulp.task('clean', function () {
    gulp.src([app.devPath, app.prdPath])
        .pipe($.clean());
});


// 总的任务(将上述任务进行合并)
gulp.task('build', ['image', 'js', 'less', 'json', 'html', 'lib']);


// 自动开启服务
gulp.task('serve', ['build'], function () {
    // 开启连接服务
    $.connect.server({
        root:[app.devPath], // 设置根路径
        livereload: true, // 是否自动刷新
        port:3333// 指定端口号
    });

    open('http://localhost:3333');


    // 设置监听的文件类型
    gulp.watch('./bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'images/**/*', ['image']);

    // 执行serve 任务的时候自动打开浏览器
});

// 默认任务gukp
gulp.task('default', ['serve']);