import Link from 'next/link'
import {cn} from '@/utils'


interface Props {
    id: string
    title: string
    price: number
    currency: string
    imageUrl: string
    selected?: boolean
}

function ItemImagePreview({title, price, currency, imageUrl, id, selected}: Props) {
    return (
        <Link
            className={cn('ProductVariantsGrid_card', {'ProductVariantsGrid_selected': selected})}
            href={`/item/${id}`}>
            <div className="ProductVariantsGrid_cardContent">
                <h4>{title}</h4>
                <div className="ProductPrice_wrapper">
                    <div className="ProductPrice_inner styling_s">
                          <span className="ProductPrice">
                            <span className="Price_amount styling_mono">{price}</span>
                            <span className="Price_currency">{currency}</span>
                          </span>
                    </div>
                </div>
            </div>
            <img src={imageUrl} className="ProductVariantsGrid_cardImage" alt={`${title} variant`}/>
            <div className="ProductVariantsGrid_cardFooter"/>
        </Link>
    )
}

export default ItemImagePreview