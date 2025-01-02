import React from 'react'
import TextButton from '../ui/text-button'
interface Props {
    name: string;
    unit: string;
    value: string;
}
function ItemOverview({name = "Name Here", unit = "USD", value = "100"}: Props) {
    return (
        <>
            <div className="Product_top">
                <div className="ProductHeader_wrapper">
                    <div className="ProductHeader_inner">
                        <div className="ProductHeader_top">
                            <div className="ProductHeader_skuWrapper styling_s">
                                <span className="ProductHeader_num">N°</span>
                                <span className="ProductHeader_sku styling_mono">
                                    11478-10000
                                </span>
                            </div>
                            <div className="ProductHeader_line">
                                <div>
                                    <h1 className="ProductHeader_title styling_serif-xl">
                                        {name}
                                    </h1>
                                </div>
                                <div
                                    className="ProductPrice_wrapper ProductHeader_price">
                                    <div className="ProductPrice_inner styling_s">
                                      <span className="ProductPrice">
                                        <span className="Price_amount styling_mono">
                                          {value}
                                        </span>
                                        <span className="Price_currency uppercase">{unit}</span>
                                      </span>
                                    </div>
                                </div>
                            </div>

                            <div className="ProductHeader_favWrapper">
                                <TextButton label='Wishlist' supText='♡' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemOverview