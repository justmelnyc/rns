const downloadItems = [
    {
        category: 'Seating',
        items: [
            {
                number: '01.01',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_UD_TECHNICAL_DRAWING_1000x.png?v=1701171438',
                model: 'UD Chair',
                sku: '10510-10000',
                files: {
                    '3D': {type: 'zip', size: '1.42'},
                    'Images': {type: 'zip', size: '7.87'},
                    'Factsheet': {type: 'pdf', size: '0.13'}
                }
            },
            {
                number: '01.02',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_T37_TECHNICAL_DRAWING_1000x.png?v=1701171438',
                model: 'T37 Chair',
                sku: '10500-10000',
                files: {
                    '3D': {type: 'zip', size: '1.52'},
                    'Images': {type: 'zip', size: '7.9'},
                    'Factsheet': {type: 'pdf', size: '0.11'}
                }
            },
            {
                number: '01.03',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_FAUTEUIL_A56_TECHNICAL_DRAWING_1000x.png?v=1701171438',
                model: 'A56 Armchair',
                sku: '10541-10000',
                files: {
                    '3D': {type: 'zip', size: '3.57'},
                    'Images': {type: 'zip', size: '3.58'},
                    'NewFile': {type: 'pdf', size: '0.14'},
                    'Factsheet': {type: 'pdf', size: '0.14'}
                }
            },
            {
                number: '01.04',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_FAUTEUIL_A56plus_TECHNICAL_DRAWING_1000x.png?v=1701171438',
                model: 'A56+ Armchair',
                sku: '10542-10000',
                files: {
                    '3D': {type: 'zip', size: '3.4'},
                    'Images': {type: 'zip', size: '6.3'},
                    'Factsheet': {type: 'pdf', size: '0.15'}
                }
            },
            {
                number: '01.05',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_AC_TECHNICAL_DRAWING_1000x.png?v=1701171438',
                model: 'AC Chair',
                sku: '10538-10000',
                files: {
                    '3D': {type: 'zip', size: '3.75'},
                    'Images': {type: 'zip', size: '12.65'},
                    'Factsheet': {type: 'pdf', size: '0.14'}
                }
            },
            {
                number: '01.06',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_AC16_TECHNICAL_DRAWING_1000x.png?v=1701171438',
                model: 'AC16 Armchair',
                sku: '10547-10000',
                files: {
                    '3D': {type: 'zip', size: '3.43'},
                    'Images': {type: 'zip', size: '12.39'},
                    'Factsheet': {type: 'pdf', size: '0.11'}
                }
            },
            {
                number: '01.07',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_FAUTEUIL_MOUETTE_TECHNICAL_DRAWING_1000x.png?v=1701171438',
                model: 'Mouette Kids Armchair',
                sku: '10524-10000',
                files: {
                    '3D': {type: 'zip', size: '2.81'},
                    'Images': {type: 'zip', size: '12.51'},
                    'Factsheet': {type: 'pdf', size: '0.13'}
                }
            },
            {
                number: '01.08',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABOURET_MOUETTE_TECHNICAL_DRAWING_1000x.png?v=1701171438',
                model: 'Mouette Kids Stool',
                sku: '10576-10000',
                files: {
                    '3D': {type: 'zip', size: '2.86'},
                    'Images': {type: 'zip', size: '8.63'},
                    'Factsheet': {type: 'pdf', size: '0.11'}
                }
            },
            {
                number: '01.09',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_FAUTEUIL_LAMES_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Slatted Armchair',
                sku: '10630-10000',
                files: {
                    '3D': {type: 'zip', size: '2.34'},
                    'Images': {type: 'zip', size: '11.36'},
                    'Factsheet': {type: 'pdf', size: '3.59'}
                }
            },
            {
                number: '01.10',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_FAUTEUIL_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Solid Armchair',
                sku: '10634-10000',
                files: {
                    '3D': {type: 'zip', size: '0.99'},
                    'Images': {type: 'zip', size: '10.38'},
                    'Factsheet': {type: 'pdf', size: '3.9'}
                }
            },
            {
                number: '01.11',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_BANC_LAMES_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Slatted Bench',
                sku: '10905-10000',
                files: {
                    '3D': {type: 'zip', size: '2.2'},
                    'Images': {type: 'zip', size: '6.32'},
                    'Factsheet': {type: 'pdf', size: '3.97'}
                }
            },
            {
                number: '01.12',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_HAUTE_LAMES_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Slatted High Chair',
                sku: '10902-10000',
                files: {
                    '3D': {type: 'zip', size: '1.23'},
                    'Images': {type: 'zip', size: '9.68'},
                    'Factsheet': {type: 'pdf', size: '4.78'}
                }
            },
            {
                number: '01.13',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_LAMES_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Slatted Chair',
                sku: '10901-10000',
                files: {
                    '3D': {type: 'zip', size: '1.33'},
                    'Images': {type: 'zip', size: '11.57'},
                    'Factsheet': {type: 'pdf', size: '3.92'}
                }
            },
            {
                number: '01.14',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Solid Chair',
                sku: '10900-10000',
                files: {
                    '3D': {type: 'zip', size: '1.27'},
                    'Images': {type: 'zip', size: '9.08'},
                    'Factsheet': {type: 'pdf', size: '3.76'}
                }
            },
            {
                number: '01.15',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_FAUTEUIL_LOUNGE_LAMES_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Lounge Slatted Armchair',
                sku: '10632-10000',
                files: {
                    '3D': {type: 'zip', size: '1.3'},
                    'Images': {type: 'zip', size: '13.5'},
                    'Factsheet': {type: 'pdf', size: '3.72'}
                }
            },
            {
                number: '01.16',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_OTTOMAN_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Slatted Ottoman',
                sku: '10904-10000',
                files: {
                    '3D': {type: 'zip', size: '1.12'},
                    'Images': {type: 'zip', size: '7.64'},
                    'Factsheet': {type: 'pdf', size: '3.77'}
                }
            },
            {
                number: '01.17',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABOURET_PATIO_TECHICAL_DRAWING_1000x.png?v=1713775215',
                model: 'Patio Slatted Stool',
                sku: '10903-10000',
                files: {
                    '3D': {type: 'zip', size: '1.52'},
                    'Images': {type: 'zip', size: '7.2'},
                    'Factsheet': {type: 'pdf', size: '3.7'}
                }
            },
            {
                number: '01.18',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TO5B44_1_1000x.png?v=1719565444',
                model: 'Patio Slatted Back Bench',
                sku: '10906-10000',
                files: {
                    'Images': {type: 'zip', size: '12.01'},
                    'Factsheet': {type: 'pdf', size: '4.06'}
                }
            },
            {
                number: '01.19',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOF2DF_1_1000x.png?v=1721830015',
                model: 'T37 Woven Chair',
                sku: '11208-10000',
                files: {
                    'Images': {type: 'zip', size: '10.4'},
                    'Factsheet': {type: 'pdf', size: '0.16'}
                }
            },
            {
                number: '01.20',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_BANC_T37_TECHNICAL_DRAWING_1000x.png?v=1726051850',
                model: 'T37 Bench',
                sku: '11154-10000',
                files: {
                    'Images': {type: 'zip', size: '5.25'},
                    'Factsheet': {type: 'pdf', size: '0.17'}
                }
            },
            {
                number: '01.21',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABOURET_T37_CARRE_TRESSE_TECHNICAL_DRAWING_1000x.png?v=1726051900',
                model: 'T37 Woven Square Stool',
                sku: '11502-10000',
                files: {
                    'Images': {type: 'zip', size: '3.54'}
                }
            }
        ]
    },
    {
        category: 'Tables',
        items: [
            {
                number: '02.01',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_UD_TECHNICAL_DRAWING_1000x.png?v=1701181956',
                model: 'UD Table',
                sku: '10521-10000',
                files: {
                    '3D': {type: 'zip', size: '0.82'},
                    'Images': {type: 'zip', size: '0.75'},
                    'Factsheet': {type: 'pdf', size: '0.1'}
                }
            },
            {
                number: '02.02',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_MONACALE_TECHNICAL_DRAWING_1000x.png?v=1701181956',
                model: 'T37 Monastic table',
                sku: '10517-10000',
                files: {
                    '3D': {type: 'zip', size: '1.07'},
                    'Images': {type: 'zip', size: '6.2'},
                    'Factsheet': {type: 'pdf', size: '0.1'}
                }
            },
            {
                number: '02.03',
                image: 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_RONDE_T37_TECHNICAL_DRAWING_1000x.png?v=1701181956',
                model: 'T37 Round table',
                sku: '10518-10000',
                files: {
                    '3D': {type: 'zip', size: '1.07'},
                    'Images': {type: 'zip', size: '6.2'},
                    'Factsheet': {type: 'pdf', size: '0.1'}
                }
            },]
    },
]
export default downloadItems