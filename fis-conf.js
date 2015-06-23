fis.config.merge({
    statics: 'statics/admin',
})
fis.config.set('modules.parser.less', 'less');
fis.config.set('roadmap.ext.less', 'css');
// seajs 处理器
// fis.config.set('modules.postpackager','seajs');
// 用fis的js包装器
fis.config.set('settings.postprocessor.jswrapper.type','amd');
 //不要压缩require关键字，否则seajs会识别不了require

fis.config.set('settings.optimizer.uglify-js', {
    mangle: {
        except: 'exports, module, require, define'
    }
});

fis.config.merge({
    roadmap : {
        domain : "http://test.statics.shipin7.com/statics/admin"
    }
});
fis.config.set('roadmap.path',[
            {
                //一级同名组件，可以引用短路径，比如sea-modules/jquery/juqery.js
                //直接引用为var $ = require('jquery');
                reg : /^\/src\/js\/business\/([^\/]+)\/\1\.(js|coffee|less|css|jpg|gif|png)$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
                //less和css文件会做csssprite处理
                useSprite : true,
                //id为文件夹名
                id : '$1',
                useStandard:false,
                release: '/$1'
            },
            {
                //sea-modules目录下的其他文件
                reg : /^\/src\/js\/widget\/(.*)\.(js|coffee|less|css|jpg|gif|png)$/i,
                //是组件化的，会被jswrapper包装
                isMod : false,
                //id是去掉sea-modules和.js后缀中间的部分
                id : '$1',
                useStandard:false,
                release: '/js/widget/$1'
            },
            {
                //sea-modules目录下的其他文件
                reg : /^\/src\/js\/config\/(.*)\.(js)$/i,
                //是组件化的，会被jswrapper包装
                isMod : false,
                //id是去掉sea-modules和.js后缀中间的部分
                id : '$1',
                useStandard:false,
                release: '/js/config/$1'
            },                       
            {
                //sea-modules目录下的其他文件
                reg : /^\/src\/(.*)\.(js|coffee|less|css|jpg|gif|png)$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
                //less和css文件会做csssprite处理
                useSprite : true,
                //id是去掉sea-modules和.js后缀中间的部分
                id : '$1',
                useStandard:false,
                release: '/$1'
            },
            {
                reg: 'template/**',
                useStandard:false,
                release: false
            },
            {
                reg: 'lib/**',
                useStandard:false,
                release: false
            },                               
            {
                reg: /.*\.(html|jsp|tpl|vm|htm|asp|aspx|php|json)$/,
                useCache: false,
                useStandard:false,
                release: false
            },
            {
                reg: '*.js',
                useCache: false,
                useStandard:false,
                release: false
            },                      
            {
                reg: 'node_modules/**',
                useStandard:false,
                release: false
            }                   
  ]);

fis.config.set('pack', 
    {
        '/js/lib.js': [
            '/src/js/widget/zepto/1.1.6/**.js',
            '/src/js/widget/seajs/sea.js',
            '/src/js/config/sea-config.js'
        ],
        '/css/common/common.min.css': [
	    '/src/css/common/main.css',
        '/src/css/common/header.css',
	    '/src/css/common/nav.css'
        ]
    }
);