import {
    Children,
    ReactElement,
    ReactNode,
    cloneElement,
    isValidElement,
} from 'react'

type SwapProps = {
    on: string | number | boolean
    children: ReactNode
    fallback?: ReactNode
}

type CaseProps = {
    is: string | number | boolean
    children: ReactNode
}

export const Swap = ({
                         on,
                         children,
                         fallback,
                     }: SwapProps): JSX.Element => {
    let matchedChild: ReactNode | null = null

    Children.forEach(children, child => {
        if (matchedChild || !isValidElement(child)) {
            return
        }

        if (child.type === Swap) {
            matchedChild = cloneElement(child as ReactElement<SwapProps>, {
                on,
                fallback,
            })
        } else {
            const caseValue = (child as ReactElement<CaseProps>).props.is

            if (caseValue === on) {
                matchedChild = child
            }
        }
    })

    return matchedChild || (fallback as JSX.Element)
}

export const Case = ({children}: CaseProps) => {
    return <>{children}</>
}
