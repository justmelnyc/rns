export interface Specs {
    id: string
    tag?: number
    title: string
    items: Item[]
}

export interface Item {
    title: string
    value?: string
    unit?: string
    download?: Download
}

export interface Download {
    label: string
    href: string
    size: string
    unit: string
}
const specs: Specs[] = [
    {
        id: "01",
        title: "Overview",
        items: [
            { title: "Model", value: "A12345" },
            { title: "Color", value: "Black" },
            { title: "Category", value: "Electronics" }
        ]
    },
    {
        id: "02",
        title: "Dimensions & Weight",
        items: [
            { title: "Height", value: "3", unit:"CM" },
            { title: "Width", value: "13", unit:"CM" },
            { title: "Depth", value: "9", unit:"CM" },
            { title: "Weight", value: "0.32", unit:"KG" }
        ]
    },
    {
        id: "03",
        title: "Characteristics",
        items: [
            { title: 'Sku n°', value: '11478-10000' },
            { title: 'Year', value: '2024' },
            { title: 'Usage', value: 'Indoor' },
            { title: 'Storage', value: 'Stackable' },
            { title: 'Assembly', value: 'Preassembled - Not dismountable' },
            { title: 'Manufacturing', value: 'Made in France' },
            { title: 'Guarantee', value: '2 years' }
        ]
    },
    {
        id: "04",
        title: "Resources",
        items: [
            {
                title: "Images",
                download: {
                    label: "zip",
                    href: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_BOITE_METAL.zip?v=1725356332",
                    size: "4.37",
                    unit: "MB"
                }
            },
            {
                title: "Manual",
                download: {
                    label: "pdf",
                    href: "https://example.com/manual.pdf",
                    size: "1.2",
                    unit: "MB"
                }
            },
            {
                title: "Warranty Info",
                download: {
                    label: "pdf",
                    href: "https://example.com/warranty.pdf",
                    size: "0.5",
                    unit: "MB"
                }
            }
        ]
    }
];

export default specs;