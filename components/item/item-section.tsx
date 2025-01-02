import {ReactNode} from 'react'

interface ItemSectionProps {
    number: string
    title: string
    children: ReactNode
}
function ItemSection({ number, title, children }: ItemSectionProps) {
    return (
        <>
            <div className="ProductDescription_wrapper">
                <div className="ProductDescription_inner">
                    <h2 className="TitleNumeric_wrapper styling_s ProductDescription_title">
                        <span className="TitleNumeric_number styling_mono">[{number}]</span>
                        {title}
                    </h2>
                    {children}
                </div>
            </div>
        </>
    )
}

export default ItemSection