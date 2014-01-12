(function ($){

    $(function (){

        /* Disable Colorbox on mobile devices */

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
        } else {
            $('#lightboxOverlayDISABLED').attr('id','lightboxOverlay');
            $('.lightboxOverlayDISABLED').toggleClass('lightboxOverlay');
            $('.lightboxOverlayDISABLED').toggleClass('lightboxOverlayDISABLED');
            $('#lightboxOverlay').css({'display':'none'});
            $('#lightboxDISABLED').attr('id','lightbox');
            $('.lightboxDISABLED').toggleClass('lightbox');
            $('.lightboxDISABLED').toggleClass('lightboxDISABLED');
            $('#lightbox').css({'display':'none'});
        }            
    }

})(jQuery);