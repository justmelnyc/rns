"use client"
import {Button} from '@/components/ui'
import {usePathname, useSearchParams, useRouter} from 'next/navigation'
import {dialogKeys, useUIStore} from '@/features/app/store'

function FilterFooter() {
    const {closeDialog} = useUIStore()
    const searchParams = useSearchParams()
    const totalFilters = searchParams.toString().split('&').length
    const router = useRouter()
    const pathname = usePathname()

    const clearFilters = () => {
        router.push(pathname)

        closeDialog(dialogKeys.filters)
    }
    const applyFilters = () => {
        closeDialog(dialogKeys.filters)
    }
    return (
        <>
            <Button left half inverted onClick={clearFilters}>
                Clear all <sup className="Sup_wrapper styling_mono">[{totalFilters}]</sup>
            </Button>
            <Button half left disabled={totalFilters <= 0} onClick={applyFilters}>
                Apply <sup className="Sup_wrapper styling_mono">[{totalFilters}]</sup>
            </Button>
        </>
    )
}
export default FilterFooter