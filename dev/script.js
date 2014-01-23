(function ($){
    $(function (){
        $(window).ready(function () {
            $mobile_colorbox()
        });
        $(window).resize(function () {
            $mobile_colorbox()
        });
        $('.nextpage').click(function () {
            $mobile_colorbox()
        });
    });
    $mobile_colorbox = function () {
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
    }
})(jQuery);
(function ($){
    $(function () {
        $('.nextpage').click(function(){
            var myPage = $('.nextpage').attr('data-page');
            var myGrid = 0;
            $.get(ajax_request_url,{
                'action' : 'get_post_title',
                'page' : myPage
            }, function( response ) {
                $('.container').append('<div class="rov">');
                $.each(response, function(index, element) {
                    $('.rov:last').append('<article class="col-md-4">');
                    $('.col-md-4:last').append('<h1 class="title"><span itemprop="datePublished" content="'+element.title+'">'+element.title+'</span></h1>');
                    $('.col-md-4:last').append('<div class="content">');
                    $('.content:last').append('<div class="img">'+element.image+'</div>');
                    $('.content:last').append('<div class="desc">');
                    $('.desc:last').append('<p class="textdesc" itemprop="description">'+element.content+'</p>');
                    $('.desc:last').append('<span class="textlightbox"><a href="javascript:;">Lightbox</a></span>');
                    $('.desc:last').append('<span class="textclose"><a href="javascript:;">Close</a></span>');
                    $('.content:last').append('</div>');
                    $('.col-md-4:last').append('</div>');
                    $('.rov:last').append('</article>');
                    myGrid = myGrid + 1;
                    if (myGrid == 3) {
                        $('.container:last').append('</div>');
                        $('.container:last').append('<div class="rov">');
                        myGrid = 0;
                    }
                });
                if (myGrid != 0) {
                    $('.container:last').append('</div>');
                }
            },  "json" );
            $('.nextpage').attr('data-page',parseInt(myPage)+1);
        });
    });
})(jQuery);