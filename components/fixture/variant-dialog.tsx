import Link from 'next/link'
import {Dialog, DialogClose, DialogContent, DialogTrigger, TextButton} from '@/components/ui'
import Panel from '../layout/panel'
import {List, Show} from '@/components/utils'
import React, {PropsWithChildren} from 'react'
import VariantOption from '@/components/fixture/variant-option'
import {Icon} from '@/components/icon'
import {Option} from '@/types'

interface Variant {
    label: string
    value: string
    image?: string
    count?: number
}
interface VariantDialogProps {
    label: string
    options: Variant[]
    selected: {
        image?: string
        count?: number
    } & Option
}

function VariantDialog({label, options, selected}: VariantDialogProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <SelectWrapper>
                    <Selection label={selected.label} image={selected.image} />
                    <SelectionTrigger label={label} count={selected.count} color={'rgb(241, 237, 225)'}/>
                </SelectWrapper>
            </DialogTrigger>
            <DialogContent>
                <Panel className="PanelFilters_wrapper PanelContent_wrapper">
                    <Panel.Header className="PanelFilters_header PanelVariants_header">
                        <div>
                            <span>
                              {label}<sup className="Sup_wrapper styling_mono">[0{options.length}]</sup>
                            </span>
                            <span className="PanelVariants_demand">
                                Do you have a special request? Please&nbsp;
                                <Link href="/">Contact Us</Link>
                            </span>
                        </div>
                        <DialogClose>
                            <TextButton label="Close" supText="x"/>
                        </DialogClose>
                    </Panel.Header>
                    <List from={options} className="PanelVariants_variants">
                        {(variant) => <VariantOption {...variant} />}
                    </List>
                    <Panel.Spacer/>
                </Panel>
            </DialogContent>
        </Dialog>
    )
}

export default VariantDialog

function SelectWrapper({children}: PropsWithChildren) {
    return (
        <div className="ProductSizes_wrapper">
            <div
                className="BigSelect_wrapper ProductMaterial_wrapper ProductSizes_select BigSelect_interactive">
                {children}
            </div>
        </div>
    )
}

function Selection({label,  image}: { image?:string, label: string }) {
    return (
        <div className="ProductMaterial_variant">
            <Show when={image}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="AsyncImage_image ProductMaterial_image loaded"
                    src="https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TO825E_1_100x.png?v=1722414426"
                    alt={label}
                />
            </Show>
            <div className="ProductMaterial_subInfo">
                <h2 className="ProductMaterial_title">{label}</h2>
            </div>
        </div>
    )
}

function SelectionTrigger({label, count, color}: { label: string, count?: number, color?: string }) {
    return (
        <div className="ProductMaterial_cta">
            <Show when={color}>
                <span
                    className="ProductColor_wrapper ProductMaterial_colors ProductColor_selected ProductColor_light"
                    style={{backgroundColor: color}}
                />
            </Show>
            <Show when={count}>
                <span className="ProductMaterial_count styling_s">
                    {count} {label}
                </span>
            </Show>
            <Icon name="chevron"/>
        </div>
    )
}