(function($) {
	//全局配置(通常所有页面引用该配置，特殊页面使用mui.init({})来覆盖全局配置)
	$.initGlobal({
		swipeBack: false
	});
//    $.init({
//        keyEventBind: {
//            backbutton: false  //关闭back按键监听
//        }
//    });
//	var back = $.back;

})(mui);
mui.plusReady(function(){
    mui('body').on('tap', 'a.webview', function() {
        var url = this.href,
            querystr = url.split("?"),
            id = this.getAttribute('href').split('?')[0],
            params = this.getAttribute('webview'),
            GET = {};
        params = params == null ? {} : params.split(' ');

        var refresh = false;
        for (var i in params) {
            if (params[i] == 'refresh') {
                refresh = true;
                break;
            }
        }
        if(querystr[1]) {
            var GETs = querystr[1].split("&");
            for(var i = 0; i < GETs.length; i++){
                var tmp_arr = GETs[i].split("="),
                    key = tmp_arr[0];
                GET[key] = tmp_arr[1];
            }
        }
        if (refresh) {
            url += querystr[1] ? '&' : '?';
            url += 't=' + Math.random();
        }
        if (id && (~id.indexOf('.html') || ~id.indexOf('.htm'))) {
            mui.openWindow({
                id: id,
                url: url,
                extras: GET
            });
        }
    });
});

/**
 * toggle
 */
window.addEventListener('toggle', function(event) {
	if (event.target.id === 'M_Toggle') {
		var isActive = event.detail.isActive;
		var table = document.querySelector('.mui-table-view');
		var card = document.querySelector('.mui-card');
		if (isActive) {
			card.appendChild(table);
			card.style.display = '';
		} else {
			var content = document.querySelector('.mui-content');
			content.insertBefore(table, card);
			card.style.display = 'none';
		}
	}
});