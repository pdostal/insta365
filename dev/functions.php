<?php
    //define('WP_HOME', 'http://dev.pdostal.cz/wordpress/');
    //define('WP_SITEURL', 'http://dev.pdostal.cz/wordpress/');

    function my_function_admin_bar() { return false; }
    add_filter('show_admin_bar' , 'my_function_admin_bar');

	add_theme_support( 'post-thumbnails' );

	add_filter( 'post_thumbnail_html', 'my_post_image_html', 10, 3 );
	function my_post_image_html( $html, $post_id, $post_image_id ) {
		$html = '<a href="'.wp_get_attachment_url(get_post_thumbnail_id($post_id)).'" data-lightbox="lightbox" title="'.strip_tags(get_the_content()).'" itemprop="contentURL">'.$html.'</a>';
		return $html;
	}
	function get_first_image($content) {
		preg_match_all ('~<img [^\>]*\ />~', $content, $aPics);
		if (count($aPics[0]) > 0) {
		   for ($i=0; $i < count($aPics[0]); $i++) {
				preg_match('/<img.*src="(.*?)"/', $aPics[0][$i], $matches); 
		        return '<a href="'.$matches[1].'" data-lightbox="lightbox" title="'.strip_tags(get_the_content()).'" itemprop="contentURL">'.$aPics[0][$i].'</a>';
		   };
		} else {
			return '<img src="" alt="No image" />';
		}
	}

	add_action( 'wp_enqueue_script', 'load_jquery' );
	function load_jquery() {
		wp_enqueue_script( 'jquery' );
	}

	add_action( 'wp_ajax_nopriv_get_post_title', 'get_post_title' );
	add_action( 'wp_ajax_get_post_title', 'get_post_title' );
	function get_post_title() {
		query_posts('paged='.$_GET['page']);
		while (have_posts()) {
			the_post();
			if ( has_post_thumbnail() ) {
				$json[] = array('title' => get_the_time('Y-m-d'), 'image' => get_the_post_thumbnail(), 'content' => trim(strip_tags(get_the_content())));
			} else {
				$json[] = array('title' => get_the_time('Y-m-d'), 'image' => get_first_image(get_the_content()), 'content' => trim(strip_tags(get_the_content())));
			}
		}
	    header( "Content-Type: application/json" );
	    echo json_encode( $json );
		exit;
	}
?>