<?php include('header.php'); ?>
<section id="main">
	<div class="container">
		<?php $i = 1; if (have_posts()) { while (have_posts()) { the_post(); ?>
		<?php if ($i == 4) { $i = 1; } ?>
		<?php if ($i == 1) { ?><div class="rov"><?php } ?>
			<article class="col-md-4" itemscope itemtype="http://schema.org/ImageObject">
				<h1 class="title"><a href="<?php the_permalink(); ?>" itemprop="datePublished" content="<?php the_time('Y-m-d') ?>"><?php the_time('j. n. Y') ?></a></h1>
				<div class="author" itemprop="author" style="display: none;"><?php echo get_the_author_firstname().' '.get_the_author_lastname(); ?></div>
				<div class="content"><?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } else { echo get_first_image($post); } ?></div>
				<div class="text" style="display: none;" itemprop="description"><?php echo strip_tags(get_the_content()); ?></div>
			</article>
		<?php if ($i == 3) { ?></div><div class="clear"></div><?php } ?>
		<?php $i++; } } if ($i !== 4) { ?></div><?php } ?>
	</div>
</section>
<?php include('footer.php'); ?>
