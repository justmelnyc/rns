import { useCallback, useEffect, useRef, useState } from 'react'
import type { UseIntersectionObserverReturn, IntersectionOptions } from '@/types'

function useIntersectionObserver(
    options: IntersectionOptions = {}
): UseIntersectionObserverReturn {
    const {
        threshold = 0,
        root = null,
        rootMargin = '0%',
        freezeOnceVisible = false,
    } = options

    const [entry, setEntry] = useState<IntersectionObserverEntry>()
    const [frozen, setFrozen] = useState(false)

    const observer = useRef<IntersectionObserver | null>(null)

    const frozen_isIntersecting = entry?.isIntersecting && freezeOnceVisible

    const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry)
        if (freezeOnceVisible && entry.isIntersecting) {
            setFrozen(true)
            observer.current?.disconnect()
        }
    }, [freezeOnceVisible])

    const setRef = useCallback(
        (node: Element | null) => {
            if (frozen) return

            if (observer.current) {
                observer.current.disconnect()
                observer.current = null
            }

            if (node) {
                observer.current = new IntersectionObserver(updateEntry, {
                    threshold,
                    root,
                    rootMargin,
                })
                observer.current.observe(node)
            }
        },
        [frozen, root, rootMargin, threshold, updateEntry]
    )

    useEffect(() => {
        return () => {
            if (observer.current) {
                observer.current.disconnect()
            }
        }
    }, [])

    return {
        ref: setRef,
        entry,
        frozen,
        isIntersecting: frozen ? frozen_isIntersecting : entry?.isIntersecting ?? false,
    }
}

export default useIntersectionObserver