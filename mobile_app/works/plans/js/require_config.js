/**
 * Created with yyy.
 * User: yyy
 * Date: 15-4-18
 * Time: 下午5:48
 */
var app_path = 'app/';
require.config({//第一块，配置
    baseUrl: '../js/',
    paths: {
        //框架相关
        avalon: "avalon",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        jquery : "jquery-1.7.2.min",
        text: 'text',
        domReady: 'domReady',
        css: 'css.js',
        //app
        test        : app_path+'test',
        index       : app_path+'index',
        new_plan    : app_path+'new_plan',
        plan_detail    : app_path+'plan_detail',

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