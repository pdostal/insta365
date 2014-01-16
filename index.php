<?php include('header.php'); ?>
<section id="main">
	<div class="container">
		<?php $i = 1; if (have_posts()) { while (have_posts()) { the_post(); ?>
		<?php if ($i == 4) { $i = 1; } ?>
		<?php if ($i == 1) { ?><div class="rov"><?php } ?>
			<article class="col-md-4">
				<h1 class="title"><span itemprop="datePublished" content="<?php the_time('Y-m-d') ?>"><?php the_time('j. n. Y') ?></span></h1>
				<div class="content">
					<div class="img"><?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } else { echo get_first_image($post); } ?></div>
					<div class="desc">
						<p class="textdesc" itemprop="description"><?php echo strip_tags(get_the_content()); ?></p>
						<span class="textlightbox"><a href="javascript:;">Lightbox</a></span>
						<span class="textclose"><a href="javascript:;">Close</a></span>
					</div>
				</div>
			</article>
		<?php if ($i == 3) { ?></div><div class="clear"></div><?php } ?>
		<?php $i++; } } if ($i !== 4) { ?></div><?php } ?>
	</div>
</section>
<?php include('footer.php'); ?>
