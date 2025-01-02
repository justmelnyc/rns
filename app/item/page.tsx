import React from 'react'
import {
    ItemAction,
    ItemDescription,
    ItemDetails,
    ItemGallery,
    ItemImageGrid,
    ItemOverview,
    ItemSpec,
    ItemSteps,
    RecentlyViewed,
    RelatedItems,
} from '@/components/item'
import images from '@/data/images'
import {VariantSelector} from '@/components/fixture'

function ItemPage() {
    return (
        <section className="Layout_wrapper">
            <div className="Layout_inner Product_wrapper">
                <ItemOverview
                    name="Metal Box"
                    unit="USD"
                    value="100"
                />
                <div className="Product_center">
                    <ItemGallery images={images}/>
                    <div className="Product_sections">
                        <ItemImageGrid/>
                        <ItemDescription/>
                        <ItemSpec/>
                        <ItemDetails/>
                        <ItemSteps/>
                    </div>
                </div>
                <VariantSelector/>
                <ItemAction/>
                <div className="Product_bottom">
                    <RelatedItems/>
                    <RecentlyViewed/>
                </div>
            </div>
        </section>
    )
}

export default ItemPage