/**
 * BLOCK: Advanced Heading - Deprecated Block
 */

import classnames from "classnames"
import attributes from "./attributes"

import { Fragment } from "react"

const {
    RichText,
    InnerBlocks
} = wp.blockEditor

const deprecated = [
	{
		attributes,			
		save: function( props ) {
            const { attributes } = props
                const {
                    block_id,
                    formLabel,
                    submitButtonText,
                    confirmationType,
                    confirmationMessage,
                    failedMessage,
                    reCaptchaEnable,
                    reCaptchaType,			
                    reCaptchaSiteKeyV2,
                    reCaptchaSecretKeyV2,	
                } = attributes
            
                const renderButtonHtml = () => {
                    return (
                        <button className="uagb-forms-main-submit-button" >
                                    <RichText.Content
                                        tagName='div'
                                        value={ submitButtonText }
                                        className='uagb-forms-main-submit-button-text'
                                    />
                        </button>
                    );
                }
                return (
                    <div className={ classnames(
                        "uagb-forms__outer-wrap",
                        `uagb-block-${ block_id }`,
                    ) }
                    >
                        <form className="uagb-forms-main-form" method="post" name={ `uagb-form-${ block_id }` } >			
                            <InnerBlocks.Content />
                            <div className="uagb-forms-form-hidden-data">
                                { reCaptchaEnable && "v2" === reCaptchaType && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 && (					
                                    <input type="hidden" id="g-recaptcha-response" className="uagb-forms-recaptcha"/>
                                ) }
                                <input type="hidden" className="uagb_forms_form_label" value={ formLabel }/>
                                <input type="hidden" className="uagb_forms_form_id" value= { `uagb-form-${ block_id }` }/>
                            </div>
                            { reCaptchaEnable && "v2" === reCaptchaType && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 && (
                                <Fragment>
                                    <div className="g-recaptcha uagb-forms-field-set" data-sitekey={reCaptchaSiteKeyV2}></div>
                                    <div className={`uagb-form-reacaptcha-error-${ block_id }`}></div>
                                </Fragment>
                            ) }
                            <div className="uagb-forms-main-submit-button-wrap">
                                {renderButtonHtml()}						
                            </div>
                        </form>
                            { 'message' === confirmationType && (
                                <Fragment>
                                    <div className={ classnames(						
                                        `uagb-forms-success-message-${ block_id }`,
                                        'uagb-forms-submit-message-hide',
                                    ) }>
                                        <span>
                                            { confirmationMessage }
                                        </span>
                                    </div>
                                    <div className={ classnames(						
                                        `uagb-forms-failed-message-${ block_id }`,
                                        'uagb-forms-submit-message-hide',
                                    ) }>
                                        <span>
                                            { failedMessage }
                                        </span>
                                    </div>
                                </Fragment>
                            )}
                            
                    </div>
                )
            
        }
	}
]

export default deprecated;