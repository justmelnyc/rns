/**
 * @param when - condition to be evaluated
 * @param wrapper - wrapping element when condition is true
 * @param children - element to be rendered
 *
 *
 */
import {Component, ReactElement, ReactNode, cloneElement} from 'react'

//TODO: fix this typescript incantation to be more readable.
type Element = ReactElement<
    any,
    | string
    | ((
    props: any,
) => ReactElement<
    any,
    string | (new (props: any) => Component<any, any, any>)
> | null)
    | (new (props: any) => Component<any, any, any>)
>

type WrapProps<T> = {
    when: T | undefined | null | false
    with: (el: ReactNode) => Element
    children: ReactNode
}

function Wrap<T>({when, with: wrapper, children}: WrapProps<T>): Element {
    return when ? cloneElement(wrapper(children)) : <>{children}</>
}

export default Wrap
