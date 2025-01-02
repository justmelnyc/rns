'use client'
import {QueryLink, TextLink} from '@/components/ui'
import {useSearchParams} from 'next/navigation'
import {Show} from '@/components/utils'

const PRESERVED_PARAMS = ['page', 'sort', 'view']

function FilterRest() {
    const searchParams = useSearchParams()

    // Get filtered params excluding preserved ones
    const filterParams = Array.from(searchParams.entries())
        .filter(([key]) => !PRESERVED_PARAMS.includes(key))

    // Create an object of params to clear (set to null)
    const clearParams = Object.fromEntries(
        filterParams.map(([key]) => [key, null])
    )
    return (
        <Show when={filterParams.length}>
            <QueryLink
                params={clearParams}
                replace
            >
                <TextLink label="Reset" supText='x'/>
            </QueryLink>
        </Show>
    )
}
export default FilterRest