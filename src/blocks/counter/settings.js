import React from 'react';
import TypographyControl from '@Components/typography';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import { __ } from '@wordpress/i18n';
import {AlignmentToolbar, BlockControls, InspectorControls} from '@wordpress/block-editor';
import { TextControl, SelectControl, Icon, ToggleControl } from '@wordpress/components';
import renderSVG from '@Controls/renderIcon';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import MultiButtonsControl from '@Components/multi-buttons-control';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import BoxShadowControl from '@Components/box-shadow';
import UAGTabsControl from '@Components/tabs';
import { boxShadowPresets, boxShadowHoverPresets } from './presets';
import UAGSelectControl from '@Components/select-control';
import UAGIconPicker from '@Components/icon-picker';
import UAGMediaPicker from '@Components/image';
import { getImageSize } from '@Utils/Helpers';
import UAGPresets from '@Components/presets';

let imageSizeOptions = [
	{
		value: 'thumbnail',
		label: __( 'Thumbnail', 'ultimate-addons-for-gutenberg' ),
	},
	{ value: 'medium', label: __( 'Medium', 'ultimate-addons-for-gutenberg' ) },
	{ value: 'full', label: __( 'Large', 'ultimate-addons-for-gutenberg' ) },
];

export default function Settings( props ) {

	props = props.parentProps;
	const { setAttributes, attributes, deviceType } = props;

	const {
		block_id,
		startNumber,
		endNumber,
		align,
		alignTablet,
		alignMobile,
		totalNumber,
		numberPrefix,
		numberSuffix,
		animationDuration,
		thousandSeparator,
		layout,
		// heading
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontStyle,
		headingFontSize,
		headingColor,
		headingTransform,
		headingDecoration,
		headingFontSizeType,
		headingFontSizeMobile,
		headingFontSizeTablet,
		headingLineHeight,
		headingLineHeightType,
		headingLineHeightMobile,
		headingLineHeightTablet,
		headingTopMargin,
		headingRightMargin,
		headingLeftMargin,
		headingBottomMargin,
		headingTopMarginTablet,
		headingRightMarginTablet,
		headingLeftMarginTablet,
		headingBottomMarginTablet,
		headingTopMarginMobile,
		headingRightMarginMobile,
		headingLeftMarginMobile,
		headingBottomMarginMobile,
		headingMarginUnit,
		headingMarginUnitTablet,
		headingMarginUnitMobile,
		headingMarginLink,
		// Block Margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		blockMarginLink,
		// Block Padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		blockPaddingLink,
		// Number
		numberLoadGoogleFonts,
		numberFontFamily,
		numberFontWeight,
		numberFontStyle,
		numberFontSize,
		numberColor,
		numberTransform,
		numberDecoration,
		numberFontSizeType,
		numberFontSizeMobile,
		numberFontSizeTablet,
		numberLineHeight,
		numberLineHeightType,
		numberLineHeightMobile,
		numberLineHeightTablet,
		numberTopMargin,
		numberRightMargin,
		numberLeftMargin,
		numberBottomMargin,
		numberTopMarginTablet,
		numberRightMarginTablet,
		numberLeftMarginTablet,
		numberBottomMarginTablet,
		numberTopMarginMobile,
		numberRightMarginMobile,
		numberLeftMarginMobile,
		numberBottomMarginMobile,
		numberMarginUnit,
		numberMarginUnitTablet,
		numberMarginUnitMobile,
		numberMarginLink,
		// prefix
		prefixRightDistance,
		prefixRightDistanceTablet,
		prefixRightDistanceMobile,
		// suffix
		suffixLeftDistance,
		suffixLeftDistanceTablet,
		suffixLeftDistanceMobile,
		// circle
		circleSize,
		circleStokeSize,
		circleForeground,
		circleBackground,
		// bar
		barSize,
		barForeground,
		barBackground,
		// box shadow
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,
		// Icon/Image
		showIcon,
		icon,
		iconImgPosition,
		iconImage,
		imageSize,
		sourceType,
	} = attributes;

	const numberIconPositionOptions = [
		{
			value: 'top',
			label: __(
				'Top',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'bottom',
			label: __(
				'Bottom',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'left-number',
			label: __(
				'Left of Number',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'right-number',
			label: __(
				'Right of Number',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'left',
			label: __(
				'Left of Number and Title',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'right',
			label: __(
				'Right of Number and Title',
				'ultimate-addons-for-gutenberg'
			),
		},
	];

	const circleIconPositionOptions = [
		{
			value: 'top',
			label: __(
				'Top',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'bottom',
			label: __(
				'Bottom',
				'ultimate-addons-for-gutenberg'
			),
		},
	]

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { iconImage: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			setAttributes( { iconImage: null } );
			return;
		}
		if ( media.sizes ) {
			const new_img = getImageSize( media.sizes );
			imageSizeOptions = new_img;
		}
		setAttributes( { iconImage: media } );
	};

	/*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { iconImage: '' } );
	};

	if ( iconImage && iconImage.sizes ) {
		imageSizeOptions = getImageSize( iconImage.sizes );
	}

	const generalPanel = (
		<UAGAdvancedPanelBody
			title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: layout,
					label: 'layout',
				} }
				options={ [
					{
						value: 'number',
						label: __(
							'Number',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'circle',
						label: __(
							'Circle',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'bars',
						label: __(
							'Bars',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __(
					'Alignment',
					'ultimate-addons-for-gutenberg'
				) }
				responsive={ true }
				data={ {
						desktop: {
							value: align,
							label: 'align',
						},
						tablet: {
							value: alignTablet,
							label: 'alignTablet',
						},
						mobile: {
							value: alignMobile,
							label: 'alignMobile',
						},
				} }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'left',
						icon: (
							<Icon
								icon={ renderSVG( 'fa fa-align-left' ) }
							/>
						),
						tooltip: __(
							'Left',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'center',
						icon: (
							<Icon
								icon={ renderSVG(
									'fa fa-align-center'
								) }
							/>
						),
						tooltip: __(
							'Center',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'right',
						icon: (
							<Icon
								icon={ renderSVG(
									'fa fa-align-right'
								) }
							/>
						),
						tooltip: __(
							'Right',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ true }
			/>
			<TextControl
				label={ __( 'Starting Number', 'ultimate-addons-for-gutenberg' ) }
				value={ startNumber }
				onChange={ ( value ) => setAttributes( {startNumber: value} )}
			/>
			<TextControl
				label={ __( 'Ending Number', 'ultimate-addons-for-gutenberg' ) }
				value={ endNumber }
				onChange={ ( value ) => setAttributes( {endNumber: value} )}
			/>
			{
				layout !== 'number' && (
					<TextControl
						label={ __( 'Total Number', 'ultimate-addons-for-gutenberg' ) }
						value={ totalNumber }
						onChange={ ( value ) => setAttributes( {totalNumber: value} )}
					/>
				)
			}
			<TextControl
				label={ __( 'Number Prefix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberPrefix }
				onChange={ ( value ) => setAttributes( {numberPrefix: value} )}
			/>
			<TextControl
				label={ __( 'Number Suffix', 'ultimate-addons-for-gutenberg' ) }
				value={ numberSuffix }
				onChange={ ( value ) => setAttributes( {numberSuffix: value} )}
			/>
			<Range
				label={ __(
					'Animation Duration',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ animationDuration }
				data={ {
					value: animationDuration,
					label: 'animationDuration',
				} }
				min={ 0.1 }
				step={ 0.1 }
				max={ 25 }
				displayUnit={ false }
			/>
			<SelectControl
				label={ __( 'Thousand Separator', 'ultimate-addons-for-gutenberg' ) }
				value={ thousandSeparator }
				onChange={ ( value ) => {
					setAttributes( {thousandSeparator: value} )
				} }
				options={ [
					{ value: '', label: 'None' },
					{ value: ',', label: ',' },
					{ value: '.', label: '.' },
					{ value: ' ', label: 'Whitespace' },
					{ value: "'", label: "'" },
				] }
			/>
		</UAGAdvancedPanelBody>
	)

	const iconImagePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Image/Icon', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<ToggleControl
				checked={ showIcon }
				onChange={ () =>
					setAttributes( { showIcon: ! showIcon } )
				}
				label={ __(
					'Enable Icon/Image',
					'ultimate-addons-for-gutenberg'
				) }
			/>
			{ showIcon && ( layout === 'circle' || layout === 'number' ) && (
				<UAGSelectControl
					label={ __(
						'Select Position',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: iconImgPosition,
						label: 'iconImgPosition',
					} }
					setAttributes={ setAttributes }
					options={ ( layout === 'circle' ) ? circleIconPositionOptions : numberIconPositionOptions }
				/>
			)}
			{ showIcon &&
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Select Source',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: sourceType,
						label: 'sourceType',
					} }
					options={ [
						{
							value: 'icon',
							label: __(
								'Icon',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'image',
							label: __(
								'Image',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			}
			{ false !== showIcon && sourceType === 'icon' && (
				<>
					<UAGIconPicker
						label={ __(
							'Icon',
							'ultimate-addons-for-gutenberg'
						) }
						value={ icon }
						onChange={ ( value ) =>
							setAttributes( { icon: value } )
						}
					/>
				</>
			) }
			{ false !== showIcon && sourceType === 'image' && (
				<>
					<UAGMediaPicker
						onSelectImage={ onSelectImage }
						backgroundImage={ iconImage }
						onRemoveImage={ onRemoveImage }
					/>
					{ iconImage &&
						iconImage.url !== 'null' &&
						iconImage.url !== '' && (
						<UAGSelectControl
							label={ __(
								'Image Size',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: imageSize,
								label: 'imageSize',
							} }
							setAttributes={ setAttributes }
							options={ imageSizeOptions }
						/>
					) }
				</>
			) }
		</UAGAdvancedPanelBody>
	)

	const iconImageStylePanel = (
		<UAGAdvancedPanelBody
			title={ __( 'Image/Icon', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			
		</UAGAdvancedPanelBody>
	)

	const headlineStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Headline', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: headingLoadGoogleFonts,
					label: 'headingLoadGoogleFonts',
				} }
				fontFamily={ {
					value: headingFontFamily,
					label: 'headingFontFamily',
				} }
				fontWeight={ {
					value: headingFontWeight,
					label: 'headingFontWeight',
				} }
				fontStyle={ {
					value: headingFontStyle,
					label: 'headingFontStyle',
				} }
				transform={ {
					value: headingTransform,
					label: 'headingTransform',
				} }
				decoration={ {
					value: headingDecoration,
					label: 'headingDecoration',
				} }
				fontSizeType={ {
					value: headingFontSizeType,
					label: 'headingFontSizeType',
				} }
				fontSize={ {
					value: headingFontSize,
					label: 'headingFontSize',
				} }
				fontSizeMobile={ {
					value: headingFontSizeMobile,
					label: 'headingFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: headingFontSizeTablet,
					label: 'headingFontSizeTablet',
				} }
				lineHeightType={ {
					value: headingLineHeightType,
					label: 'headingLineHeightType',
				} }
				lineHeight={ {
					value: headingLineHeight,
					label: 'headingLineHeight',
				} }
				lineHeightMobile={ {
					value: headingLineHeightMobile,
					label: 'headingLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: headingLineHeightTablet,
					label: 'headingLineHeightTablet',
				} }
			/>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ headingColor ? headingColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { headingColor: value } )
				}
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: headingTopMargin,
					label: 'headingTopMargin',
				} }
				valueRight={ {
					value: headingRightMargin,
					label: 'headingRightMargin',
				} }
				valueBottom={ {
					value: headingBottomMargin,
					label: 'headingBottomMargin',
				} }
				valueLeft={ {
					value: headingLeftMargin,
					label: 'headingLeftMargin',
				} }
				valueTopTablet={ {
					value: headingTopMarginTablet,
					label: 'headingTopMarginTablet',
				} }
				valueRightTablet={ {
					value: headingRightMarginTablet,
					label: 'headingRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: headingBottomMarginTablet,
					label: 'headingBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: headingLeftMarginTablet,
					label: 'headingLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: headingTopMarginMobile,
					label: 'headingTopMarginMobile',
				} }
				valueRightMobile={ {
					value: headingRightMarginMobile,
					label: 'headingRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: headingBottomMarginMobile,
					label: 'headingBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: headingLeftMarginMobile,
					label: 'headingLeftMarginMobile',
				} }
				unit={ {
					value: headingMarginUnit,
					label: 'headingMarginUnit',
				} }
				mUnit={ {
					value: headingMarginUnitMobile,
					label: 'headingMarginUnitMobile',
				} }
				tUnit={ {
					value: headingMarginUnitTablet,
					label: 'headingMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: headingMarginLink,
					label: 'headingMarginLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	)

	const numberStylePanel =  (
		<UAGAdvancedPanelBody
			title={ __( 'Number', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: numberLoadGoogleFonts,
					label: 'numberLoadGoogleFonts',
				} }
				fontFamily={ {
					value: numberFontFamily,
					label: 'numberFontFamily',
				} }
				fontWeight={ {
					value: numberFontWeight,
					label: 'numberFontWeight',
				} }
				fontStyle={ {
					value: numberFontStyle,
					label: 'numberFontStyle',
				} }
				transform={ {
					value: numberTransform,
					label: 'numberTransform',
				} }
				decoration={ {
					value: numberDecoration,
					label: 'numberDecoration',
				} }
				fontSizeType={ {
					value: numberFontSizeType,
					label: 'numberFontSizeType',
				} }
				fontSize={ {
					value: numberFontSize,
					label: 'numberFontSize',
				} }
				fontSizeMobile={ {
					value: numberFontSizeMobile,
					label: 'numberFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: numberFontSizeTablet,
					label: 'numberFontSizeTablet',
				} }
				lineHeightType={ {
					value: numberLineHeightType,
					label: 'numberLineHeightType',
				} }
				lineHeight={ {
					value: numberLineHeight,
					label: 'numberLineHeight',
				} }
				lineHeightMobile={ {
					value: numberLineHeightMobile,
					label: 'numberLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: numberLineHeightTablet,
					label: 'numberLineHeightTablet',
				} }
			/>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ numberColor ? numberColor : '' }
				onColorChange={ ( value ) =>
					setAttributes( { numberColor: value } )
				}
			/>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: numberTopMargin,
					label: 'numberTopMargin',
				} }
				valueRight={ {
					value: numberRightMargin,
					label: 'numberRightMargin',
				} }
				valueBottom={ {
					value: numberBottomMargin,
					label: 'numberBottomMargin',
				} }
				valueLeft={ {
					value: numberLeftMargin,
					label: 'numberLeftMargin',
				} }
				valueTopTablet={ {
					value: numberTopMarginTablet,
					label: 'numberTopMarginTablet',
				} }
				valueRightTablet={ {
					value: numberRightMarginTablet,
					label: 'numberRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: numberBottomMarginTablet,
					label: 'numberBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: numberLeftMarginTablet,
					label: 'numberLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: numberTopMarginMobile,
					label: 'numberTopMarginMobile',
				} }
				valueRightMobile={ {
					value: numberRightMarginMobile,
					label: 'numberRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: numberBottomMarginMobile,
					label: 'numberBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: numberLeftMarginMobile,
					label: 'numberLeftMarginMobile',
				} }
				unit={ {
					value: numberMarginUnit,
					label: 'numberMarginUnit',
				} }
				mUnit={ {
					value: numberMarginUnitMobile,
					label: 'numberMarginUnitMobile',
				} }
				tUnit={ {
					value: numberMarginUnitTablet,
					label: 'numberMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: numberMarginLink,
					label: 'numberMarginLink',
				} }
			/>
			<ResponsiveSlider
				label={ __(
					'Prefix Right Distance',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				data={ {
					desktop: {
						value: prefixRightDistance,
						label: 'prefixRightDistance',
					},
					tablet: {
						value: prefixRightDistanceTablet,
						label: 'prefixRightDistanceTablet',
					},
					mobile: {
						value: prefixRightDistanceMobile,
						label: 'prefixRightDistanceMobile',
					},
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<ResponsiveSlider
				label={ __(
					'Suffix Left Distance',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				data={ {
					desktop: {
						value: suffixLeftDistance,
						label: 'suffixLeftDistance',
					},
					tablet: {
						value: suffixLeftDistanceTablet,
						label: 'suffixLeftDistanceTablet',
					},
					mobile: {
						value: suffixLeftDistanceMobile,
						label: 'suffixLeftDistanceMobile',
					},
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
		</UAGAdvancedPanelBody>
	)

	const circleStylePanel = (
		<UAGAdvancedPanelBody
			title={__( 'Circle', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<Range
				label={ __(
					'Circle Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ circleSize }
				data={ {
					value: circleSize,
					label: 'circleSize',
				} }
				min={ 10 }
				step={ 10 }
				max={ 500 }
				displayUnit={ false }
			/>
			<Range
				label={ __(
					'Stroke Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ circleStokeSize }
				data={ {
					value: circleStokeSize,
					label: 'circleStokeSize',
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<AdvancedPopColorControl
				label={ __( 'Foreground', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ circleForeground ? circleForeground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { circleForeground: value } )
				}
			/>
			<AdvancedPopColorControl
				label={ __( 'background', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ circleBackground ? circleBackground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { circleBackground: value } )
				}
			/>
		</UAGAdvancedPanelBody>
	)

	const barStylePanel = (
		<UAGAdvancedPanelBody
			title={__( 'Bars', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<Range
				label={ __(
					'Bar Size',
					'ultimate-addons-for-gutenberg'
				) }
				setAttributes={ setAttributes }
				value={ barSize }
				data={ {
					value: barSize,
					label: 'barSize',
				} }
				min={ 0 }
				step={ 1 }
				max={ 100 }
				displayUnit={ false }
			/>
			<AdvancedPopColorControl
				label={ __( 'Foreground', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ barForeground ? circleForeground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { barForeground: value } )
				}
			/>
			<AdvancedPopColorControl
				label={ __( 'background', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ barBackground ? barBackground : '' }
				onColorChange={ ( value ) =>
					setAttributes( { barBackground: value } )
				}
			/>
		</UAGAdvancedPanelBody>
	)

	const spacingPanel = (
		<UAGAdvancedPanelBody
			title={__( 'Spacing', 'ultimate-addons-for-gutenberg' )}
			initialOpen={ false }
		>
			<SpacingControl
				label={ __(
					'Margin',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: blockTopMargin,
					label: 'blockTopMargin',
				} }
				valueRight={ {
					value: blockRightMargin,
					label: 'blockRightMargin',
				} }
				valueBottom={ {
					value: blockBottomMargin,
					label: 'blockBottomMargin',
				} }
				valueLeft={ {
					value: blockLeftMargin,
					label: 'blockLeftMargin',
				} }
				valueTopTablet={ {
					value: blockTopMarginTablet,
					label: 'blockTopMarginTablet',
				} }
				valueRightTablet={ {
					value: blockRightMarginTablet,
					label: 'blockRightMarginTablet',
				} }
				valueBottomTablet={ {
					value: blockBottomMarginTablet,
					label: 'blockBottomMarginTablet',
				} }
				valueLeftTablet={ {
					value: blockLeftMarginTablet,
					label: 'blockLeftMarginTablet',
				} }
				valueTopMobile={ {
					value: blockTopMarginMobile,
					label: 'blockTopMarginMobile',
				} }
				valueRightMobile={ {
					value: blockRightMarginMobile,
					label: 'blockRightMarginMobile',
				} }
				valueBottomMobile={ {
					value: blockBottomMarginMobile,
					label: 'blockBottomMarginMobile',
				} }
				valueLeftMobile={ {
					value: blockLeftMarginMobile,
					label: 'blockLeftMarginMobile',
				} }
				unit={ {
					value: blockMarginUnit,
					label: 'blockMarginUnit',
				} }
				mUnit={ {
					value: blockMarginUnitMobile,
					label: 'blockMarginUnitMobile',
				} }
				tUnit={ {
					value: blockMarginUnitTablet,
					label: 'blockMarginUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: blockMarginLink,
					label: 'blockMarginLink',
				} }
			/>
			<SpacingControl
				label={ __(
					'Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: blockTopPadding,
					label: 'blockTopPadding',
				} }
				valueRight={ {
					value: blockRightPadding,
					label: 'blockRightPadding',
				} }
				valueBottom={ {
					value: blockBottomPadding,
					label: 'blockBottomPadding',
				} }
				valueLeft={ {
					value: blockLeftPadding,
					label: 'blockLeftPadding',
				} }
				valueTopTablet={ {
					value: blockTopPaddingTablet,
					label: 'blockTopPaddingTablet',
				} }
				valueRightTablet={ {
					value: blockRightPaddingTablet,
					label: 'blockRightPaddingTablet',
				} }
				valueBottomTablet={ {
					value: blockBottomPaddingTablet,
					label: 'blockBottomPaddingTablet',
				} }
				valueLeftTablet={ {
					value: blockLeftPaddingTablet,
					label: 'blockLeftPaddingTablet',
				} }
				valueTopMobile={ {
					value: blockTopPaddingMobile,
					label: 'blockTopPaddingMobile',
				} }
				valueRightMobile={ {
					value: blockRightPaddingMobile,
					label: 'blockRightPaddingMobile',
				} }
				valueBottomMobile={ {
					value: blockBottomPaddingMobile,
					label: 'blockBottomPaddingMobile',
				} }
				valueLeftMobile={ {
					value: blockLeftPaddingMobile,
					label: 'blockLeftPaddingMobile',
				} }
				unit={ {
					value: blockPaddingUnit,
					label: 'blockPaddingUnit',
				} }
				mUnit={ {
					value: blockPaddingUnitMobile,
					label: 'blockPaddingUnitMobile',
				} }
				tUnit={ {
					value: blockPaddingUnitTablet,
					label: 'blockPaddingUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: blockPaddingLink,
					label: 'blockPaddingLink',
				} }
			/>
		</UAGAdvancedPanelBody>
	);

	// We shall release the box-shadow feature later due to some technical challenges with the circle layout.
	// eslint-disable-next-line no-unused-vars
	const boxShadowSettings = (
		<UAGAdvancedPanelBody
			title={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>

			<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __(
							'Normal',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						name: 'hover',
						title: __(
							'Hover',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				normal={
					<>
						<UAGPresets
							setAttributes = { setAttributes }
							presets = { boxShadowPresets }
							presetInputType = 'radioImage'
						/>
						<BoxShadowControl
							blockId={ block_id }
							setAttributes={ setAttributes }
							label={ __(
								'Box Shadow',
								'ultimate-addons-for-gutenberg'
							) }
							boxShadowColor={ {
								value: boxShadowColor,
								label: 'boxShadowColor',
								title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowHOffset={ {
								value: boxShadowHOffset,
								label: 'boxShadowHOffset',
								title: __(
									'Horizontal',
									'ultimate-addons-for-gutenberg'
								),
							} }
							boxShadowVOffset={ {
								value: boxShadowVOffset,
								label: 'boxShadowVOffset',
								title: __(
									'Vertical',
									'ultimate-addons-for-gutenberg'
								),
							} }
							boxShadowBlur={ {
								value: boxShadowBlur,
								label: 'boxShadowBlur',
								title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowSpread={ {
								value: boxShadowSpread,
								label: 'boxShadowSpread',
								title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowPosition={ {
								value: boxShadowPosition,
								label: 'boxShadowPosition',
								title: __(
									'Position',
									'ultimate-addons-for-gutenberg'
								),
							} }
						/>
					</>
				}
				hover={
					<>
						<UAGPresets
							setAttributes = { setAttributes }
							presets = { boxShadowHoverPresets }
							presetInputType = 'radioImage'
						/>
						<BoxShadowControl
							blockId={ block_id }
							setAttributes={ setAttributes }
							label={ __(
								'Box Shadow',
								'ultimate-addons-for-gutenberg'
							) }
							boxShadowColor={ {
								value: boxShadowColorHover,
								label: 'boxShadowColorHover',
								title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowHOffset={ {
								value: boxShadowHOffsetHover,
								label: 'boxShadowHOffsetHover',
								title: __(
									'Horizontal',
									'ultimate-addons-for-gutenberg'
								),
							} }
							boxShadowVOffset={ {
								value: boxShadowVOffsetHover,
								label: 'boxShadowVOffsetHover',
								title: __(
									'Vertical',
									'ultimate-addons-for-gutenberg'
								),
							} }
							boxShadowBlur={ {
								value: boxShadowBlurHover,
								label: 'boxShadowBlurHover',
								title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowSpread={ {
								value: boxShadowSpreadHover,
								label: 'boxShadowSpreadHover',
								title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
							} }
							boxShadowPosition={ {
								value: boxShadowPositionHover,
								label: 'boxShadowPositionHover',
								title: __(
									'Position',
									'ultimate-addons-for-gutenberg'
								),
							} }
						/>
					</>
				}
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);


	return (
		<React.Fragment>
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) =>
						setAttributes( { align: value } )
					}
				/>
			</BlockControls>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{generalPanel}
						{/* No icons necessary for bar layout */}
						{layout !== 'bars' && iconImagePanel}
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{numberStylePanel}
						{headlineStylePanel}
						{layout === 'circle' && circleStylePanel}
						{layout === 'bars' && barStylePanel}
						{layout !== 'bars' && iconImageStylePanel}
						{spacingPanel}
						{/* We will be releasing the box-shadow feature later due to some technical challenges with circle layout*/}
						{/* {layout !== 'number' && boxShadowSettings} */}
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</React.Fragment>
	);
}
