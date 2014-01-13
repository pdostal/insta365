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
            $('.textclose').remove();
            $('.text').children('p').toggleClass('textsize',true);
        } else {
            $('#lightboxOverlayDISABLED').attr('id','lightboxOverlay');
            $('.lightboxOverlayDISABLED').toggleClass('lightboxOverlay');
            $('.lightboxOverlayDISABLED').toggleClass('lightboxOverlayDISABLED');
            $('#lightboxOverlay').css({'display':'none'});
            $('#lightboxDISABLED').attr('id','lightbox');
            $('.lightboxDISABLED').toggleClass('lightbox');
            $('.lightboxDISABLED').toggleClass('lightboxDISABLED');
            $('#lightbox').css({'display':'none'});
            $('.text').children('p').toggleClass('textsize',false);
        }            
    }
})(jQuery);
(function ($){
    $(function (){
        $('.text').mouseover(function() {
            $(this).children('p').toggleClass('textmouse',true);
        });
        $('.text').mouseout(function() {
            $(this).children('p').toggleClass('textmouse',false);
        });
        $('.text').click(function() {
            if ($('.text').children('p').is('.textclicked')) {
                $('.text').children('p').toggleClass('textclicked',false);
                $('.textclose').remove();
            } else {
                $(this).children('p').toggleClass('textclicked',true);
                if ( ( $(window).width() > 992 ) && ( $('.text').not('.textsingle') ) ) {
                    $(this).parent().append('<a class="textclose" href="javascript:;">Close</a>');
                }
                return false;
            }
        });
        $('.textlightbox').click(function() {
            $(this).parent('p').parent('.text').parent('.content').children('a').click();
        });
        $(document).click(function(){
            if ($('.text').children('p').is('.textclicked')) {
                $('.text').children('p').toggleClass('textclicked',false);
                $('.textclose').remove();
            }
        });
        $('.textclose').click(function(){
            if ($('.text').children('p').is('.textclicked')) {
                $('.text').children('p').toggleClass('textclicked',false);
                $('.textclose').remove();
            }
        });
    });
})(jQuery);