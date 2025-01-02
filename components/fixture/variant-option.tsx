import Link from 'next/link'

interface VariantOptionProps {
    label: string
    value: string
    image?: string
}

function VariantOption({label, value, image}: VariantOptionProps) {
    return (
        <>
            <Link className="VariantCard_wrapper" href={'/'}>
                <div className="VariantCard_imageWrapper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt={label} className="VariantCard_image"/>
                </div>
                <div className="VariantCard_footer">
                    <div className="VariantCard_content">
                        <h4 className="VariantCard_title">{label}</h4>
                    </div>
                    <div className="styling_s">
                          <span className="ProductPrice_new">
                            <span className="Price_amount styling_mono">{value}</span>
                            <span className="Price_currency">USD</span>
                          </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default VariantOption