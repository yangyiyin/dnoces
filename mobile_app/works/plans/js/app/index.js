/**
 * Created with yyy.
 * User: yyy
 * Date: 15-4-18
 * Time: 下午5:58
 */
define("index",['avalon',"jquery"],function(avalon,$){
    var index = avalon.define("index", function(vm) {
        vm.is_show_menu = 0;
        vm.plan = null;
        vm.plan_arr = [];
        vm.index = function(){
            vm.getPlanList();
            //处理逻辑：1秒内，连续两次按返回键，则退出应用；
            var first = null;
            mui.back = function() {
                if($(".mui-off-canvas-backdrop").css("z-index") == "auto"){
                    //首次按键，提示‘再按一次退出应用’
                    if (!first) {
                        first = new Date().getTime();
                        mui.toast('再按一次退出应用');
                        setTimeout(function() {
                            first = null;
                        }, 1000);
                    } else {
                        if (new Date().getTime() - first < 1000) {
                            plus.runtime.quit();
                        }
                    }
                }else{
                    //侧滑容器父节点
                    var offCanvasWrapper = mui('#offCanvasWrapper');
                    //主界面容器
                    var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
                    //菜单容器
                    var offCanvasSide = document.getElementById("offCanvasSide");
                    offCanvasWrapper.offCanvas('close');
                    index.is_show_menu = 0;
                }
            };
            mui.init();

        }
        vm.newPlan = function(){
            mui.plusReady(function(){
                mui.openWindow({
                    url : "new_plan.html?t="+new Date(),
                    id  : "new_plan.html"
                });
            });
        }
        vm.showSideMenu = function(){
            //侧滑容器父节点
            var offCanvasWrapper = mui('#offCanvasWrapper');
            //主界面容器
            var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
            //菜单容器
            var offCanvasSide = document.getElementById("offCanvasSide");
            offCanvasWrapper.offCanvas('show');
            vm.is_show_menu = 1;
        }
        vm.getPlanList = function(){
            mui.plusReady(function(){
                var plan = plus.storage.getItem("plan");
                vm.plan = JSON.parse(plan);
                vm.plan_arr = vm.plan;
            });
        }
        vm.showDetail = function(index){
            mui.plusReady(function(){
                mui.openWindow({
                   url : "plan_detail.html?t="+new Date(),
                    id : "plan_detail.html",
                    extras : {
                        index:index
                    }
                });
            });
        }
        vm.delPlan = function(index,event){
            event.stopPropagation();
            var elem = this;
            mui.confirm('确认删除该计划？', 'Hello MUI', ['确定','取消'], function(e) {
                if (e.index == 0) {
                    vm.plan.splice(index,1);
                    var plan = JSON.stringify(vm.plan);
                    plus.storage.setItem("plan",plan);
                    var li = elem.parentNode;
                    li.parentNode.removeChild(li);
                }
            });
        }
    });
    window.addEventListener('updatePlan',function(event){
        index.plan = event.detail.plan;
        index.plan_arr = event.detail.plan;
    });
    return index;

});