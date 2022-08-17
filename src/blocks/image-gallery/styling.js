import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import getMatrixAlignment from '@Controls/getMatrixAlignment';
import generateBorderRadius from '@Controls/generateBorderRadius';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateSpacing from '@Controls/generateSpacing';
import getPrecisePercentage from '@Controls/getPrecisePercentage';

function styling( props ) {
	const {
		// Tile Calcualtion
		tileSize,

		// Block Layout.
		feedLayout,
		imageDisplayCaption,

		// Gallery Layout Settings.
		feedMarginTop,
		feedMarginRight,
		feedMarginBottom,
		feedMarginLeft,
		feedMarginTopTab,
		feedMarginRightTab,
		feedMarginBottomTab,
		feedMarginLeftTab,
		feedMarginTopMob,
		feedMarginRightMob,
		feedMarginBottomMob,
		feedMarginLeftMob,
		feedMarginUnit,
		feedMarginUnitTab,
		feedMarginUnitMob,
		gridImageGap,
		gridImageGapTab,
		gridImageGapMob,
		gridImageGapUnit,
		gridImageGapUnitTab,
		gridImageGapUnitMob,

		// Caption Settings.
		captionVisibility,
		captionDisplayType,
		imageCaptionAlignment,
		captionPaddingTop,
		captionPaddingRight,
		captionPaddingBottom,
		captionPaddingLeft,
		captionPaddingTopTab,
		captionPaddingRightTab,
		captionPaddingBottomTab,
		captionPaddingLeftTab,
		captionPaddingTopMob,
		captionPaddingRightMob,
		captionPaddingBottomMob,
		captionPaddingLeftMob,
		captionPaddingUnit,
		captionPaddingUnitTab,
		captionPaddingUnitMob,
		captionGap,
		captionGapUnit,
		
		// Grid | Tab | Tiled Specific Settings.
		columnsDesk,
		columnsTab,
		columnsMob,

		// Carousel Specific Settings.
		carouselSquares,

		// Pagination Settings.
		feedPagination,
		paginateUseDots,
		paginateUseLoader,
		paginateButtonAlign,
		paginateButtonPaddingTop,
		paginateButtonPaddingRight,
		paginateButtonPaddingBottom,
		paginateButtonPaddingLeft,
		paginateButtonPaddingTopTab,
		paginateButtonPaddingRightTab,
		paginateButtonPaddingBottomTab,
		paginateButtonPaddingLeftTab,
		paginateButtonPaddingTopMob,
		paginateButtonPaddingRightMob,
		paginateButtonPaddingBottomMob,
		paginateButtonPaddingLeftMob,
		paginateButtonPaddingUnit,
		paginateButtonPaddingUnitTab,
		paginateButtonPaddingUnitMob,
		
		// Image Styling.
		imageBorderTopLeftRadius,
		imageBorderTopRightRadius,
		imageBorderBottomRightRadius,
		imageBorderBottomLeftRadius,
		imageBorderTopLeftRadiusTablet,
		imageBorderTopRightRadiusTablet,
		imageBorderBottomRightRadiusTablet,
		imageBorderBottomLeftRadiusTablet,
		imageBorderTopLeftRadiusMobile,
		imageBorderTopRightRadiusMobile,
		imageBorderBottomRightRadiusMobile,
		imageBorderBottomLeftRadiusMobile,
		imageBorderRadiusUnit,
		imageBorderRadiusUnitTablet,
		imageBorderRadiusUnitMobile,
		imageBorderRadiusUnitLink,
		imageEnableZoom,
		imageZoomType,
		captionBackgroundEnableBlur,
		captionBackgroundBlurAmount,

		// Caption Font.
		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSize,
		captionFontSizeTab,
		captionFontSizeMob,
		captionLineHeightType,
		captionLineHeight,
		captionLineHeightTab,
		captionLineHeightMob,

		// Pagination Font.
		loadMoreFontFamily,
		loadMoreFontWeight,
		loadMoreFontStyle,
		loadMoreTransform,
		loadMoreDecoration,
		loadMoreFontSizeType,
		loadMoreFontSize,
		loadMoreFontSizeTab,
		loadMoreFontSizeMob,
		loadMoreLineHeightType,
		loadMoreLineHeight,
		loadMoreLineHeightTab,
		loadMoreLineHeightMob,

		// Caption Styling.
		captionBackgroundBlurOpacity,
		captionBackgroundBlurOpacityHover,
		captionBackgroundEffect,
		captionBackgroundEffectHover,
		captionBackgroundEffectAmount,
		captionBackgroundEffectAmountHover,
		captionColor,
		captionColorHover,
		captionBackgroundColor,
		captionBackgroundColorHover,
		overlayColor,
		overlayColorHover,
		captionSeparateColors,

		// Pagination Styling.
		paginateArrowDistance,
		paginateArrowDistanceUnit,
		paginateLoaderSize,
		paginateButtonTextColor,
		paginateButtonTextColorHover,
		paginateColor,
		paginateColorHover,

		// Border Hover Colors.
		buttonBorderHColor,
		arrowBorderHColor,
	} = props.attributes;

	const buttonBorderCSS = generateBorderCSS( props.attributes, 'button' );
	const buttonBorderCSSTablet = generateBorderCSS( props.attributes, 'button', 'tablet' );
	const buttonBorderCSSMobile = generateBorderCSS( props.attributes, 'button', 'mobile' );
	const arrowBorderCSS = generateBorderCSS( props.attributes, 'arrow' );
	const arrowBorderCSSTablet = generateBorderCSS( props.attributes, 'arrow', 'tablet' );
	const arrowBorderCSSMobile = generateBorderCSS( props.attributes, 'arrow', 'mobile' );

	let selectors = {

		// Feed Selectors

		'.uag-image-gallery': {
			'margin': generateSpacing(
				feedMarginUnit,
				feedMarginTop,
				feedMarginRight,
				feedMarginBottom,
				feedMarginLeft
			),
		},
		'.uag-image-gallery__layout--carousel .uagb-slick-carousel': {
			'padding': generateSpacing(
				feedMarginUnit,
				feedMarginTop,
				feedMarginRight,
				feedMarginBottom,
				feedMarginLeft
			),
		},

		// Control Settings

		'.uag-image-gallery__control-arrows svg': {
			'fill': paginateColor,
		},
		'.uag-image-gallery__control-arrows:hover svg': {
			'fill': paginateColorHover,
		},
		'.uag-image-gallery__control-arrows--carousel': {
			...arrowBorderCSS,
		},
		'.uag-image-gallery__control-arrows--carousel:hover': {
			'border-color': arrowBorderHColor,
		},
		'.uag-image-gallery__control-arrows--carousel.slick-prev': {
			'left': generateCSSUnit( paginateArrowDistance, paginateArrowDistanceUnit ),
		},		
		'.uag-image-gallery__control-arrows--carousel.slick-next': {
			'right': generateCSSUnit( paginateArrowDistance, paginateArrowDistanceUnit ),
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots': {
			'margin-bottom': generateCSSUnit( feedMarginBottom, feedMarginUnit ),
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots li button:before': {
			'color': paginateColor,
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots li button:hover:before': {
			'color': paginateColorHover,
		},
		'.uag-image-gallery__control-dots li button::before': {
			'color': paginateColor,
		},
		'.uag-image-gallery__control-dots li button:hover::before': {
			'color': paginateColorHover,
		},
		'.uag-image-gallery__control-loader div': {
			'background-color': paginateColor,
			'width': generateCSSUnit( paginateLoaderSize, 'px' ),
			'height': generateCSSUnit( paginateLoaderSize, 'px' ),
		},
		'.uag-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnit,
				paginateButtonPaddingTop,
				paginateButtonPaddingRight,
				paginateButtonPaddingBottom,
				paginateButtonPaddingLeft
			),
			'color': paginateButtonTextColor,
			'background-color': paginateColor,
			'font-family': loadMoreFontFamily === 'Default' ? '' : loadMoreFontFamily,
			'font-weight': loadMoreFontWeight,
			'font-style': loadMoreFontStyle,
			'text-decoration': loadMoreDecoration,
			'text-transform': loadMoreTransform,
			'font-size': generateCSSUnit( loadMoreFontSize, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeight, loadMoreLineHeightType ),
			...buttonBorderCSS,
		},
		'.uag-image-gallery__control-button:hover': {
			'color': paginateButtonTextColorHover,
			'background-color': paginateColorHover,
			'border-color': buttonBorderHColor,
		},
		'.uag-image-gallery__control-lightbox': {
			'top': `calc( ${
				document.getElementById( 'wpadminbar' ).classList.contains( 'mobile' )
					? document.getElementById( 'wpadminbar' ).offsetHeight
					: 0
			}px + ${
				document.querySelector( '.interface-interface-skeleton__header' ).offsetHeight
			}px )`,
			'width': `calc( 100vw - ${
				document.querySelector( '.interface-interface-skeleton__sidebar' )
					? document.querySelector( '.interface-interface-skeleton__sidebar' ).offsetWidth
					: 0
			}px )`,
			'height': `calc( 100vh - ${
				document.getElementById( 'wpadminbar' ).classList.contains( 'mobile' )
					? document.getElementById( 'wpadminbar' ).offsetHeight
					: 0
			}px - ${
				document.querySelector( '.interface-interface-skeleton__header' ).offsetHeight
			}px - ${
				document.querySelector( '.interface-interface-skeleton__footer' )
					? document.querySelector( '.interface-interface-skeleton__footer' ).offsetHeight
					: 0
			}px )`,
		},

		// Layout and Media Wrapper Selectors
		
		'.uag-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGap,
				gridImageGapUnit
			),
		},
		'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnit,
				gridImageGap,
			),
		},
		'.uag-image-gallery__layout--carousel': {
			'margin': '0px'
		},
		'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnit,
				gridImageGap,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnit,
				gridImageGap,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer': {
			'width': `calc( ${ getPrecisePercentage( columnsDesk ) } )`,
			'aspect-ratio': 1,
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper--wide': {
			'width': `calc( ${ tileSize }px * 2 )`,
			'height': `${ tileSize }px`,
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper--tall': {
			'height': `calc( ${ tileSize }px * 2 )`,
			'width': `${ tileSize }px`,
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media--tiled-wide': {
			'width': `calc( ( ${ tileSize }px * 2 ) - ( ${ generateSpacing( gridImageGapUnit, gridImageGap ) } * 2 ) )`,
			'height': `calc( ${ tileSize }px - ( ${ generateSpacing( gridImageGapUnit, gridImageGap ) } * 2 ) )`,
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media--tiled-tall': {
			'height': `calc( ( ${ tileSize }px * 2 ) - ( ${ generateSpacing( gridImageGapUnit, gridImageGap ) } * 2 ) )`,
			'width': `calc( ${ tileSize }px - ( ${ generateSpacing( gridImageGapUnit, gridImageGap ) } * 2 ) )`,
		},
		'.uag-image-gallery-media': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnit,
				imageBorderTopLeftRadius,
				imageBorderTopRightRadius,
				imageBorderBottomRightRadius,
				imageBorderBottomLeftRadius,
			),
		},


		// Thumbnail Selectors

		// '.uag-image-gallery-media__thumbnail': {
		// 	'border-radius': generateBorderRadius(
		// 		imageBorderRadiusUnit,
		// 		imageBorderRadius,
		// 	),
		// },
		'.uag-image-gallery-media__thumbnail-blurrer': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnit,
				imageBorderTopLeftRadius,
				imageBorderTopRightRadius,
				imageBorderBottomRightRadius,
				imageBorderBottomLeftRadius,
			),
			'-webkit-backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmount,
				'px'
			) } )`,
			'backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmount,
				'px'
			) } )`,
			'opacity': generateCSSUnit(
				captionBackgroundBlurOpacity,
				'%'
			),
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-blurrer': {
			'opacity': generateCSSUnit(
				captionBackgroundBlurOpacityHover,
				'%'
			),
		},

		// Caption Wrapper Selectors

		'.uag-image-gallery-media__thumbnail-caption-wrapper': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnit,
				imageBorderTopLeftRadius,
				imageBorderTopRightRadius,
				imageBorderBottomRightRadius,
				imageBorderBottomLeftRadius,
			),
		},
		'.uag-image-gallery-media__thumbnail-caption-wrapper--overlay': {
			'background-color': imageDisplayCaption ? ( ( captionVisibility === 'hover' ) ? 'rgba(0,0,0,0)' : captionBackgroundColor ) : overlayColor,
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption-wrapper--overlay': {
			'background-color': imageDisplayCaption ? ( ( captionVisibility === 'antiHover' ) ? 'rgba(0,0,0,0)' : ( ( captionVisibility === 'always' && captionSeparateColors ) ? captionBackgroundColorHover : captionBackgroundColor ) ) : overlayColorHover,
		},		
		'.uag-image-gallery-media__thumbnail-caption-wrapper--bar-inside': {
			'-webkit-align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'-webkit-justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
			'justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
		},

		// Caption Selectors

		'.uag-image-gallery-media__thumbnail-caption': {
			'color': ( captionVisibility === 'hover' ) ? 'rgba(0,0,0,0)' : captionColor,
			'text-align': getMatrixAlignment( imageCaptionAlignment, 2 ),
			'font-family': captionFontFamily === 'Default' ? '' : captionFontFamily,
			'font-weight': captionFontWeight,
			'font-style': captionFontStyle,
			'text-decoration': captionDecoration,
			'text-transform': captionTransform,
			'font-size': generateCSSUnit( captionFontSize, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeight, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTop,
				captionPaddingUnit
			),
			'padding-right': generateCSSUnit(
				captionPaddingRight,
				captionPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottom,
				captionPaddingUnit
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeft,
				captionPaddingUnit
			),
		},
		'.uag-image-gallery-media__thumbnail-caption--overlay': {
			'border-radius': generateBorderRadius(
				imageBorderRadiusUnit,
				imageBorderTopLeftRadius,
				imageBorderTopRightRadius,
				imageBorderBottomRightRadius,
				imageBorderBottomLeftRadius,
			),
			'-webkit-align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'-webkit-justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
			'justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
		},		
		'.uag-image-gallery-media__thumbnail-caption--bar-inside': {
			'background-color': ( captionVisibility === 'hover' ) ? 'rgba(0,0,0,0)' : captionBackgroundColor,
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption--bar-inside': {
			'background-color': ( captionVisibility === 'antiHover' ) ? 'rgba(0,0,0,0)' : ( ( captionVisibility === 'always' && captionSeparateColors ) ? captionBackgroundColorHover : captionBackgroundColor ),
		},		
		'.uag-image-gallery-media__thumbnail-caption--bar-outside': {
			'background-color': captionBackgroundColor,
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption--bar-outside': {
			'background-color': captionSeparateColors ? captionBackgroundColorHover : captionBackgroundColor,
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption': {
			'color': ( captionVisibility === 'antiHover' ) ? 'rgba(0,0,0,0)' : ( ( captionVisibility === 'always' && captionSeparateColors ) ? captionColorHover : captionColor ),
		},
	};

	let tabletSelectors = {
		'.uag-image-gallery': {
			'margin': generateSpacing(
				feedMarginUnitTab,
				feedMarginTopTab,
				feedMarginRightTab,
				feedMarginBottomTab,
				feedMarginLeftTab
			),
		},
		'.uag-image-gallery__layout--carousel .uagb-slick-carousel': {
			'padding': generateSpacing(
				feedMarginUnitTab,
				feedMarginTopTab,
				feedMarginRightTab,
				feedMarginBottomTab,
				feedMarginLeftTab
			),
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots': {
			'margin-bottom': generateCSSUnit( feedMarginBottomTab, feedMarginUnitTab ),
		},
		'.uag-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnitTab,
				paginateButtonPaddingTopTab,
				paginateButtonPaddingRightTab,
				paginateButtonPaddingBottomTab,
				paginateButtonPaddingLeftTab
			),
			'font-size': generateCSSUnit( loadMoreFontSizeTab, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeightTab, loadMoreLineHeightType ),
			...buttonBorderCSSTablet,
		},
		'.uag-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGapTab,
				gridImageGapUnitTab
			),
		},
		'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitTab,
				gridImageGapTab,
			),
		},
		'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitTab,
				gridImageGapTab,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitTab,
				gridImageGapTab,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer': {
			'width': `calc( ${ getPrecisePercentage( columnsTab ) } )`,
			'aspect-ratio': 1,
		},
		'.uag-image-gallery-media__thumbnail-caption': {
			'font-size': generateCSSUnit( captionFontSizeTab, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeightTab, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTopTab,
				captionPaddingUnitTab
			),
			'padding-right': generateCSSUnit(
				captionPaddingRightTab,
				captionPaddingUnitTab
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottomTab,
				captionPaddingUnitTab
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeftTab,
				captionPaddingUnitTab
			),
		},
		'.uag-image-gallery__control-arrows--carousel': {
			...arrowBorderCSSTablet,
		},
	};

	let mobileSelectors = {
		'.uag-image-gallery': {
			'margin': generateSpacing(
				feedMarginUnitMob,
				feedMarginTopMob,
				feedMarginRightMob,
				feedMarginBottomMob,
				feedMarginLeftMob
			),
		},
		'.uag-image-gallery__layout--carousel .uagb-slick-carousel': {
			'padding': generateSpacing(
				feedMarginUnitMob,
				feedMarginTopMob,
				feedMarginRightMob,
				feedMarginBottomMob,
				feedMarginLeftMob
			),
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots': {
			'margin-bottom': generateCSSUnit( feedMarginBottomMob, feedMarginUnitMob ),
		},
		'.uag-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnitMob,
				paginateButtonPaddingTopMob,
				paginateButtonPaddingRightMob,
				paginateButtonPaddingBottomMob,
				paginateButtonPaddingLeftMob
			),
			'font-size': generateCSSUnit( loadMoreFontSizeMob, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeightMob, loadMoreLineHeightType ),
			...buttonBorderCSSMobile,
		},
		'.uag-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGapMob,
				gridImageGapUnitMob
			),
		},
		'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitMob,
				gridImageGapMob,
			),
		},
		'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitMob,
				gridImageGapMob,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitMob,
				gridImageGapMob,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer': {
			'width': `calc( ${ getPrecisePercentage( columnsMob ) } )`,
			'aspect-ratio': 1,
		},
		'.uag-image-gallery-media__thumbnail-caption': {
			'font-size': generateCSSUnit( captionFontSizeMob, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeightMob, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTopMob,
				captionPaddingUnitMob
			),
			'padding-right': generateCSSUnit(
				captionPaddingRightMob,
				captionPaddingUnitMob
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottomMob,
				captionPaddingUnitMob
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeftMob,
				captionPaddingUnitMob
			),
		},
		'.uag-image-gallery__control-arrows--carousel': {
			...arrowBorderCSSMobile,
		},
	};

	// Background Effect based styling

	switch( captionBackgroundEffect ){
		case 'none':
			selectors[ '.uag-image-gallery-media__thumbnail' ] = {
				...selectors[ '.uag-image-gallery-media__thumbnail' ],
				'-webkit-filter': `none`,
				'filter': `none`,
			};
			break;
		case 'grayscale':
		case 'sepia':
			selectors[ '.uag-image-gallery-media__thumbnail' ] = {
				...selectors[ '.uag-image-gallery-media__thumbnail' ],
				'-webkit-filter': `${ captionBackgroundEffect }( ${ generateCSSUnit(
					captionBackgroundEffectAmount,
					'%'
				) } )`,
				'filter': `${ captionBackgroundEffect }( ${ generateCSSUnit(
					captionBackgroundEffectAmount,
					'%'
				) } )`,
			};
			break;
	};	
	switch( captionBackgroundEffectHover ){
		case 'none':
			selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ] = {
				'-webkit-filter': `none`,
				'filter': `none`,
			};
			break;
		case 'grayscale':
		case 'sepia':
			selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ] = {
				'-webkit-filter': `${ captionBackgroundEffectHover }( ${ generateCSSUnit(
					captionBackgroundEffectAmountHover,
					'%'
				) } )`,
				'filter': `${ captionBackgroundEffectHover }( ${ generateCSSUnit(
					captionBackgroundEffectAmountHover,
					'%'
				) } )`,
			};
			break;
	};
	if ( ! captionBackgroundEnableBlur ){
		selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ] = {
			...selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ],
			'-webkit-backdrop-filter': 'none',
			'backdrop-filter': 'none',
		};
	}

	// Caption Type based styling

	if ( captionDisplayType === 'bar-outside' && imageDisplayCaption ){
		switch( getMatrixAlignment( imageCaptionAlignment, 1 ) ){
			case 'top':
				selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ],
					'border-radius': generateBorderRadius( imageBorderRadiusUnit, imageBorderTopLeftRadius, imageBorderTopRightRadius, 0, 0 ),
				};
				selectors[ '.uag-image-gallery-media' ] = {
					...selectors[ '.uag-image-gallery-media' ],
					'border-radius': generateBorderRadius( imageBorderRadiusUnit, 0, 0, imageBorderBottomRightRadius, imageBorderBottomLeftRadius ),
				};
				selectors[ '.uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail' ],
					'border-radius': generateBorderRadius( imageBorderRadiusUnit, 0, 0, imageBorderBottomRightRadius, imageBorderBottomLeftRadius ),
				};
				selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ],
					'border-radius': generateBorderRadius( imageBorderRadiusUnit, 0, 0, imageBorderBottomRightRadius, imageBorderBottomLeftRadius ),
				};
				break;
			case 'center':
				selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper' ],
					'margin-top': generateCSSUnit(
						captionGap,
						captionGapUnit
					),
				};
				break;
			case 'bottom':
				selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ],
					'border-radius': generateBorderRadius( imageBorderRadiusUnit, 0, 0, imageBorderBottomRightRadius, imageBorderBottomLeftRadius ),
				};
				selectors[ '.uag-image-gallery-media' ] = {
					...selectors[ '.uag-image-gallery-media' ],
					'border-radius': generateBorderRadius( imageBorderRadiusUnit, imageBorderTopLeftRadius, imageBorderTopRightRadius, 0, 0 ),
				};
				selectors[ '.uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail' ],
					'border-radius': generateBorderRadius( imageBorderRadiusUnit, imageBorderTopLeftRadius, imageBorderTopRightRadius, 0, 0 ),
				};
				selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ],
					'border-radius': generateBorderRadius( imageBorderRadiusUnit, imageBorderTopLeftRadius, imageBorderTopRightRadius, 0, 0 ),
				};
				break;
		}
	}

	// Carousel based styling

	if ( feedLayout === 'carousel' ) {
		if ( carouselSquares ){
			selectors[ '.uag-image-gallery-media--carousel' ] = {
				'aspect-ratio': 1,
			};
			selectors[ '.uag-image-gallery-media__thumbnail--carousel' ] = {
				'height': '100%',
				'width': '100%',
				'-o-object-fit': 'cover',
				'object-fit': 'cover',
			};
		}
	}
	else {
		// selectors[ '.uag-image-gallery__iso-ref-wrapper' ] = {
		// 	'overflow': 'auto',
		// };
	}

	// Masonry based styling

	if ( feedLayout === 'masonry' && feedPagination && ! paginateUseLoader ){ 
		selectors[ '.uag-image-gallery__control-wrapper' ] = {
			'min-height': '58px',
			'-webkit-justify-content': paginateButtonAlign,
			'justify-content': paginateButtonAlign,
			'-webkit-align-items': 'center',
			'align-items': 'center',
		};
	}

	// New Zoom Effect on Hover

	switch ( imageZoomType ) {
		case 'zoom-in':
			if( imageEnableZoom ){
				selectors[ '.uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail' ],
					'transform': 'scale(1.005)',
					'transform': 'scale3d(1.005, 1.005, 1.005)',
				};
				selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ],
					'transform': 'scale(1.1)',
					'transform': 'scale3d(1.1, 1.1, 1.1)',
				};
			}
			break;
		case 'zoom-out':
			if( imageEnableZoom ){
				selectors[ '.uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail' ],
					'transform': 'scale(1.1)',
					'transform': 'scale3d(1.1, 1.1, 1.1)',
				};
				selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ],
					'transform': 'scale(1.005)',
					'transform': 'scale3d(1.005, 1.005, 1.005)',
				};
			}
			break;
	}

	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) } `; // That last space is needed.

	let stylingCss = generateCSS( selectors, base_selector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
