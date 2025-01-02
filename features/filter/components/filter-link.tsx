"use client"
import React, {CSSProperties} from 'react'
import {cn} from '@/utils'
import {QueryLink} from '@/components/ui'
import {useSearchParams} from 'next/navigation'

interface FilterLinkProps {
    value: string
    param: string
    color: string
    tile?: boolean
}

function FilterLink({value, param, color, tile}: FilterLinkProps) {
    const searchParams = useSearchParams()

    const selected = searchParams.get(param) === value
    const inactive = !selected && searchParams.get(param) !== null
    const style = tile ? {'--color': color} as CSSProperties : {}

    const className = cn('FilterPanelBlock_item styling_s-mobile',
        {FilterPanelBlock_tile: tile},
        {inactive},
        {selected}
    )
    return (
        <li style={style} className={className}>
            <QueryLink params={{[param]: value}} className="FilterPanelBlock_button">{value}</QueryLink>
        </li>
    )
}

export default FilterLink