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
            $('#lightboxOverlay').attr('id','lightboxOverlayDISABLED');
            $('.lightboxOverlay').toggleClass('lightboxOverlayDISABLED');
            $('.lightboxOverlay').toggleClass('lightboxOverlay');
            $('#lightbox').attr('id','lightboxDISABLED');
            $('.lightbox').toggleClass('lightboxDISABLED');
            $('.lightbox').toggleClass('lightbox');
            $('.textdesc').toggleClass('size',true);
            $('.textclose').toggleClass('size',true);
            $('.textlightbox').toggleClass('size',true);
            $('.textdesc').toggleClass('clicked',false);
            $('.textclose').toggleClass('clicked',false);
            $('.textlightbox').toggleClass('clicked',false);
        } else {
            $('#lightboxOverlayDISABLED').attr('id','lightboxOverlay');
            $('.lightboxOverlayDISABLED').toggleClass('lightboxOverlay');
            $('.lightboxOverlayDISABLED').toggleClass('lightboxOverlayDISABLED');
            $('#lightboxDISABLED').attr('id','lightbox');
            $('.lightboxDISABLED').toggleClass('lightbox');
            $('.lightboxDISABLED').toggleClass('lightboxDISABLED');
            $('.textdesc').toggleClass('size',false);
            $('.textclose').toggleClass('size',false);
            $('.textlightbox').toggleClass('size',false);
        }            
    }
})(jQuery);
(function ($){
    $(function () {
        $('.desc').mouseover(function() {
            $(this).children('.textdesc').toggleClass('mouse',true);
            $(this).children('.textlightbox').toggleClass('mouse',true);
        });
        $('.desc').mouseout(function() {
            $(this).children('.textdesc').toggleClass('mouse',false);
            $(this).children('.textlightbox').toggleClass('mouse',false);
        });
        $('.desc').click(function() {
            if ($(this).children('.textdesc').is('.clicked')) {
                $(this).children('.textdesc').toggleClass('clicked',false);
                $(this).children('.textlightbox').toggleClass('clicked',false);
                $(this).children('.textclose').toggleClass('clicked',false);
            } else {
                $(this).children('.textdesc').toggleClass('clicked',true);
                $(this).children('.textlightbox').toggleClass('clicked',true);
                $(this).children('.textclose').toggleClass('clicked',true);
                return false;
            }
        });
        $('.textlightbox').click(function() {
            if ( $(window).width() > 992 ) {
                $(this).parent('.desc').parent('.content').children('.img').children('a').click();
            }
        });
        $(document).click(function(){
            $('.textdesc').toggleClass('clicked',false);
            $('.textlightbox').toggleClass('clicked',false);
            $('.textclose').toggleClass('clicked',false);
        });
        $('.textclose').click(function(){
            $(this).parent().children('.textdesc').toggleClass('clicked',false);
            $(this).parent().children('.textlightbox').toggleClass('clicked',false);
            $(this).parent().children('.textclose').toggleClass('clicked',false);
            return false;
        });
    });
})(jQuery);