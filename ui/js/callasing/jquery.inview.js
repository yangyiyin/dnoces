/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }
    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];
        
        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });
    });
    

    //yujie write
    $(function() { 
        var elm = $('#cs_girl'); 
        var girl_work =$(".girl_work");
        var startPos = $(elm).offset().top;//距页面顶部
        var girl_work_pH = $(girl_work).offset().top;
        $.event.add(window, "scroll", function() { 
            var p = $(window).scrollTop()+100;//滚动条距离
            $(elm).css('position',((p) > startPos) ? 'fixed' : 'absolute'); 
            if($(".story").height()==720){
                $(elm).css('top',((p) > startPos) ? '184px' : '');
            }else{
                $(elm).css('bottom',((p) > startPos) ? '187px' : '');
            }
            
            
        }); 
        /*$.event.add(window,"mousewheel",function(){
            var p = $(window).scrollTop()+100;
            var num = p - girl_work_pH - 115; 
            if(Math.abs(num)<50){
                $.scrollTo('#second',400);
            }
        })*/
    }); 

    $(document).ready(function(){
        var vpH = getViewportHeight();
        if (vpH>720) {
           $(".story").css("height",vpH);
        };
    })
    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $(function () {
        $(window).scroll();
    });
})(jQuery);
