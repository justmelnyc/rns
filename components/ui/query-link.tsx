'use client'
import {usePathname, useSearchParams} from 'next/navigation'
import {CSSProperties, ReactNode} from 'react'
import Link from 'next/link'

type QueryLinkProps = {
    params: Record<string, string | number | null>
    children: ReactNode
    className?: string
    replace?: boolean
    scroll?: boolean
    toggle?: boolean
    style?: CSSProperties
}

function QueryLink({
                       params,
                       children,
                       className,
                       replace = false,
                       scroll = true,
                       toggle = true,
                       style
                   }: QueryLinkProps) {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Create a new URLSearchParams instance to modify
    const newSearchParams = new URLSearchParams(searchParams?.toString())

    // Update or remove parameters
    Object.entries(params).forEach(([key, value]) => {
        const currentValue = searchParams.get(key)

        if (value === null) {
            newSearchParams.delete(key)
        } else if (toggle && currentValue === String(value)) {
            // If toggling is enabled and the value matches, remove it
            newSearchParams.delete(key)
        } else {
            newSearchParams.set(key, String(value))
        }
    })

    // Create the new URL, omit '?' if there are no params
    const queryString = newSearchParams.toString()
    const href = queryString ? `${pathname}?${queryString}` : pathname
    return (
        <>
            <Link
                href={href}
                className={className}
                replace={replace}
                scroll={scroll}
                style={style}
            >
                {children}
            </Link>
        </>
    )
}

export default QueryLink