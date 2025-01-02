import React, {ReactNode} from 'react'
import {List, Show} from '@/components/utils'
import specs from '@/data/specs'
import {SectionTitle} from '@/components/info'
import {UnderlinedLink} from '@/components/item/base'


function ItemSpec() {
    return (
        <List from={specs}>
            {(section, index) => (
                <div className="ProductInfos_wrapper">
                    <SectionTitle
                        title={section.title}
                        tag={`${index} + 2`}
                        className="ProductInfos_title"
                    />
                    <div className="ProductInfos_list">
                        <List from={section.items}>
                            {(item) => (
                                <InfoItem title={item.title}>
                                    <Show when={item.download?.href} fallback={
                                        <InfoText value={item.value} unit={item.unit} />
                                    }>
                                        <UnderlinedLink
                                            href={item.download?.href}
                                            label={item.download?.label || ""}
                                            size={item.download?.size}
                                            unit={item.download?.unit}
                                            target="_blank"
                                            download
                                        />
                                    </Show>
                                </InfoItem>
                            )}
                        </List>
                    </div>
                </div>
            )}
        </List>
    )
}

export default ItemSpec

const InfoItem = ({children,title}: {
    title: string
    children?: ReactNode
}) => (
    <div className="ProductInfos_item">
        <h3 className="ProductInfos_itemTitle styling_s">{title}</h3>
        {children}
    </div>
)

const InfoText = ({value, unit}: { value?: string, unit?: string }) => (
    <span className="ProductInfos_itemValue styling_s styling_mono">
        {value}{unit && <sup className="Sup_wrapper styling_mono ProductInfos_unit">[{unit}]</sup>}
    </span>
)