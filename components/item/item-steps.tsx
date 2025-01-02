import React from 'react'
import {List} from '@/components/utils'
import {SectionTitle} from '@/components/info'

const steps = [
    {
        num: '06.1',
        text: 'Clean your steel furniture with a slightly damp sponge and immediately dry it. Prefer warm water with a little Marseille soap or neutral pH dishwashing liquid over alcohol-based solutions. Rinse and dry immediately.'
    },
    {
        num: '06.2',
        text: 'Do not use any detergent (such as bleach or solvent) or abrasive/metallic sponge which could deeply damage the coating.'
    },
    {
        num: '06.3',
        text: 'For bird droppings or similar dirt, we recommend immediate cleaning to prevent corrosion and permanent staining.'
    },
    {
        num: '06.4',
        text: 'Ensure to thoroughly wipe and dry your furniture to avoid any possibility of rust development in the future.'
    }
]

function ItemSteps() {
    return (
        <>
            <div className="ProductCare_wrapper">
                <SectionTitle title='Maintenance' tag={"5"} className='ProductCare_title'/>
                <ul className="ProductCare_list">
                    <List from={steps}>
                        {(step) => <StepItem {...step}/>}
                    </List>
                </ul>
            </div>
        </>
    )
}

export default ItemSteps

function StepItem({num, text}: {num: string, text: string}) {
    return (
        <li className="ProductCare_item">
            <div className="ProductCare_num styling_s styling_mono">
                {num}
            </div>
            <div className="ProductCare_text styling_serif">
                {text}
            </div>
        </li>
    )
}