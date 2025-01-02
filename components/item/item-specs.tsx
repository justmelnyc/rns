import {List, Show} from '@/components/utils'

export interface Specification {
    label: string;
    value: string | number;
    unit?: string;
}

interface ProductSpecsProps {
    specs: Specification[];
}

function ItemSpecs({specs}: ProductSpecsProps) {
    return (
        <>
            <div className="ProductInfos_list">
                <List from={specs}>
                    {(spec) => (
                        <div className="ProductInfos_item">
                            <h3 className="ProductInfos_itemTitle styling_s">{spec.label}</h3>
                            <span
                                className="ProductInfos_itemValue styling_s ProductInfos_mono styling_mono">
                                {spec.value}
                                <Show when={spec.unit}>
                                     <sup className="Sup_wrapper styling_mono ProductInfos_unit">
                                        [{spec.unit}]
                                    </sup>
                                </Show>
                            </span>
                        </div>
                    )}
                </List>
            </div>
        </>
    )
}

export default ItemSpecs