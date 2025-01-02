"use client";
import VariantDialog from '@/components/fixture/variant-dialog'
import variants from '@/data/variants'
import VariantSelector from '@/components/fixture/variant-selector'
import {useState} from 'react'


interface Choice {
    label: string;
    value: string;
    count?: number;
    image?: string;
    color?: string;
}

const sizes: Array<Choice> = [
    {
        label: 'S',
        value: 'S',
    },
    {
        label: 'M',
        value: 'M',
    },
    {
        label: 'L',
        value: 'L',
    },
]

const selection = {
    label: 'Pure White',
    value: 'white',
    count: 7,
    image: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TO825E_1_100x.png?v=1722414426"
}

function FixtureVariants() {
    const [size, setSize] = useState('S')
    return (
        <>
            <div className="ProductBar_topWrapper">
                <div className="ProductBar_top">
                    <VariantDialog label='Colors' options={variants} selected={selection}/>
                    <VariantSelector
                        name={'Size'}
                        options={sizes}
                        selected={size}
                        onSelect={setSize}
                    />
                </div>
            </div>
        </>
    )
}

export default FixtureVariants