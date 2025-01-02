import React from 'react'
import {List} from '@/components/utils'
import Link from 'next/link'
import {SectionTitle} from '@/components/info'

const recentlyViewed = [
    {
        href: '/',
        alt: 'CC10 Filing cabinet',
        src: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CAISSON_CC10_10568-10000_001_6b97e708-686a-4262-a255-97b10ff91c5b_800x.jpg?v=1712923813',
        hover: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CAISSON_CC10_10568-10000_002_210c8876-4aa3-4b39-8f59-ccde98e4b281_800x.jpg?v=1712923813'
    },
    {
        href: '/',
        alt: 'UD Chair',
        src: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_UD_10510-10000_001_800x.jpg?v=1697453610',
        hover: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_UD_10510-10000_002_800x.jpg?v=1697453610'
    },
    {
        href: '/',
        alt: 'CC3 Filing cabinet',
        src: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CAISSON_CC3_10565-10000_001_800x.jpg?v=1698564829',
        hover: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CAISSON_CC3_10565-10000_002_800x.jpg?v=1698564830'
    },
    {
        href: '/',
        alt: 'T37 Round Woven Candle Holder',
        src: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_PHOTOPHORE_ROND_MEDIUM_11303-10000_01_800x.jpg?v=1721740139',
        hover: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_PHOTOPHORE_ROND_MEDIUM_11303-10000_02_800x.jpg?v=1721740139'

    }
]


function RecentlyViewed() {
    return (
        <>
            <div className="ProductList_wrapper ProductList_small">
                <div className="HorizontalSlider_sliderContainer">
                    <div className="HorizontalSlider_navigation">
                        <div className="HorizontalSlider_navigationInner HorizontalSlider_hasTitle">
                            <div>
                                <SectionTitle title="Recently viewed" tag={"7"}/>
                            </div>
                        </div>
                    </div>
                    <div className="HorizontalSlider_slider">
                        <div className="HorizontalSlider_sliderInner">
                            <div className="HorizontalSlider_offseter"/>
                            <List from={recentlyViewed}>
                                {(item) => (
                                    <div className="ProductList_product">
                                        <div className="ProductCard_wrapper ProductCard_isHorizontal">
                                            <Link
                                                className="ProductCard_link"
                                                href={item.href}
                                            >
                                                <div className="ProductCard_imgWrapper">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        className="AsyncImage_image ProductCard_img loaded"
                                                        src={item.src}
                                                        alt="CC10 Filing cabinet"
                                                    />
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        className="AsyncImage_image ProductCard_rollImg loaded"
                                                        src={item.hover}
                                                        alt="CC10 Filing cabinet"
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentlyViewed