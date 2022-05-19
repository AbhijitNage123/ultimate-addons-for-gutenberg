<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Add fonts.
UAGB_Block_JS::blocks_star_rating_gfont( $attr );

$t_selectors = array();
$m_selectors = array();
$selectors   = array();

$alignment       = 'flex-start';
$stack_alignment = $attr['align'];
if ( '' !== $attr['align'] ) {
	if ( 'right' === $attr['align'] ) {
		$alignment = 'flex-end';
	}
	if ( 'center' === $attr['align'] ) {
		$alignment = 'center';
	}
	if ( 'full' === $attr['align'] ) {
		$alignment       = 'space-between';
		$stack_alignment = 'left';
	}
}

if ( ! function_exists( 'flex_alignment' ) ) {

	/** Since title text is set to flex, we need this function so that stack alignment doesn't break.
	 * It converts the normal text-align values to flex-alignment based values.
	 *
	 * @param string $textAlign Alignment value from text-align property.
	 */
	function flex_alignment( $textAlign ) {

		switch ( $textAlign ) {

			case 'left':
				return 'start';
			case 'center':
				return 'center';
			case 'right':
				return 'end';
			default:
				return 'start';
		}

	}
}

$selectors = array(
	' .uag-star-rating'           => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['size'], 'px' ),
	),
	' .uag-star-rating > span'    => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
		'color'        => $attr['unmarkedColor'],
	),
	' .uag-star:nth-child(-n+' . floor( $attr['rating'] ) . ')' => array(
		'color' => $attr['color'],
	),
	' .uag-star-rating__title'    => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
		'font-family' => $attr['fontFamily'],
		'font-weight' => $attr['fontWeight'],
		'line-height' => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
		'color'       => $attr['titleColor'],
	),
	'.wp-block-uagb-star-rating ' => array(
		'justify-content' => $alignment,
		'text-align'      => $stack_alignment,
	),
);

$index = 'margin-right';
if ( 'stack' === $attr['layout'] ) {
	$index                                    = 'margin-bottom';
	$selectors['.wp-block-uagb-star-rating '] = array(
		'display'    => 'block',
		'text-align' => $stack_alignment,
	);

	// Since title text is set to flex, we need this property that aligns flex objects.
	$selectors[' .uag-star-rating__title '] = array(
		'justify-content' => flex_alignment( $stack_alignment ),
	);
}

$selectors[' .uag-star-rating__title'][ $index ]   = UAGB_Helper::get_css_value( $attr['titleGap'], 'px' );
$t_selectors[' .uag-star-rating__title'][ $index ] = UAGB_Helper::get_css_value( $attr['titleGapTablet'], 'px' );
$m_selectors[' .uag-star-rating__title'][ $index ] = UAGB_Helper::get_css_value( $attr['titleGapMobile'], 'px' );
$t_selectors[' .uag-star-rating']                  = array(
	'font-size' => UAGB_Helper::get_css_value( $attr['sizeTablet'], 'px' ),
);
$t_selectors[' .uag-star-rating > span']           = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['gapTablet'], 'px' ),
);
$m_selectors[' .uag-star-rating']                  = array(
	'font-size' => UAGB_Helper::get_css_value( $attr['sizeMobile'], 'px' ),
);
$m_selectors[' .uag-star-rating > span']           = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['gapMobile'], 'px' ),
);

$remainder = ( $attr['rating'] - floor( $attr['rating'] ) );
$width     = $remainder * 100;

if ( 0 !== $width ) {
	$selectors[ ' .uag-star:nth-child(' . ceil( $attr['rating'] ) . '):before' ] = array(
		'color'    => $attr['color'],
		'width'    => UAGB_Helper::get_css_value( $width, '%' ),
		'position' => 'absolute',
		'content'  => "'★'",
		'overflow' => 'hidden',
	);
	$selectors[ ' .uag-star:nth-child(' . ceil( $attr['rating'] ) . ')' ]        = array(
		'position' => 'relative',
	);
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, '', ' .uag-star-rating__title', $combined_selectors );


return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . substr( $attr['block_id'], 0, 8 ) );
