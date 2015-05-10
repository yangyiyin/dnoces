/**
 * Created with yyy.
 * User: yyy
 * Date: 15-4-18
 * Time: 下午5:58
 */
define("plan_detail",['avalon'],function(avalon){
        var plan_detail = avalon.define("plan_detail", function(vm) {
            vm.plan = null;
            vm.progress = 0;
            vm.key = '';
            vm.index = function(){
                mui.plusReady(function(){
                    var cw = plus.webview.currentWebview();
                    vm.key = cw.index;
                    var plan = plus.storage.getItem("plan");

                    var obj_plan = JSON.parse(plan);
                    vm.plan = obj_plan[vm.key];
                    vm.progress = vm.plan.progress || 0;
                })
            }
            vm.editPlan = function(){
                vm.plan.progress = parseInt(vm.plan.progress) + parseInt(vm.progress);
                mui.plusReady(function(){
                    if(typeof vm.key == "number"){
                        var plan = plus.storage.getItem("plan");
                        var obj_plan_ = JSON.parse(plan);
                        obj_plan_[vm.key] = vm.plan;
                        var obj_plan =  JSON.stringify(obj_plan_);
                        plus.storage.setItem("plan",obj_plan);
                        var index_page = plus.webview.getWebviewById("index.html");
                        mui.fire(index_page,"updatePlan",{
                            plan:obj_plan_
                        });
                    }
                    mui.back();
                });

            }

        });

        return plan_detail;

});