<?php
	include('header.php');
?>
<section id="main">
	<div class="container">
		<?php $i = 1; if (have_posts()) { while (have_posts()) { the_post(); ?>
		<?php if ($i == 4) { $i = 1; } ?>
		<?php if ($i == 1) { ?><div class="rov"><?php } ?>
			<div class="col-md-4">
				<h1 class="title"><?php the_title(); ?></h1>
				<div class="content"><?php the_content(); ?></div>
				<div class="date"><?php the_time('j. n. Y') ?></div>
				<div class="clear"></div>
				<div class="category"><span class="desc">Kategorie: </span><?php the_category(', '); ?></div>
				<div class="tags"><span class="desc">Štítky: </span><?php the_tags('', ', ', ''); ?></div>
			</div>
		<?php if ($i == 3) { ?></div><?php } ?>
		<?php $i++; } } if ($i !== 4) { ?></div><?php } ?>
	</div>
</section>
<?php
	include('footer.php');
?>