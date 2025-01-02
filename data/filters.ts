type FilterOption = {
    label: string;
    value: string;
}
export type FilterOptions = {
    label: string;
    options: FilterOption[];
    tile?: boolean;
}

export const colors = [
    {label: 'Beige Gris', value: '#9e9764'},
    {label: 'Brun Vert', value: '#89693e'},
    {label: 'Galvanisé', value: '#afafaf'},
    {label: 'Moss Green', value: '#114232'},
    {label: 'Oyster White', value: '#e3d9c7'},
    {label: 'Pure White', value: '#f1ede1'},
    {label: 'Reed Green', value: '#7c765a'},
]
export const collections = [
    {label: 'Aalto', value: 'aalto'},
    {label: 'Aarikka', value: 'aarikka'},
    {label: 'Arabia', value: 'arabia'},
    {label: 'Artek', value: 'artek'},
    {label: 'Fiskars', value: 'fiskars'},
    {label: 'Iittala', value: 'iittala'},
    {label: 'Kalevala', value: 'kalevala'},
    {label: 'Marimekko', value: 'marimekko'},
    {label: 'Nanso', value: 'nanso'},
    {label: 'Pentik', value: 'pentik'},
    {label: 'Vallila', value: 'vallila'},
]

const distances = [
    {label: '1 km', value: '1000'},
    {label: '5 km', value: '5000'},
    {label: '10 km', value: '10000'},
    {label: '10 m', value: '16000'},
    {label: 'Half', value: '21000'},
    {label: 'Marathon', value: '42000'},
]

const years = [
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
    {label: '2017', value: '2017'},
    {label: '2016', value: '2016'},
    {label: '2015', value: '2015'},
    {label: '2014', value: '2014'},
    {label: '2013', value: '2013'},
    {label: '2012', value: '2012'},
]

const filters = [
    {label: 'color', options: colors, tile: true},
    {label: 'collection', options: collections},
    {label: 'year', options: years},
    {label: 'designer', options: collections},
    {label: 'distance', options: distances},
    {label: 'material', options: collections},
    {label: 'style', options: collections},
    {label: 'type', options: collections},
]


export default filters