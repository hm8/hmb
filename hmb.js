var fis = module.exports = require('fis');

fis.cli.name = "hmb";

fis.config.merge({
	project: {
		fileType: {
			text: 'ejs'
		}
	},
	modules: {
		optimizer: {
			ejs: 'html-compress'
		}
	},
	settings: {
		optimizer: {
			'html-compress': {
				level: 'strip_comment' //strip strip_space strip_comment
			}
		}
	},
	roadmap: {
		path: [{
			reg: '**.swf',
			release: '/static/flash$&'
		}, {
			//字体文件
			reg: /\/fonts\/(.*\.(?:eot|svg|ttf|woff))/i,
			useHash: false,
			useDomain: true,
			release: '/static/fonts/$1'
		}, {
			//所有的js文件
			reg: '**.js',
			//发布到/static/js/xxx目录下
			release: '/static/js$&'
		}, {
			//所有的css文件
			reg: '**.css',
			//发布到/static/css/xxx目录下
			release: '/static/css$&'
		}, {
			//所有image目录下的.png,.gif,.jpg文件
			reg: /\/image\/(.*\.(?:png|gif|jpg))/i,
			useHash: true,
			useDomain: true,
			release: '/static/image/$1'
		}, {
			//模板html不生成
			reg: /\/tpl\/(.*\.html)/i,
			release: false
		}, {
			//common里面的ejs不生成
			reg: /^\/common\/(.*\.ejs)/i,
			isHtmlLike: true,
			release: false
		}, {
			//所有的ejs文件
			reg: '**.ejs',
			release: '/views$&',
			isHtmlLike: true,
			isMod: true
		}]
	}
});