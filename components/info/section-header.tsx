import {PropsWithChildren} from 'react'
import {cn} from '@/utils'

function SectionHeader({children, className}: {className?: string} &PropsWithChildren) {
    return (
        <>
            <div className={cn('CollectionBlock_wrapper', className)}>
                <div className="CollectionHeader_wrapper">
                    {children}
                </div>
            </div>
        </>
    )
}

export default SectionHeader