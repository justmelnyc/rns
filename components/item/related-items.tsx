import React from 'react'
import ItemCard from '@/components/item/card/item-card'
import {List} from '@/components/utils'
import products from '@/data/related'
import {SectionTitle} from '@/components/info'

function RelatedItems() {
    return (
        <>
            <div className="ProductList_wrapper">
                <div className="HorizontalSlider_sliderContainer">
                    <div className="HorizontalSlider_navigation">
                        <div className="HorizontalSlider_navigationInner HorizontalSlider_hasTitle">
                            <div>
                                <SectionTitle title="Related products" tag={'6'} />
                            </div>
                        </div>
                    </div>
                    <div className="HorizontalSlider_slider">
                        <div className="HorizontalSlider_sliderInner">
                            <div className="HorizontalSlider_offseter"/>
                            <List from={products}>
                                {(product) => <ItemCard {...product} /> }
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedItems