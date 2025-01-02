'use client'
import React, {useState} from 'react'
import {useScrollPosition} from '@n8tb1t/use-scroll-position'
import Link from 'next/link'
import {cn} from '@/utils'
import {List, Show} from '@/components/utils'
import {Search} from '@/components/layout/index'
import {useDynamicStyles} from '@/hooks'
import Menu from './menu'
import {usePathname} from 'next/navigation'
import {dialogKeys, useUIStore} from '@/features/app/store'

type HeaderProps = {
    isScrolled?: boolean;
    isSidePanelOpen?: boolean;
    isSearchOpen?: boolean;
    transparent?: boolean;
    subMenuItems?: {
        label: string;
        href: string;
    }[];
}
const subMenuItems = [
    {label: 'Grid', href: '/grid'},
    {label: 'List', href: '/list'},
    {label: 'Tile', href: '/tile'},
    {label: 'Base', href: '/base'},
    {label: 'Date', href: '/date'},
    {label: 'Text', href: '/text'},
]


const Header: React.FC<HeaderProps> = ({transparent}) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { dialogs } = useUIStore();

    const hasSubmenu = subMenuItems && subMenuItems.length > 0

    useScrollPosition(({currPos}) => {
        const isShow = currPos.y < -40
        if (isShow !== isScrolled) setIsScrolled(isShow)
    }, [isScrolled])
    const searchIsOpen = dialogs[dialogKeys.search]
    useDynamicStyles({isScrolled})

    return (
        <header className={cn(
            'Header_wrapper',
            {Header_transparent: transparent && !isScrolled && !searchIsOpen},
            {'Header_xs': isScrolled, 'Header_s': !isScrolled}
        )}>
            <div className="Header_right">
                <div className="Header_content">
                    <div className="Header_links">
                        <Menu/>
                        <div className="Header_spacer"/>
                        <Search/>
                    </div>
                    <List from={subMenuItems} className="Subheader_wrapper">
                        {(item) => <NavLink {...item}/>}
                    </List>
                </div>
            </div>
            <div className="Header_left">
                <Logo/>
                <div className="Header_ruler Header_s"/>
                <Show when={hasSubmenu}>
                    <div className="Header_ruler Header_m"/>
                </Show>
            </div>
        </header>
    )
}

export default Header

const Logo: React.FC = () => (
    <Link href="/" className="Header_logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 884 235" fill="none" aria-label="Tolix"
             className="Icons_logo Header_img">
            <path fill="#191919"
                  d="M162.2 7.3H0v48.5h52.5v171.9h57.3V55.8h52.4V7.3Zm299.5 0h-57.3v220.4H552v-48.5h-90.4V7.3Zm166.4 0h-57.4v220.4h57.4V7.3ZM798 112.7 875.3 7.3H806l-42.4 62.4L719 7.3h-71l81.9 105.4-86.8 115h70l50.5-70.7 50.8 70.7H884l-86-115ZM286.6.6a117.6 117.6 0 1 0-24 234 117.6 117.6 0 0 0 24-234ZM336 128a62.2 62.2 0 0 1-50.9 50.9 62.3 62.3 0 0 1-72-72 62.2 62.2 0 0 1 51-50.8 62.3 62.3 0 0 1 71.9 72Z"/>
        </svg>
    </Link>

)

function NavLink({href, label}: {
    href: string;
    label: string;
}) {
    const pathname = usePathname()
    const isActive = pathname.includes(href)
    const className = cn(
        'TextButton_wrapper Subheader_link',
        {'TextButton_grey TextButton_hoverable': !isActive}
    )
    return (
        <>
            <Link href={href} className={className}>
                <span className="TextButton_content">{label}</span>
            </Link>
        </>
    )
}
