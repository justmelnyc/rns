import React, {PropsWithChildren} from 'react'
import SectionTitle from '../info/section-title'

type Props = {
    label: string
    tag: string
    className?: string
} & PropsWithChildren

function ListHead({label, tag, className, children}: Props) {
    return (
        <div className={className}>
            <SectionTitle title={label} tag={tag}/>
            <div className="CollectionHeader_filters">
                {children}
            </div>
        </div>
    )
}

export default ListHead