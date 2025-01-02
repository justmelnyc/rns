import Link from 'next/link'
import React from 'react'
import {SectionTitle} from '@/components/info'

function ItemDetails() {
    return (
        <>
            <div className="ProductDesigner_wrapper">
                <SectionTitle title='Designer' tag={"4"} className='ProductDesigner_title'/>

                <div className="ProductDesigner_inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="AsyncImage_image ProductDesigner_image loaded"
                        src="https://cdn.shopify.com/s/files/1/0820/6680/0956/files/Studio_TOLIX_2_2000x.jpg?v=1702112167"
                     alt={''}/>
                    <div>
                        <div className="ProductDesigner_content styling_paragraph">
                            To honor the legacy left by its predecessors and to preserve the
                            DNA of the TOLIX manufacturing company, the management, as part
                            of reissues, wanted to leverage the talents within the company.
                            Therefore, the creations designed by the Studio TOLIX, are the
                            result of a collaborative effort that combines the memories and
                            skills of the older craftsmen, the hands of the prototypists,
                            and the technical expertise of the manufacturing companys
                            engineering department. To this, the discerning eye of
                            consultants from the publishing and fashion industry adds a
                            certainty to the elegance and delight of the models thus
                            created. The creations of the Studio TOLIX aim to pay tribute to
                            the past, to bridge the gap between eras, and to be a testament
                            to the perseverance of authentic craftsmanship in an
                            increasingly automated world.
                        </div>
                        <Link
                            className="UnderlinedButton_wrapper ProductDesigner_allProducts"
                            href="/"
                        >
                            <span className="UnderlinedButton_content">
                              All products
                            </span>
                            <sup className="Sup_wrapper styling_mono">
                                [22]
                            </sup>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetails