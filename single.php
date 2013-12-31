<?php
	include('header.php');
?>
<section id="main">
	<article class="container single">
		<?php if (have_posts()) { while (have_posts()) { the_post(); ?>
			<h1 class="title"><?php the_time('j. n. Y') ?></h1>
			<div class="content"><?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } else { echo get_first_image($post); } ?></div>
			<div class="tags"><?php the_tags('Tags: #', ' #', ''); ?></div>
		<?php } } ?>
	</article>
</section>
<?php include('footer.php'); ?>