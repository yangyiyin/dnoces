/**
 * Created with yyy.
 * User: yyy
 * Date: 15-4-18
 * Time: 下午5:58
 */
define("test",['avalon'],function(avalon){
        var test = avalon.define("test", function(vm) {
            vm.aa='22';

            vm.index = function(){
                vm.aa='33';
            }
            vm.open = function(){
                mui.openWindow({
                    url:"index.html",
                    id:"index.html"
                });
            }
        });

        return test;

});