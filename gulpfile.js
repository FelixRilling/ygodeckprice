"use strict";

const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");

const task_js = require("./tasks/js");
const task_js_dist = require("./tasks/js-dist");
const task_html = require("./tasks/html");
const task_css = require("./tasks/css");
const task_bootstrap = require("./tasks/bootstrap");
const task_img = require("./tasks/img");
const task_connect = require("./tasks/connect");
const task_sync = require("./tasks/sync");
const task_clean = require("./tasks/clean");
const task_electron = require("./tasks/electron");

gulp.task("js", [], task_js);
gulp.task("js-dist", [], task_js_dist);
gulp.task("html", [], task_html);
gulp.task("css", [], task_css);
gulp.task("bootstrap:prepareCfg", task_bootstrap.pre_cfg);
gulp.task("bootstrap:prepareVars", task_bootstrap.pre_vars);
gulp.task("bootstrap", ["bootstrap:prepareCfg", "bootstrap:prepareVars"], task_bootstrap.main);
gulp.task("img", [], task_img);
gulp.task("connect", [], task_connect);
gulp.task("sync", [], task_sync);
gulp.task("clean", [], task_clean);
gulp.task("electron", [], task_electron);

gulp.task("watch", function () {
    gulp.watch("./src/**/*.pug", ["html"]);
    gulp.watch("./src/js/**/*.js", ["js"]);
    gulp.watch(["./src/scss/bootstrap.scss", "./src/scss/_variables.scss"], ["bootstrap"]);
    gulp.watch("./src/scss/**/*.scss", ["css"]);
});


gulp.task("dev", ["connect", "watch"]);
gulp.task("build", ["html", "js", "bootstrap", "css"]);
gulp.task("dist", function (cb) {
    gulpSequence("clean", ["sync", "img", "build"], "js-dist", cb);
});
gulp.task("default", ["dist"]);
