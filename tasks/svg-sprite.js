import gulp from 'gulp';
import config from '../config';
import svgSprite from 'gulp-svg-sprites';
import cheerio from 'gulp-cheerio'
import plumber from 'gulp-plumber';
import fs from 'fs';

gulp.task('svg-sprite', () => {
    gulp.src('./__dev/sprites/svg/*.svg')
        .pipe(svgSprite({
            mode: "symbols",
            cssFile: "../styles/helpers/08_svg-sprite.styl",
            svg: {
                symbols: "../images/sprite-icons.html"
            },
            svgPath: '../images/sprite-icons.html',
            preview: false,
            templates: {
                css: fs.readFileSync(process.cwd() + '/__dev/styles/helpers/svg-sprite-template.css', "utf-8")
            },
            svgId: "icon-%f"
        }))
        .pipe(cheerio({
        	run: function ($) {
        		$('[fill]').removeAttr('fill');
        		$('[stroke]').removeAttr('stroke');
        		$('[title]').removeAttr('title');
        		$('[data-name]').removeAttr('data-name');
        	},
        	parserOptions: {xmlMode: true}
        }))
        .pipe(plumber())
        .pipe(gulp.dest('./__dev/images'))
});
