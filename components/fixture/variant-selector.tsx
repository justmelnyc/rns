'use client'
import {Icon} from '@/components/icon'
import React, {useState} from 'react'
import {List, Show} from '@/components/utils'
import {cn} from '@/utils'
import {Option} from '@/types'


interface Props {
    name: string;
    className?: string;
    selected?: string;
    options: Option[];
    onSelect: (option: string) => void;
}

function VariantSelector({name, onSelect, options, selected}: Props) {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    const select = (value: string) => {
        onSelect(value)
        setOpen(false)
    }
    return (
        <>
            <div className="ProductSizes_wrapper">
                <div className="BigSelect_wrapper ProductSizes_select  BigSelect_interactive">
                    <Show when={open}>
                        <List from={options} className="BigSelect_options">
                            {({label, value}) => (
                                <Selection label={label} value={value} onSelect={select} selected={selected === value}/>
                            )}
                        </List>
                    </Show>

                    <div className="BigSelect_inner BigSelect_opened" onClick={toggle}>
                        <span className="BigSelect_prefix">{name} :</span>
                        <span className="BigSelect_value">{selected}</span>
                        <Icon name="chevron"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VariantSelector


type VariantOptionProps = Option & { selected?: boolean, onSelect: (value: string) => void }

function Selection({label, value, onSelect, selected}: VariantOptionProps) {
    return (
        <button className={cn('BigSelect_option', {active: selected})} onClick={() => onSelect(value)}>
            {label}
        </button>
    )
}