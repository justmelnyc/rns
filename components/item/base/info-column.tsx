import {ReactNode} from 'react'

interface InfoColumnProps {
    title: string
    value: ReactNode
    titleClassName?: string
    valueClassName?: string
}
function InfoColumn({
                        title,
                        value,
                        titleClassName = 'styling_s',
                        valueClassName = 'styling_s'
                    }: InfoColumnProps) {
    return (
        <>
            <div className="DownloadsItem_col">
                <span className={`DownloadsItem_title ${titleClassName}`}>{title}</span>
                <span className={`DownloadsItem_value ${valueClassName}`}>{value}</span>
            </div>
        </>
    )
}

export default InfoColumn