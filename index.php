<?php
	include('header.php');
	include('sidebar.php');
?>
<section id="main">
<?php
	if (have_posts()) {
?>
	<ul id="postsindex">
	<?php
		while (have_posts()) {
			the_post();
	?>
		<li id="post<?php echo the_ID(); ?>">
				<span class="date"><?php the_time('l, F Y'); ?></span>
				<h1 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
				<div class="content"><?php echo strip_tags(get_the_excerpt()); ?></div>
		</li>
	<?php } ?>
	</ul>
<?php } ?>
</section>
<?php
	include('footer.php');
?>