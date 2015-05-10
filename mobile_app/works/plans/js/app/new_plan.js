/**
 * Created with yyy.
 * User: yyy
 * Date: 15-4-18
 * Time: 下午5:58
 */
define("new_plan",['avalon'],function(avalon){
        var new_plan = avalon.define("new_plan", function(vm) {
            vm.start_time = '请选择';
            vm.end_time = '请选择';
            vm.subject = "";
            vm.index = function(){

            }
            vm.getTime = function(type){
                vm.pickDate(type);
            }
            vm.pickDate = function(type){
                plus.nativeUI.pickDate( function(e){
                    var d=e.date;
                    //console.log( "选择的日期："+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate() );
                    if(type == 1){
                        vm.start_time = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
                    }else{
                        vm.end_time = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
                    }
                },function(e){
                    console.log( "未选择日期："+e.message );
                });
            }
            vm.newPlan = function(){
                mui.plusReady(function(){
                    var plan = plus.storage.getItem("plan");
                    plan = JSON.parse(plan);
                    if(!plan){
                        plan = [];
                    }
                    var index = plan.length;
                    var detail = {subject:vm.subject,start_time:vm.start_time,end_time:vm.end_time,progress:0};
                    plan.push(detail);
                 //   console.log(JSON.stringify(plan));
                    plus.storage.setItem("plan", JSON.stringify(plan));
                  //  console.log(plus.storage.getItem("plan"));
                    var index_page = plus.webview.getWebviewById("index.html");
                    mui.fire(index_page,"updatePlan",{
                        plan:plan
                    });
                    mui.back();
                });
            }
        });
        return new_plan;

});