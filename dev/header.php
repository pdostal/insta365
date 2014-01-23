<!DOCTYPE html>
<html>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php bloginfo('name'); ?></title>
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<meta name="author" content="Pavel Dostál">
		<?php wp_head(); ?>
		<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS feed" href="<?php bloginfo('rss2_url'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="<?php bloginfo('template_url'); ?>/bootstrap.min.css" rel="stylesheet">
		<script src="<?php bloginfo('template_url'); ?>/bootstrap.min.js"></script>
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->
		<link href='http://fonts.googleapis.com/css?family=Allan' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Pompiere' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Montserrat+Alternates' rel='stylesheet' type='text/css'>
		<link href="<?php bloginfo('template_url'); ?>/lightbox.css" rel="stylesheet"/>
		<script src="<?php bloginfo('template_url'); ?>/lightbox.min.js"></script>
		<script>var ajax_request_url = '<?php echo admin_url( 'admin-ajax.php' ); ?>'</script>
		<script src="<?php bloginfo('template_url'); ?>/script.js"></script>
		<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css" media="all" />
	</head>
	<body>
	<nav id='header' class='navbar navbar-default navbar-fixed-top navbar-inner' role='navigation'>
      <header>
      	<div class='navbar-header'>
	        <h1 class='navbar-brand'><a href="<?php bloginfo('wpurl'); ?>" title="<?php bloginfo('description'); ?>"><?php bloginfo('name'); ?></a></h1>
        </div>
        <!--<p class="navbar-text navbar-right"><?php bloginfo('description'); ?></p>-->
      </header>
	</nav>