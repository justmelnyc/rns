import { ReactNode } from 'react'

type RenderProp<T> = (value: NonNullable<T>) => ReactNode

/**
 * Props for the Show component
 * @template T - The type of the condition value
 */
type ShowProps<T> = {
    when: T | undefined | null | false
    fallback?: ReactNode
    children?: ReactNode | RenderProp<T>
    keepAlive?: boolean
}

/**
 * A conditional rendering component
 * @template T - The type of the condition value
 */
function Show<T>({
                     when,
                     fallback,
                     children,
                     keepAlive = false,
                 }: ShowProps<T>) {
    const renderChildren = () => {
        if (!when) return null
        if (typeof children === 'function') {
            return (children as RenderProp<T>)(when as NonNullable<T>)
        }
        return children
    }

    if (keepAlive) {
        return (
            <div style={{ display: when ? undefined : 'none' }}>
                {renderChildren()}
            </div>
        )
    }

    if (!when) return fallback ?? null

    return renderChildren()
}

export default Show

// Basic usage
// <Show when={isVisible}>
//     <div>Content</div>
// </Show>

// With render props
// <Show when={user}>
//     {(user) => <UserProfile userData={user} />}
// </Show>

// With keep-alive
// <Show when={shouldShow} keepAlive>
//     <ExpensiveComponent />
// </Show>

// With error boundary and suspense
// <Show
//     when={data}
//     errorBoundary
//     suspense
//     fallback={<LoadingSpinner />}
// >
//     {(data) => <DataVisualizer data={data} />}
// </Show>