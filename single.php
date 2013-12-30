<?php
	include('header.php');
?>
<section id="main">
	<article class="container single">
		<?php if (have_posts()) { while (have_posts()) { the_post(); ?>
		<h1 class="title"><?php the_title(); ?></h1>
		<div class="content"><?php the_content(); ?></div>
		<div class="date"><?php the_time('j. n. Y') ?></div>
		<div class="clear"></div>
		<div class="category"><span class="desc">Kategorie: </span><?php the_category(', '); ?></div>
		<div class="tags"><span class="desc">Štítky: </span><?php the_tags('', ', ', ''); ?></div>
		<?php } } ?>
	</article>
</section>
<?php
	include('footer.php');
?>