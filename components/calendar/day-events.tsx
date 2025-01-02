'use client'
import {Button, Dialog, DialogClose, DialogContent, DialogTrigger, TextButton} from '@/components/ui'
import {Panel} from '@/components/layout'
import React, {PropsWithChildren} from 'react'
import {dialogKeys, useUIStore} from '@/features/app/store'
import {blocks} from '@/data/text'
import {ImageSmallText} from '@/components/info'
import {List} from '@/components/utils'
import ItemAction from '../item/item-action'

type DayEventsProps = PropsWithChildren<{
    thing?: string
}>

function DayEvents({children}: DayEventsProps) {
    const {toggleDialog} = useUIStore()

    return (
        <>
            <Dialog>
                <DialogTrigger>
                    {children}
                </DialogTrigger>
                <DialogContent>
                    <Panel className="PanelContent_wrapper PanelWarranty_wrapper">
                        <Panel.Header className="PanelFilters_header PanelWarranty_header">
                            <div>Events Today</div>
                            <DialogClose>
                                <TextButton label="Close" supText="x"/>
                            </DialogClose>
                        </Panel.Header>
                        <List from={blocks} className="Reinsurances_inner">
                            {(item, index) => (
                                <ImageSmallText {...item} big={index === 1}/>
                            )}
                        </List>
                        <ItemAction/>
                    </Panel>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default DayEvents