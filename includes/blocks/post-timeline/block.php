<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/post-timeline';
$block_data = array(
	'doc'                 => 'post-timeline',
	'slug'                => '',
	'admin_categories'    => array( 'post', 'content' ),
	'link'                => 'post-timeline',
	'title'               => __( 'Post Timeline', 'ultimate-addons-for-gutenberg' ),
	'description'         => __( 'The Timeline block lets you create beautiful timelines of Posts on your website.', 'ultimate-addons-for-gutenberg' ),
	'default'             => true,
	'extension'           => false,
	'static_dependencies' => array(
		'uagb-timeline-js' => array(
			'src'  => UAGB_Scripts_Utils::get_js_url( 'timeline' ),
			'dep'  => array( 'jquery' ),
			'type' => 'js',
		),
	),
	'priority'            => 18,
	'static_css'          => 'timeline',
	'dynamic_assets'      => array(
		'dir' => 'post-timeline',
	),
);
