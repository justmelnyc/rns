import {PropsWithChildren} from 'react'
import {cn} from '@/utils'

interface Props extends PropsWithChildren {
    offsetTop?: boolean
    className?: string
}

function Page({children, offsetTop, className}: Props) {
    return (
        <div className="Layout_wrapper">
            <div className={cn('Layout_inner', {Layout_offsetTop: offsetTop}, className)}>
                {children}
            </div>
        </div>
    )
}

export default Page