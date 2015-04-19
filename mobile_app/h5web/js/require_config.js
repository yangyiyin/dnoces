/**
 * Created with yyy.
 * User: yyy
 * Date: 15-4-18
 * Time: 下午5:48
 */
var app_path = '../js/app/';
require.config({//第一块，配置
    baseUrl: '',
    paths: {
        //框架相关
        avalon: "../js/avalon",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: '../js/text',
        domReady: '../js/domReady',
        css: '../js/css.js',
        //app
        test : app_path+'test'

    },
    priority: ['domReady','test' ],
    shim: {
        jquery: {
            exports: "jQuery"
        },
        avalon: {
            exports: "avalon"
        }
    }
});
