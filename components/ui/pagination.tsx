import SectionTitle from '../info/section-title'
import {QueryLink, TextLink} from '@/components/ui/index'
import React from 'react'


interface Props {
    page: number
    total: number
}

function Pagination({total = 0, page}: Props) {
    return (
        <>
            <div className="CollectionHeader_wrapper">
                <SectionTitle title="Page" tag={`${page} of ${total}`}/>
                <div className="CollectionHeader_filters">
                    <QueryLink params={{page: Number(page) - 1}}>
                        <TextLink label="Prev" supText="-"/>
                    </QueryLink>
                    <QueryLink params={{page: Number(page) + 1}}>
                        <TextLink label="Next" supText="+"/>
                    </QueryLink>
                </div>
            </div>
        </>
    )
}

export default Pagination