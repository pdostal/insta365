<?php
	include('mobile_detect.php');
	$detect = new Mobile_Detect;
?>
<!doctype html>
<html lang="cs">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php bloginfo('name'); ?></title>
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<meta name="author" content="Pavel Dostál">
		<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS feed" href="<?php bloginfo('rss2_url'); ?>" />
		<link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/icon.png">
		<!-- START WP_HEAD --><?php wp_head(); ?><!-- STOP WP_HEAD -->
		<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css" media="all" />
		<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/print.css" media="print" />
<?php if($detect->isMobile() && !$detect->isTablet()) { ?>
		<meta name="viewport" content="width=420">
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/mobile.css" media="all" />
<?php } ?>
	</head>
	<body>
		<header>
			<h1><a href="<?php bloginfo('wpurl'); ?>"><?php bloginfo('name'); ?></a></h1>
			<section class="banner">
				<?php dynamic_sidebar( 'header' ); ?>
			</section>
		</header>