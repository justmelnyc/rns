import products from '@/data/products'
import Link from 'next/link'
import React from 'react'

function Suggestions() {
    return (
        <>
            <div
                className="HorizontalSlider_sliderContainer SearchBlock_suggestions">
                <div className="HorizontalSlider_navigation">
                    <div
                        className="HorizontalSlider_navigationInner HorizontalSlider_hasTitle">
                        <div>
                            <h3 className="SearchBlock_subtitle styling_s styling_mono">
                                Suggestions
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="HorizontalSlider_slider">
                    <div className="HorizontalSlider_sliderInner">
                        {products.map((product, index) => (
                            <div key={index} className="SearchBlock_product">
                                <div className="ProductCard_wrapper">
                                    <Link href={'/'}
                                          className="ProductCard_link">
                                        <div className="ProductCard_imgWrapper">
                                            <img
                                                className="AsyncImage_image ProductCard_img loaded"
                                                src={product.images.main}
                                                alt={'product.alt'}
                                                width={800}
                                                height={800}
                                            />
                                            <img
                                                className="AsyncImage_image ProductCard_rollImg loaded"
                                                src={product.images.hover}
                                                alt={'product.alt'}
                                                width={800}
                                                height={800}
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suggestions