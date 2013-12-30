<!DOCTYPE html>
<html>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php bloginfo('name'); ?></title>
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<meta name="author" content="Pavel Dostál">
		<link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS feed" href="<?php bloginfo('rss2_url'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="<?php bloginfo('template_url'); ?>/bootstrap.min.css" rel="stylesheet">
		<script src="https://code.jquery.com/jquery.js"></script>
		<script src="<?php bloginfo('template_url'); ?>/bootstrap.min.js"></script>
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->
		<?php wp_head(); ?>
		<link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css" media="all" />
	</head>
	<body>
	<nav id='header' class='navbar navbar-default navbar-fixed-top navbar-inner' role='navigation'>
      <header class='navbar-header'>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <h1 class='navbar-brand'><a href="<?php bloginfo('wpurl'); ?>"><?php bloginfo('name'); ?></a></h1>
      </header>
	</nav>