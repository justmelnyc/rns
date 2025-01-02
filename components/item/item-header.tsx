
interface Props {
    sku: string
    title: string
    price: number
    currency: string
}
function ItemHeader({ sku, title, price, currency }: Props) {
    return (
        <>
            <div className="ProductHeader_wrapper">
                <div className="ProductHeader_inner">
                    <div className="ProductHeader_top">
                        <div className="ProductHeader_skuWrapper styling_s">
                            <span className="ProductHeader_num">N°</span>
                            <span className="ProductHeader_sku styling_mono">{sku}</span>
                        </div>
                        <div className="ProductHeader_line">
                            <div>
                                <h1 className="ProductHeader_title styling_serif-xl">{title}</h1>
                            </div>
                            <ProductPrice amount={price} currency={currency}/>
                        </div>
                        <WishlistButton/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemHeader

export const WishlistButton = () => (
    <div className="ProductHeader_favWrapper">
        <button>
            <span>Wishlist</span>{" "}
            <sup className="Sup_wrapper styling_mono">[♡]</sup>
        </button>
    </div>
);

interface ProductPriceProps {
    amount: number
    currency: string
    showFrom?: boolean
}

export const ProductPrice = ({ amount, currency, showFrom = false }:ProductPriceProps) => (
    <div className="ProductPrice_wrapper">
        <div className="ProductPrice_inner styling_s">
      <span className="ProductPrice">
        {showFrom && <span>From </span>}
          <span className="Price_amount styling_mono">{amount}</span>
        <span className="Price_currency">{currency}</span>
      </span>
        </div>
    </div>
);