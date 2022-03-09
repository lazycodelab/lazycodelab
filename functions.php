<?php
/**
 * Twenty Twenty-Two functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Twenty Twenty-Two 1.0
 */

if ( ! function_exists( 'lcl_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function lcl_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'lcl-style',
			get_template_directory_uri() . '/assets/app.css',
			array(),
			$version_string
		);

		// Add styles inline.
		//wp_add_inline_style( 'lcl-style', lcl_get_font_face_styles() );

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'lcl-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'lcl_styles' );

// Remove shitty WordPress inline styling.
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );

/**
 * Add custom Tailwind classes to body tag.
 *
 */
add_filter( 'body_class','customBodyClasses' );
function customBodyClasses( $classes ) {
    $classes[] = 'antialiased overflow-x-hidden bg-dark-corn-blue bg-body text-almond-white font-text selection:bg-indigo-400 selection:text-purple-900';

    return $classes;
}

function wpdocs_five_posts_on_homepage( $query ) {

	if( $query->is_main_query() && ! is_admin() ) {
		//$query1 = new WP_Query( 'posts_per_page=5' );


	//if ( $query1->have_posts() ) : while ( $query1->have_posts() ) : $query1->the_post();
	if ( have_posts() ) : while ( have_posts() ) : the_post();
    echo '<ul>';
	echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</a></li>';
    //while( have_posts() ): the_post();
    //endwhile;
    echo '</ul>';

	endwhile;
	wp_reset_postdata();
	else : ?>


 	<!-- The very first "if" tested to see if there were any Posts to -->
 	<!-- display.  This "else" part tells what do if there weren't any. -->
 	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>


 	<!-- REALLY stop The Loop. -->
 <?php endif;
}
}
//add_action( 'pre_get_posts', 'wpdocs_five_posts_on_homepage');
//add_action( 'the_post', 'wpdocs_five_posts_on_homepage' );
