const menu: MenuGroup[] = [
    {
        label: 'Seating',
        href: '/',
        count: 27,
        links: [
            {
                label: 'Chairs',
                href: '/',
            },
            {
                label: 'Armchairs',
                href: '/',
            },
            {
                label: 'Stools',
                href: '/',
            },
            {
                label: 'Benches',
                href: '/',
            }
        ],
    },
    {
        label: 'The A Chair',
        count: 14,
        href: '/',
        links: [
            {
                label: 'A Chair',
                href: '/a-chair',
            },
            {
                label: 'Manifesto',
                href: '/',
            }
        ],
    },
    {
        label: 'Tables',
        href: '/',
        count: 18,
        links: [
            {
                label: 'Dining Tables',
                href: '/',
            },
            {
                label: 'Coffee Tables',
                href: '/',
            },
            {
                label: 'Side Tables',
                href: '/',
            }
        ],
    },
    {
        label: 'Storage',
        href: '/',
        count: 9,
        links: [
            {
                label: 'Shelves',
                href: '/',
            },
            {
                label: 'Cabinets',
                href: '/',
            },
            {
                label: 'Sideboards',
                href: '/',
            }
        ],
    },
    {
        label: 'Decoration',
        href: '/',
        count: 12,
        links: [
            {
                label: 'Mirrors',
                href: '/',
            },
            {
                label: 'Vases',
                href: '/',
            },
        ],
    },
    {
        label: 'Collections',
        href: '/',
        count: 6,
        links: [
            {
                label: 'T37',
                href: '/',
            },
            {
                label: 'T37 Woven',
                href: '/',
            },
            {
                label: 'UD',
                href: '/',
            },
            {
                label: 'T55-56',
                href: '/',
            },
            {
                label: 'ABC',
                href: '/',
            },
            {
                label: 'M',
                href: '/',
            },
            {
                label: 'G',
                href: '/',
            }
        ],
    }
]

export default menu

interface MenuItem {
    label: string;
    href: string;
}

interface MenuGroup {
    label: string;
    href: string;
    count: number;
    links?: MenuItem[];
}

interface MainMenu {
    label: string;
    links: MenuItem[];
}

export const mainMenu: MainMenu[] = [
    {
        label: 'Customer Service',
        links: [
            {
                label: 'Delivery',
                href: '/',
            },
            {
                label: 'Payment',
                href: '/',
            },
            {
                label: 'Refund',
                href: '/',
            },
            {
                label: 'GCS',
                href: '/',
            },
            {
                label: 'Contact',
                href: '/',
            },
        ]
    },
    {
        label: 'Boutiques',
        links: [
            {
                label: 'Showroom',
                href: '/',
            },
            {
                label: 'Stockists',
                href: '/',
            }
        ]
    },
    {
        label: 'Manufacture',
        links: [
            {
                label: 'History',
                href: '/',
            },
            {
                label: 'Projects',
                href: '/',
            }
        ]
    },
    {
        label: 'Library',
        links: [
            {
                label: 'Download',
                href: '/',
            },
            {
                label: 'Colors',
                href: '/',
            },
            {
                label: 'Catalog',
                href: '/',
            }
        ]
    },
    {
        label: 'My Account',
        links: [
            {
                label: 'Profile',
                href: '/',
            },
            {
                label: 'Orders',
                href: '/',
            },
            {
                label: 'Wishlist',
                href: '/',
            },
            {
                label: 'Settings',
                href: '/settings',
            }
        ]
    },
]
export const footerMenu = [
    [
        {
            title: 'Collections',
            items: ['T37', 'T37 Woven', 'P', 'UD', 'T55-56', 'ABC', 'M', 'G']
        },
        {
            title: 'Seating',
            count: 21,
            items: ['Chairs', 'Armchairs', 'Stools', 'Benches']
        },
        {
            title: 'Tables',
            count: 14,
            items: ['Dining tables', 'Coffee tables', 'Consoles']
        },
    ],
    [
        {
            title: 'Storage',
            count: 10,
            items: ['Sideboards', 'Drawers', 'Wardrobes']
        },
        {
            title: 'Decoration',
            count: 7,
            items: ['Lightings', 'Accessories']
        },
        {
            title: 'Customer Service',
            items: ['Delivery', 'Payment', 'Refund', 'GCS', 'Contact']
        },
        {
            title: 'Boutiques',
            items: ['Showroom', 'Stockists']
        }
    ],
    [
        {
            title: 'Manufacture',
            items: ['History', 'Projects']
        },
        {
            title: 'Library',
            items: ['Download', 'Colors', 'Catalog']
        },
        {
            title: 'My TOLIX',
            items: ['Account', 'Wishlist', 'International - USD']
        }
    ],
    [
        {
            title: 'Follow us',
            items: ['Instagram', 'Facebook', 'Linked In']
        }
    ]
]