import {useEffect} from 'react'

export const useDynamicStyles = ({
                                     isScrolled,
                                     searchOpen,
                                 }: {
    isScrolled?: boolean;
    searchOpen?: boolean;
}) => {
    useEffect(() => {
        const html = document.documentElement
        const scrollClass = 'no-scroll'

        if (searchOpen) {
            html.classList.add(scrollClass)
        } else {
            html.classList.remove(scrollClass)
        }

        html.style.setProperty('--min-header-height', '77px')
        html.style.setProperty('--max-header-height', '118px')
        html.style.setProperty('--header-height', isScrolled ? '77px' : '118px')

        html.style.setProperty('--subheader-height', '0px')
        html.style.setProperty('--vw', `${window.innerWidth}px`)
        html.style.setProperty('--vh', `${window.innerHeight}px`)
        html.style.setProperty('--ivh', `${window.innerHeight}px`)
    }, [isScrolled, searchOpen])
}

export default useDynamicStyles