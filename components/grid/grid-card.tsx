import {cn} from '@/utils'
import Link from 'next/link'

type ProductColor = {
    name: string;
    color: string;
    isLight?: boolean;
};

export type GridCardItem = {
    id: string;
    title: string;
    price: number;
    priceFrom?: boolean;
    currency: string;
    images: {
        main: string;
        hover: string;
    };
    colors: ProductColor[];
    wide?: boolean;
};

type ProductColorButtonProps = {
    color: string;
    name: string;
    isLight?: boolean;
};

function GridCard({images, colors, priceFrom, price, title, currency, wide}: GridCardItem) {
    return (
        <li className={cn('CollectionList_item', {
            CollectionList_wide: wide
        })}>
            <div className="ProductCard_wrapper">
                <Link className="ProductCard_link" href={`/item`}>
                    <div className="ProductCard_imgWrapper">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="AsyncImage_image ProductCard_img loaded"
                            src={images.main}
                            alt={title}
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="AsyncImage_image ProductCard_rollImg loaded"
                            src={images.hover}
                            alt={title}
                        />
                    </div>
                    <div className="ProductCardContent_wrapper">
                        <div className="ProductCardContent_top">
                            <h3 className="ProductCardContent_title styling_serif">
                                {title}
                            </h3>
                            <div className="ProductCardContent_price styling_s">
                                <div className="ProductPrice_wrapper">
                                    <div className="ProductPrice_inner styling_s">
                                        <span className="ProductPrice">
                                          {priceFrom && <span>From</span>}{' '}
                                            <span className="Price_amount styling_mono">
                                            {price}
                                          </span>
                                          <span className="Price_currency">
                                            {currency}
                                          </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ProductCardContent_bottom">
                            <div className="ProductCardContent_variantsWrapper">
                                <div className="ProductColors_wrapper">
                                    {colors.map((color) => (
                                        <ProductColorButton
                                            key={color.name}
                                            color={color.color}
                                            name={color.name}
                                            isLight={color.isLight}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="ProductCardContent_favWrapper">
                                <button>
                                    <span>Wishlist</span>{' '}
                                    <sup className="Sup_wrapper styling_mono">[♡]</sup>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    )
}

export default GridCard
const ProductColorButton = ({color, isLight}: ProductColorButtonProps) => (
    <button className={cn('ProductColor_wrapper', {ProductColor_light: isLight})} style={{backgroundColor: color}}/>
)