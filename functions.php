<?php
    function my_function_admin_bar() { return false; }
    add_filter('show_admin_bar' , 'my_function_admin_bar');

	add_theme_support( 'post-thumbnails' );

	function get_first_image($post) {
		preg_match_all ('~<img [^\>]*\ />~', $post->post_content, $aPics);
		if (count($aPics[0]) > 0) {
		   for ($i=0; $i < count($aPics[0]); $i++) {
		        return $aPics[0][$i];
		   };
		} else {
			return '<img src="" alt="No image" />';
		}
	}
?>