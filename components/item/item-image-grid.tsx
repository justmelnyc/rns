import {List} from '@/components/utils'
import productVariants from '@/data/blocks'
import {ItemImagePreview} from '@/components/item/index'
import {SectionTitle} from '@/components/info'
import React from 'react'

function ItemImageGrid() {
    return (
        <>
            <div className="ProductVariantsGrid_wrapper">
                <div className="ProductVariantsGrid_inner">
                    <SectionTitle title="Colors" tag={"0"}/>
                    <div className="ProductVariantsGrid_gridWrapper">
                        <List from={productVariants}>
                            {(preview) => <ItemImagePreview {...preview}/>}
                        </List>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemImageGrid