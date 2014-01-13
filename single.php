<?php
	include('header.php');
?>
<section id="main">
	<article class="container single" itemscope itemtype="http://schema.org/ImageObject">
		<?php if (have_posts()) { while (have_posts()) { the_post(); ?>
			<h1 class="title" itemprop="datePublished" content="<?php the_time('Y-m-d') ?>"><?php the_time('j. n. Y') ?></h1>
			<div class="author" itemprop="author" style="display: none;"><?php echo get_the_author_firstname().' '.get_the_author_lastname(); ?></div>
			<div class="content">
				<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } else { echo get_first_image($post); } ?>
				<div class="text single" itemprop="description"><p>
						<span class="textlightbox"><a href="javascript:;">Lightbox</a></span>
						<?php echo strip_tags(get_the_content()); ?>
					</p></div>
			</div>
			<!--<div class="tags"><?php the_tags('Tags: #', ' #', ''); ?></div>-->
		<?php } } ?>
	</article>
</section>
<?php include('footer.php'); ?>
