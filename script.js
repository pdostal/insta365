(function ($){
    $(function (){
        $mobile_colorbox();
        $(window).resize(function () {
            $mobile_colorbox()
        });
    });
    $mobile_colorbox = function ()
    {
        if ( $(window).width() <= 992 ) {
        	$('#lightboxOverlay').css({'display':'none'});
            $('#lightboxOverlay').attr('id','lightboxOverlayDISABLED');
            $('.lightboxOverlay').toggleClass('lightboxOverlayDISABLED');
            $('.lightboxOverlay').toggleClass('lightboxOverlay');
            $('#lightbox').css({'display':'none'});
            $('#lightbox').attr('id','lightboxDISABLED');
            $('.lightbox').toggleClass('lightboxDISABLED');
            $('.lightbox').toggleClass('lightbox');
            $('.text').toggleClass('textsize',true);
        } else {
            $('#lightboxOverlayDISABLED').attr('id','lightboxOverlay');
            $('.lightboxOverlayDISABLED').toggleClass('lightboxOverlay');
            $('.lightboxOverlayDISABLED').toggleClass('lightboxOverlayDISABLED');
            $('#lightboxOverlay').css({'display':'none'});
            $('#lightboxDISABLED').attr('id','lightbox');
            $('.lightboxDISABLED').toggleClass('lightbox');
            $('.lightboxDISABLED').toggleClass('lightboxDISABLED');
            $('#lightbox').css({'display':'none'});
            $('.text').toggleClass('textsize',false);
        }            
    }
})(jQuery);
(function ($){
    $(function (){
        $('.text').mouseover(function() {
            $(this).toggleClass('textmouse',true);
        });
        $('.text').mouseout(function() {
            $(this).toggleClass('textmouse',false);
        });
        $('.text').click(function() {
            if ($('.text').is('.textclicked')) {
                $('.text').toggleClass('textclicked',false);
                return false;
            } else {
                $('.text').toggleClass('textclicked',true);
                return false; 
            }
        });
        $(document).click(function(){
            if ($('.text').is('.textclicked')) {
                $('.text').toggleClass('textclicked',false);
                return false;
            }
        });
    });
})(jQuery);