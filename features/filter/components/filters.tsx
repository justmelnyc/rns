'use client'
import * as Accordion from '@radix-ui/react-accordion'
import {PropsWithChildren} from 'react'
import {Dialog, DialogClose, DialogContent, DialogTrigger, TextButton} from '@/components/ui'
import Panel from '@/components/layout/panel'
import {List} from '@/components/utils'
import {FilterOptions} from '@/data/filters'
import {cn, makeTag} from '@/utils'
import FilterLink from '@/features/filter/components/filter-link'
import pluralize from 'pluralize'
import FilterFooter from '@/features/filter/components/filter-footer'
import {dialogKeys, useUIStore} from '@/features/app/store'

interface FilterProps {
    filters: FilterOptions[]
}

function Filters({filters}: FilterProps) {
    const {dialogs, openDialog} = useUIStore()

    return (
        <Dialog open={dialogs[dialogKeys.filters]} onOpenChange={() => openDialog(dialogKeys.filters)}>
            <DialogTrigger>
                <TextButton label="Filters" supText="+"/>
            </DialogTrigger>
            <DialogContent>
                <Panel className="PanelFilters_wrapper PanelContent_wrapper">
                    <Panel.Header className="PanelFilters_header">
                        <DialogClose>
                            <TextButton label="Close" supText="x"/>
                        </DialogClose>
                    </Panel.Header>
                    <Accordion.Root type="multiple">
                        <List from={filters}>
                            {({label: name, options, tile}, index) => (
                                <Filter label={name} index={index}>
                                    <List as="ul" from={options}
                                          className={cn('FilterPanelBlock_list', {FilterPanelBlock_tiles: tile})}>
                                        {({label, value}) => <FilterLink param={name} value={label} color={value}
                                                                         tile={tile}/>}
                                    </List>
                                </Filter>
                            )}
                        </List>
                    </Accordion.Root>
                    <Panel.Spacer/>
                    <Panel.Footer className="PanelFilters_validations">
                        <FilterFooter/>
                    </Panel.Footer>
                </Panel>
            </DialogContent>
        </Dialog>
    )
}

export default Filters

function Filter({label, index, children}: { label: string, index: number } & PropsWithChildren) {
    return (
        <Accordion.Item
            className="FilterPanelBlock_wrapper FilterPanelBlock_opened"
            value={label}
        >
            <FilterTrigger label={pluralize(label)} index={index}/>
            <Accordion.Content className="FilterPanelBlock_content">
                {children}
            </Accordion.Content>
        </Accordion.Item>
    )
}


function FilterTrigger({label, index}: { label: string, index: number }) {

    return (
        <Accordion.Trigger className="FilterPanelBlock_header">
            <div className="FilterPanelBlock_title">
                <h2 className="TitleNumeric_wrapper styling_s">
                    <span className="TitleNumeric_number styling_mono">[{makeTag(index)}]</span>
                    {label}
                </h2>
            </div>
            <span className="FilterPanelBlock_toggle">
                [<span className="FilterPanelBlock_symbol"/>]
            </span>
        </Accordion.Trigger>
    )
}
