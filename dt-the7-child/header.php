<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div class="wf-container wf-clearfix">
 *
 * @package presscore
 * @since presscore 0.1
 */

// File Security Check
if ( ! defined( 'ABSPATH' ) ) { exit; }

?><!DOCTYPE html>

<html class="no-js" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
	<title><?php echo presscore_blog_title(); ?></title>
	<link rel="icon" href="/wp-content/uploads/favicon1.ico" type="image/x-icon">
	<!--[if IE]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php
	wp_head();
	?>


</head>

<body <?php body_class(); ?>>

<?php do_action( 'presscore_body_top' ); ?>

	<?php get_template_part( 'templates/header/top-bar', of_get_option('top_bar-content_alignment', 'side') ); ?>

<div class="page-container">
	<div class="mp-pusher" id="mp-pusher">

	<div id="mp-menu" class="mp-menu">
		<div class="mp-level">
			<h2 class="icon">Shop Categories</h2>
			<ul>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/household/">Household</a>
					<div class="mp-level">
						<h2 class="icon icon-display">Household</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/household/batteries-lighting">Batteries &amp; Lighting</a></li>
							<li><a href="/product-category/household/cleaning-products">Cleaning Products</a></li>
							<li><a href="/product-category/household/food-storage-serving">Food Storage &amp; Serving</a></li>
							<li><a href="/product-category/household/home-essentials">Home Essentials</a></li>
							<li><a href="/product-category/household/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/bath-body/">Bath &amp; Body</a>
					<div class="mp-level">
						<h2 class="icon">Bath &amp; Body</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/bath-body/bath-spa-treatment">Bath &amp; Spa Treatment</a></li>
							<li><a href="/product-category/bath-body/bath-accessories">Bath Accessories</a></li>
							<li><a href="/product-category/bath-body/body-moisturizers">Body Moisturizers</a></li>
							<li><a href="/product-category/bath-body/body-washes">Body Washes</a></li>
							<li><a href="/product-category/bath-body/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/diet-fitness/">Diet &amp; Fitness</a>
					<div class="mp-level">
						<h2 class="icon icon-shop">Diet &amp; Fitness</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/diet-fitness/digestion-cleansing">Digestion &amp; Cleansing</a></li>
							<li><a href="/product-category/diet-fitness/nutrition-bars">Nutrition Bars</a></li>
							<li><a href="/product-category/diet-fitness/sports-nutrition">Sports Nutrition</a></li>
							<li><a href="/product-category/diet-fitness/water-bottles">Water Bottles</a></li>
							<li><a href="/product-category/diet-fitness/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/grocery/">Grocery</a>
					<div class="mp-level">
						<h2 class="icon icon-display">Grocery</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/grocery/baking">Baking</a></li>
							<li><a href="/product-category/grocery/beverages">Beverages</a></li>
							<li><a href="/product-category/grocery/breakfast">Breakfast</a></li>
							<li><a href="/product-category/grocery/coffee-tee">Coffee &amp; Tea</a></li>
							<li><a href="/product-category/grocery/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/hair-care/">Hair Care</a>
					<div class="mp-level">
						<h2 class="icon icon-display">Hair Care</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/hair-care/conditioners">Conditioners</a></li>
							<li><a href="/product-category/hair-care/curly">Curly</a></li>
							<li><a href="/product-category/hair-care/hair-accessories">Hair Accessories</a></li>
							<li><a href="/product-category/hair-care/hair-color">Hair Color</a></li>
							<li><a href="/product-category/hair-care/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/makeup-fragrance/">Makeup & Fragrance</a>
					<div class="mp-level">
						<h2 class="icon icon-display">Makeup & Fragrance</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/makeup-fragrance/eyes">Eyes</a></li>
							<li><a href="/product-category/makeup-fragrance/face">Face</a></li>
							<li><a href="/product-category/makeup-fragrance/fragrances">Fragrances</a></li>
							<li><a href="/product-category/makeup-fragrance/lips">Lips</a></li>
							<li><a href="/product-category/makeup-fragrance/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/medicine-cabinet/">Medicine Cabinet</a>
					<div class="mp-level">
						<h2 class="icon icon-display">Medicine Cabinet</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/medicine-cabinet/allergy">Allergy</a></li>
							<li><a href="/product-category/medicine-cabinet/cold">Cold &amp; Flu</a></li>
							<li><a href="/product-category/medicine-cabinet/condoms-contraceptives">Condoms &amp; Contraceptives</a></li>
							<li><a href="/product-category/medicine-cabinet/cough">Cough</a></li>
							<li><a href="/product-category/medicine-cabinet/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/personal-care/">Personal Care</a>
					<div class="mp-level">
						<h2 class="icon icon-display">Personal Care</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/personal-care/baby-care">Baby Care</a></li>
							<li><a href="/product-category/personal-care/deodorannts">Deodorants</a></li>
							<li><a href="/product-category/personal-care/eye-contacts-care">Eye &amp; Contacts Care</a></li>
							<li><a href="/product-category/personal-care/feminine-care">Feminine Care</a></li>
							<li><a href="/product-category/personal-care/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/skin-care/">Skin Care</a>
					<div class="mp-level">
						<h2 class="icon icon-display">Skin Care</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/skin-care/dematological-skin-care">Dermatological Skin Care</a></li>
							<li><a href="/product-category/skin-care/eye-creams-treatments">Eye Creams &amp; Treatments</a></li>
							<li><a href="/product-category/skin-care/face-moisturizers">Face Moisturizers</a></li>
							<li><a href="/product-category/skin-care/face-cleansers">Face Cleansers</a></li>
							<li><a href="/product-category/skin-care/">View All</a></li>
						</ul>
					</div>
				</li>
				<li class="icon icon-arrow-left">
					<a class="icon" href="/product-category/vitamins/">Vitamins</a>
					<div class="mp-level">
						<h2 class="icon icon-display">Vitamins</h2>
						<a class="mp-back" href="#">back</a>
						<ul>
							<li><a href="/product-category/vitamins/antioxidants">Antioxidants</a></li>
							<li><a href="/product-category/vitamins/calcium-minerals">Calcium &amp; Minerals</a></li>
							<li><a href="/product-category/vitamins/condition-specific">Condition Specific</a></li>
							<li><a href="/product-category/vitamins/herbs-botanicals">Herbs &amp; Botanicals</a></li>
							<li><a href="/product-category/vitamins/">View All</a></li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
<div class="scroller">
<div class="scroller-inner">
<div id="page"<?php if ( 'boxed' == of_get_option('general-layout', 'wide') ) echo ' class="boxed"'; ?>>


<?php if ( apply_filters( 'presscore_show_header', true ) ) : ?>

	<?php get_template_part( 'templates/header/header', of_get_option( 'header-layout', 'left' ) ); ?>

<?php endif; // show header ?>

	<?php do_action( 'presscore_before_main_container' ); ?>

	<div id="main" <?php presscore_main_container_classes(); ?>><!-- class="sidebar-none", class="sidebar-left", class="sidebar-right" -->

<?php if ( presscore_is_content_visible() ): ?>

		<div class="main-gradient"></div>

		<div class="wf-wrap">
			<div class="wf-container-main">

				<?php do_action( 'presscore_before_content' ); ?>

<?php endif; ?>
