import React, {CSSProperties} from 'react'
import {SectionTitle} from '@/components/info'

function ItemDescription() {
    return (
        <>
            <div className="ProductDescription_wrapper ProductDescription_alternative">
                <div className="ProductDescription_inner">
                    <SectionTitle title="Description" tag={"1"} className='ProductDescription_title'/>
                    <div
                        className="CollapseText_wrapper ProductDescription_description"
                        style={{'--max-lines': 4} as CSSProperties}
                    >
                        <p className="CollapseText_text styling_paragraph">
                            Stamped with the seven-point rosette, the emblematic symbol of
                            the Manufacture, the Metal Box is an essential accessory to add
                            a decorative and practical touch to a desk. A timeless steel
                            object available in three sizes, it will become a must-have for
                            your storage needs with unmatched durability. This item
                            highlights the art of steel sheet folding skillfully practiced
                            by the artisans of the Manufacture.
                        </p>
                        <button
                            className="UnderlinedButton_wrapper CollapseText_showButton">
                                <span className="UnderlinedButton_content">
                                  Show more
                                </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDescription