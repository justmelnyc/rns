'use client'
import * as Tabs from '@radix-ui/react-tabs'
import {CSSProperties, PropsWithChildren} from 'react'
import Link from 'next/link'
import {Dialog, DialogClose, DialogContent, DialogTrigger, TextButton} from '@/components/ui'
import Panel from '@/components/layout/panel'
import {List, Show} from '@/components/utils'
import {cn} from '@/utils'
import menu, {mainMenu} from '@/data/menu'

function Menu() {
    return (
        <Dialog>
            <DialogTrigger>
                <TextButton label="Menu" supText="+"/>
            </DialogTrigger>

            <DialogContent>
                <Panel className="PanelMenu_wrapper PanelContent_wrapper">
                    <div className="PanelHeader_wrapper PanelMenu_header">
                        <DialogClose>
                            <TextButton label="Close" supText="x"/>
                        </DialogClose>
                    </div>
                    <div className="PanelMenu_inner">
                        <Navigation nested horizontal>
                            <Navigation nested>
                                <List from={menu}>
                                    {(item) => (
                                        <Navigation.Group>
                                            <Navigation.Category
                                                href={item.href}
                                                count={item.count}
                                                label={item.label}
                                            />
                                            <List from={item.links} className="Navigation_children">
                                                {(link) => <Navigation.Item href={link.href} label={link.label}/>}
                                            </List>
                                        </Navigation.Group>
                                    )}
                                </List>
                            </Navigation>
                        </Navigation>
                        <Navigation.Spacer/>
                        <Navigation.MainLinks>
                            <Tabs.Root defaultValue="My Account" orientation="vertical" className="flex">
                                <Tabs.List aria-label="tabs example" className="NavigationToggle_mainLinks">
                                    <List from={mainMenu}>
                                        {(link) => (
                                            <Tabs.Trigger
                                                className="TextButton_wrapper NavigationToggle_mainLink TextButton_underlined TextButton_hoverable"
                                                value={link.label}>
                                                <span className="TextButton_content">{link.label}</span>
                                            </Tabs.Trigger>
                                        )}
                                    </List>
                                </Tabs.List>
                                <div>
                                    <div>
                                        <List from={mainMenu}>
                                            {(menu, index) => (
                                                <Tabs.Content value={menu.label}>
                                                    <List
                                                        from={menu.links}
                                                        className="NavigationToggle_subLinks NavigationToggle_active"
                                                        style={{'--offset': index} as CSSProperties}
                                                    >
                                                        {(link) => <NavigationMainLink label={link.label}
                                                                                       href={link.href}/>}
                                                    </List>
                                                </Tabs.Content>
                                            )}
                                        </List>
                                    </div>
                                </div>
                            </Tabs.Root>
                        </Navigation.MainLinks>
                    </div>
                </Panel>
            </DialogContent>
        </Dialog>
    )
}

export default Menu
const Spacer = () => <div className="PanelMenu_spacer"/>
const Navigation = ({children, nested, horizontal}: {
    nested?: boolean;
    horizontal?: boolean;
} & PropsWithChildren) => (
    <div className={cn(`Navigation_wrapper`, {Navigation_nested: nested, Navigation_horizontal: horizontal})}>
        {children}
    </div>
)
const NavigationCategory = ({href, label, count}: { href: string, label: string, count: number }) => (
    <Link href={href} className="TextButton_wrapper Navigation_item TextButton_hoverable">
        <span className="TextButton_content">
            <span>{label}</span>
        </span>
        <Show when={count}>
            <sup className="Sup_wrapper styling_mono TextButton_sup">[{count}]</sup>
        </Show>
    </Link>
)

interface NavigationItemProps {
    label: string;
    href?: string;
    onClick?: () => void;
}

const NavigationItem = ({href, label, onClick}: NavigationItemProps) => {

    if (href) {
        return (
            <Link
                href={href}
                className="TextButton_wrapper Navigation_subitem TextButton_grey TextButton_hoverable">
                <span className="TextButton_content">{label}</span>
            </Link>
        )
    }

    return (
        <button
            onClick={onClick}
            className="TextButton_wrapper Navigation_subitem TextButton_grey TextButton_hoverable">
            <span className="TextButton_content">{label}</span>
        </button>
    )
}
const NavigationGroup = ({children}: PropsWithChildren) => (
    <div className="Navigation_group">
        {children}
    </div>
)

const NavigationMainLinks = ({children}: PropsWithChildren) => (
    <div className="NavigationToggle_wrapper">
        <div className="NavigationToggle_inner">
            {children}
        </div>
    </div>
)

const NavigationMainLink = ({label, href}: { label: string, href: string }) => (
    <Link
        href={href}
        className="TextButton_wrapper Navigation_item TextButton_hoverable"
    >
        <span className="TextButton_content">{label}</span>
    </Link>
)


Navigation.Spacer = Spacer
Navigation.Item = NavigationItem
Navigation.Group = NavigationGroup
Navigation.Category = NavigationCategory
Navigation.MainLinks = NavigationMainLinks
Navigation.MainLink = NavigationMainLink

