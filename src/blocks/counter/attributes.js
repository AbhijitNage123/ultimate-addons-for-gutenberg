const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'number',
	},
	align: {
		type: 'string',
		default: 'left',
	},
	alignTablet: {
		type: 'string',
		default: 'left',
	},
	alignMobile: {
		type: 'string',
		default: 'left',
	},
	animationDuration: {
		type: 'number',
		default: 25,
	},
	thousandSeparator: {
		type: 'string',
		default: '',
	},
	// heading.
	heading: {
		type: 'string',
		default: '',
	},
	headingTag: {
		type: 'string',
		default: '',
	},
	headingLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		default: '#333'
	},
	headingFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headingFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	headingTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headingDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headingFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	// Block Margin.
	blockTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Block Padding.
	blockTopPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Heading Margin.
	headingTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Number.
	startNumber: {
		type: 'string',
		default: 0,
	},
	endNumber: {
		type: 'string',
		default: 80,
	},
	totalNumber: {
		type: 'string',
		default: 100,
	},
	numberPrefix: {
		type: 'string',
		default: '',
	},
	numberSuffix: {
		type: 'string',
		default: '',
	},
	numberLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	numberColor: {
		type: 'string',
		default: '#333'
	},
	numberFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	numberFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	numberFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	numberTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	numberDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	numberFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	numberFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	numberFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Prefix
	prefixRightDistance: {
		type: 'number',
		default: 5,
	},
	prefixRightDistanceTablet: {
		type: 'number',
	},
	prefixRightDistanceMobile: {
		type: 'number',
	},
	// Suffix
	suffixLeftDistance: {
		type: 'number',
		default: 5,
	},
	suffixLeftDistanceTablet: {
		type: 'number',
	},
	suffixLeftDistanceMobile: {
		type: 'number',
	},
	// circle
	circleSize: {
		type: 'number',
		default: 300,
	},
	circleStokeSize: {
		type: 'number',
		default: 10,
	},
	circleForeground : {
		type: 'string',
		default: '#eaeaea',
	},
	circleBackground : {
		type: 'string',
		default: '#f7951e',
	},
	// bar
	barSize: {
		type: 'number',
		default: 25,
	},
	barForeground : {
		type: 'string',
		default: '#eaeaea',
	},
	barBackground : {
		type: 'string',
		default: '#f7951e',
	},
	// Box Shadow.
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-hoffset'
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-position'
		},
	},

	boxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-color-hover'
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-hoffset-hover'
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-voffset-hover'
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-blur-hover'
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-spread-hover'
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-position-hover'
		},
	},
	showIcon: {
		type: 'boolean',
		default: true,
		isUAGStyle: true,
	},
	icon: {
		type: 'string',
		default: 'circle-check',
	},
	iconSize: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'icon-size'
		}
	},
	iconSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet'
		}
	},
	iconSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile'
		}
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		}
	},
	iconSizeTypeTablet: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type-tablet'
		}
	},
	iconSizeTypeMobile: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type-mobile'
		}
	},
	iconImgPosition: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'icon-img-position'
		}
	},
	sourceType: {
		type: 'string',
		default: 'icon',
	},
	// Icon Padding.
	iconTopPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	iconRightPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	iconLeftPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	iconBottomPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	iconTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	iconRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	iconLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	iconBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	iconTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	iconRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	iconLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	iconBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	iconPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	iconPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	iconPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	iconPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
};

export default attributes;
