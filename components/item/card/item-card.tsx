import React from 'react'
import Link from 'next/link'

interface Props {
    title: string;
    price: number;
    priceFrom?: boolean;
    currency: string;
    href: string;
    images: {
        main: string;
        hover: string;
    };
}

function ItemCard({
                        title,
                        price,
                        currency,
                        href,
                        images
                  }: Props) {
    return (
        <>
            <div className="ProductList_product">
                <div className="ProductCard_wrapper ProductCard_isHorizontal">
                    <Link
                        className="ProductCard_link"
                        href={href}
                    >
                        <ItemImage hover={images.hover} src={images.main}/>
                        <div className="ProductCardContent_wrapper ProductCardContent_isHorizontal">
                            <ItemDetails title={title} cur={currency} price={price}/>
                            <div className="ProductCardContent_bottom">
                                <SeeMore/>
                                <WishlistButton/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ItemCard

const ItemDetails = ({title, price, cur}: { title: string, price: number, cur: string }) => (
    <div className="ProductCardContent_top">
        <h3 className="ProductCardContent_title styling_serif">
            {title}
        </h3>
        <div className="ProductCardContent_price styling_s">
            <div className="ProductPrice_wrapper">
                <div className="ProductPrice_inner styling_s">
                    <span className="ProductPrice">
                        <span>From</span>{' '}
                        <span className="Price_amount styling_mono">
                            {price}
                        </span>
                        <span className="Price_currency">
                            {cur}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
)

const SeeMore = () => (
    <div className="ProductCardContent_variantsWrapper">
        <span className="ProductCardContent_see">
            <span className="ProductCardContent_variants">
                See
            </span>
            <sup className="Sup_wrapper styling_mono">
                [+]
            </sup>
        </span>
    </div>)

const WishlistButton = () => (
    <div className="ProductCardContent_favWrapper">
        <button className="">
            <span>Wishlist</span>
            <sup className="Sup_wrapper styling_mono">
                [♡]
            </sup>
        </button>
    </div>
)

const ItemImage = ({src, hover}: { src: string, hover: string }) => (
    <div className="ProductCard_imgWrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
            className="AsyncImage_image ProductCard_img loaded"
            src={src}
            alt="Storage Tray"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
            className="AsyncImage_image ProductCard_rollImg loaded"
            src={hover}
            alt="Storage Tray"
        />
    </div>
)
