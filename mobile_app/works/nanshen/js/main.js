/**
 * Created with yyy.
 * User: yyy
 * Date: 15-4-18
 * Time: 下午5:48
 */

require.config({//第一块，配置
    baseUrl: 'js',
    paths: {
        avalon: "avalon.mobile",//必须修改源码，禁用自带加载器，或直接删提AMD加载器模块
        text: 'text',
        domReady: 'domReady',
        css: 'css.js',

        //app
        test : 'app/test'

    },
    priority: ['text', 'css'],
    shim: {
        jquery: {
            exports: "jQuery"
        },
        avalon: {
            exports: "avalon"
        }
    }
});
