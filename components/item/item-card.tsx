import {Specification} from '@/components/item/item-specs'
import {ProductPrice, WishlistButton} from '@/components/item/item-header'

export interface Product {
    sku: string;
    title: string;
    price: number;
    currency: string;
    description: string;
    images: string[];
    dimensions: Specification[];
    characteristics: Specification[];
    url: string;
    image: string;
    rolloverImage: string;
    showFromPrice?: boolean;
}
interface Props {
    product: Product
}
function ItemCard({ product }:Props) {
    return (
        <>
            <div className="ProductCard_wrapper ProductCard_isHorizontal">
                <a className="ProductCard_link" href={product.url}>
                    <div className="ProductCard_imgWrapper">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="AsyncImage_image ProductCard_img loaded"
                            src={product.image}
                            alt={product.title}
                        />
                        <img
                            className="AsyncImage_image ProductCard_rollImg loaded"
                            src={product.rolloverImage}
                            alt={product.title}
                        />
                    </div>
                    <div className="ProductCardContent_wrapper ProductCardContent_isHorizontal">
                        <div className="ProductCardContent_top">
                            <h3 className="ProductCardContent_title styling_serif">
                                {product.title}
                            </h3>
                            <ProductPrice
                                amount={product.price}
                                currency={product.currency}
                                showFrom={product.showFromPrice}
                            />
                        </div>
                        <div className="ProductCardContent_bottom">
                            <div className="ProductCardContent_variantsWrapper">
            <span className="ProductCardContent_see">
              <span className="ProductCardContent_variants">See</span>
              <sup className="Sup_wrapper styling_mono">[+]</sup>
            </span>
                            </div>
                            <WishlistButton />
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}
export default ItemCard