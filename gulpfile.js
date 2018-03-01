//引用gulp//类似于<script src="gulp.js">
var gulp = require("gulp");
var cleanCss = require('gulp-clean-css');
//引入gulp-concat插件
var concat = require("gulp-concat");
//引入gulp-uglify插件 压缩js
var uglify = require("gulp-uglify");
//引入gulp-rename插件
var rename = require("gulp-rename");
//自动刷新
var connect  = require('gulp-connect');
//sass压缩
var rubySass = require('gulp-ruby-sass');
//var sass = require('gulp-sass');
//兼容ES6
var  minify = require("gulp-babel-minify");

gulp.task("minify", function(){
gulp.src("D:\\mypalmLife\\palmpife\\express_palmlife\\javascripts/*.js")

//    .pipe(minify({
//      mangle: {
//        keepClassName: true
//     }
//    }))
  .pipe(gulp.dest("D:\\mypalmLife\\palmpife\\src\\public\\javascripts"));
});

//以下赵老师方法
//压缩css
gulp.task('sass', function () {
    return rubySass('D:\\mypalmLife\\palmpife\\express_palmlife\\stylesheets/*.scss', {
        sourcemap: false,
        style: 'compressed',
    }).pipe(gulp.dest('D:\\mypalmLife\\palmpife\\src\\public\\stylesheets'));
});

// 压缩JS 不兼容ES6
// gulp.task('uglify', function () {
//     return gulp.src('js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('F:\theThirdPary\MyExpress_bolon\express_bolon\src\public'));
// });

//以上赵老师方法

//把根目录下的所有的html文件复制到发布目录下
gulp.task("copy-html",function () {
    //复制文件
    gulp.src("D:\\mypalmLife\\palmpife\\express_palmlife/*.html").pipe(gulp.dest("D:\\mypalmLife\\palmpife\\src\\public"));
});

//把根目录下的所有的js文件复制到发布目录下
gulp.task("copy-js",function () {
    //复制文件
    gulp.src("D:\\mypalmLife\\palmpife\\express_palmlife\\javascripts/*.js").pipe(gulp.dest("D:\\mypalmLife\\palmpife\\src\\public\\javascripts"));
});

//把PHP文件夹下所有的php文件复制到发布目录下
// gulp.task("copy-php",function () {
//     //复制文件
//     gulp.src("php/*.php").pipe(gulp.dest("F:\\theThirdPary\\MyExpress_bolon\\express_bolon\\src\\public"));
// });

//把所有的sql文件复制到发布目录下
gulp.task("copy-sql",function () {
    //复制文件
    gulp.src("D:\\mypalmLife\\palmpife\\express_palmlife/*.sql").pipe(gulp.dest("D:\\mypalmLife\\palmpife\\src\\public"));
});
//把所有的txt文件复制到发布目录下
gulp.task("copy-txt",function () {
    //复制文件
    gulp.src("D:\\mypalmLife\\palmpife\\express_palmlife/*.txt").pipe(gulp.dest("D:\\mypalmLife\\palmpife\\src\\public"));
});
    

//把img文件夹下所有的jpg文件复制到发布目录下
gulp.task("copy-jpg",function () {
    //复制文件
    //gulp.src("img/*.jpg").pipe(gulp.dest("D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\img"));
    gulp.src("D:\\mypalmLife\\palmpife\\express_palmlife\\images/**/*").pipe(gulp.dest("D:\\mypalmLife\\palmpife\\src\\public\\images")); //将文件下所有不管什么格式 png jpg gif都传过去
});

//开发目录是两个文件夹  发布目录是一个文件夹 将开发的两个文件夹合并到一个文件夹中
// gulp.task("data",function(){
//     gulp.src(["xml/*.xml","json/*.json","!json/test.json"])
//     .pipe(gulp.dest("dist/data"));
// })

 
//sass编译 定义一个sass编译任务
gulp.task("copy-css",function () {
    //把来源scss/*.scss路径下的文件，经过pipe调用sass函数编译，
    //编译完成之后调用gulp.dest把编译好的文件放入D:\\phpStudy\\WWW\\gulpmiaTest\\dist\\css
    gulp.src("D:\\mypalmLife\\palmpife\\express_palmlife\\stylesheets/*.scss").pipe(sass()).pipe(gulp.dest("D:\\mypalmLife\\palmpife\\src\\public\\stylesheets"));
});


//监听 gulp.watch  总函数有问题 要单独调用  压缩时写的['sass','minify'] 
gulp.task("watchall",["sass"],function () {
    // connect.server({
    //     port: 9001,
    //     livereload: true
    // });gulp自带的服务器，但是不能阅读php文件
    gulp.watch("D:\\mypalmLife\\palmpife\\express_palmlife/*.html",["copy-html"]);
    //gulp.watch("img/*.jpg",["copy-jpg"]);
    gulp.watch("D:\\mypalmLife\\palmpife\\express_palmlife\\images/**/*",["copy-jpg"]);//将所有文件不管什么格式 png jpg gif都传过去
    gulp.watch("D:\\mypalmLife\\palmpife\\express_palmlife\\javascripts/*.js",["copy-js"]);
    //gulp.watch("D:\\mypalmLife\\palmpife\\express_palmlife\\stylesheets/*.scss",["copy-css"]);
    //gulp.watch("php/*.php",["copy-php"]);
    gulp.watch("D:\\mypalmLife\\palmpife\\express_palmlife/*.sql",["copy-sql"]);
    gulp.watch("D:\\mypalmLife\\palympife\\express_palmlife/*.txt",["copy-txt"]);
    gulp.watch("D:\\mypalmLife\\palmpife\\express_palmlife\\stylesheets/*.scss",["sass"]);
});
