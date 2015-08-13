/**
 * Created with yyy.
 * User: yyy
 * Date: 15-4-18
 * Time: 下午5:58
 */
define("index",['avalon',"jquery"],function(avalon,$){
    var index = avalon.define("index", function(vm) {
        vm.item_name = "";
        vm.item_id = 0;
        vm.task = [];
        vm.is_corner_point = false;
       vm.index = function(){
           mui.init();
            //处理逻辑：1秒内，连续两次按返回键，则退出应用；
           var first = null;
        //   mui.plusReady(function(){
               mui.back = function() {
                   if($(".mui-off-canvas-backdrop").css("z-index") == "auto" || !$(".mui-off-canvas-backdrop").css("z-index")){
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

                   }
               };
          // })
           mui('#offCanvasSideScroll').scroll();
           mui('#offCanvasContentScroll').scroll();
       }
       vm.tips = function(name,id,count){
           vm.item_name = name;
           vm.item_id = id;
           vm.count = count;
       }
        vm.pushMessage = function(){
            //放进我的任务列表
            vm.task.push({
                "item_name" : vm.item_name,
                "count"     : vm.count
            });
            vm.is_corner_point = true;
            //发送消息
        }
        vm.finishTask = function(count){
            $(this).parents("li").remove();
        }
        vm.showSideMenu = function(){
            //侧滑容器父节点
            var offCanvasWrapper = mui('#offCanvasWrapper');
            //主界面容器
            var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
            //菜单容器
            var offCanvasSide = document.getElementById("offCanvasSide");
            offCanvasWrapper.offCanvas('show');

            vm.is_corner_point = false;
        }
        vm.tequanlist = function(){
            mui.openWindow({
                url:"tequanlist.html",
                id:"tequanlist.html"
            });
        }
    });
    return index;

});