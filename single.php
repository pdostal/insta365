<?php
	include('header.php');
	include('sidebar.php');
?>
<section id="main">
<?php if (have_posts()) { while (have_posts()) { the_post(); ?>
	<article>
		<header>
			<h1 class="title"><?php the_title(); ?></h1>
			<div class="date"><?php the_time('j. n. Y') ?></div>
			<div class="clear"></div>
			<div class="category"><span class="desc">Kategorie: </span><?php the_category(', '); ?></div>
			<div class="tags"><span class="desc">Štítky: </span><?php the_tags('', ', ', ''); ?></div>
		</header>
		<div class="content"><?php the_content(); ?></div>
	</article>
<?php } } ?>
</section>
<?php
	include('footer.php');
?>