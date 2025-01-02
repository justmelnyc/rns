import React from 'react'
import {cn} from '@/utils'
import {Show} from '@/components/utils'

interface Props {
    title?: string
    tag?: string
    className?: string
}

function SectionTitle({title = 'Section Title', tag, className}: Props) {
    return (
        <>
            <h2 className={cn('TitleNumeric_wrapper styling_s', className)}>
                <Show when={tag}>
                    <span className="TitleNumeric_number styling_mono">
                        [{tag}]
                    </span>
                </Show>
                {title}
            </h2>
        </>
    )
}

export default SectionTitle