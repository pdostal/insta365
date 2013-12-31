<?php include('header.php'); ?>
<section id="main">
	<div class="container">
		<?php $i = 1; if (have_posts()) { while (have_posts()) { the_post(); ?>
		<?php if ($i == 4) { $i = 1; } ?>
		<?php if ($i == 1) { ?><div class="rov"><?php } ?>
			<article class="col-md-4">
				<h1 class="title"><a href="<?php the_permalink(); ?>"><?php the_time('j. n. Y') ?></a></h1>
				<div class="content"><?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } else { echo get_first_image($post); } ?></div>
			</article>
		<?php if ($i == 3) { ?></div><div class="clear"></div><?php } ?>
		<?php $i++; } } if ($i !== 4) { ?></div><?php } ?>
	</div>
</section>
<?php include('footer.php'); ?>