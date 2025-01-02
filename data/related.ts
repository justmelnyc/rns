type Product = {
    title: string;
    price: number;
    priceFrom?: boolean;
    currency: string;
    href: string;
    images: {
        main: string;
        hover: string;
    };
};

const products: Product[] = [
    {
        title: "Storage Tray",
        price: 60,
        priceFrom: true,
        currency: "USD",
        href: "/international/products/vide-poche-carre",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_VIDE_POCHE_XS_11480-10000_01_800x.jpg?v=1722419642",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_VIDE_POCHE_XS_11480-10000_02_800x.jpg?v=1722419642"
        }
    },
    {
        title: "T37 Monastic table",
        price: 5980,
        currency: "USD",
        href: "/international/products/table-monacale-t37",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_T37_MONACALE_10517-10000_001_800x.jpg?v=1697450710",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_T37_MONACALE_10517-10000_002_800x.jpg?v=1697450710"
        }
    },
    {
        title: "Small T37 Candle Holder and Beeswax Candle",
        price: 60,
        currency: "USD",
        href: "/international/products/petit-bougeoir",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_PETIT_BOUGEOIR_11291-10000__01_800x.jpg?v=1721723040",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_PETIT_BOUGEOIR_11291-10000__02_800x.jpg?v=1721723040"
        }
    },
    {
        title: "T37 Woven Square Stool",
        price: 670,
        priceFrom: true,
        currency: "USD",
        href: "/international/products/tabouret-t37-tresse",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX__1_ce12c813-953b-4df9-a837-928f8dfdc2c0_800x.jpg?v=1725278991",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX__2_5c773ac3-374d-48aa-8825-4cb8e97a9e53_800x.jpg?v=1725278990"
        }
    },
    {
        title: "T37 Coffee table",
        price: 1870,
        priceFrom: true,
        currency: "USD",
        href: "/international/products/table-basse-t37",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_T37_CAFE_h49_10520-10000_001_800x.jpg?v=1697451302",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_T37_CAFE_h49_10520-10000_002_800x.jpg?v=1697451302"
        }
    },
    {
        title: "T37 Woven Square Table",
        price: 1890,
        currency: "USD",
        href: "/international/products/table-cafe-t37-tresse-carre",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_T37_TRESSE_60X60_11522-10000_001_800x.jpg?v=1725023570",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_TABLE_T37_TRESSE_60X60_11522-10000_002_800x.jpg?v=1725023569"
        }
    },
    {
        title: "AC16 Armchair",
        price: 820,
        priceFrom: true,
        currency: "USD",
        href: "/international/products/fauteuil-ac16",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_FAUTEUIL_AC16_10547-10000_001_800x.jpg?v=1698565253",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_FAUTEUIL_AC16_10547-10000_002_800x.jpg?v=1697611708"
        }
    },
    {
        title: "Small T37 Candle Holder and Beeswax Candle",
        price: 120,
        currency: "USD",
        href: "/international/products/grand-bougeoir",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_GRAND_BOUGEOIR_11290-10000__01_800x.jpg?v=1721721627",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_GRAND_BOUGEOIR_11290-10000__02_800x.jpg?v=1721721627"
        }
    },
    {
        title: "CC7 Filing cabinet",
        price: 1890,
        priceFrom: true,
        currency: "USD",
        href: "/international/products/caisson-de-rangement-cc7",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CAISSON_CC7_10559-10000_001_800x.jpg?v=1712131572",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CAISSON_CC7_10559-10000_002_800x.jpg?v=1712131518"
        }
    },
    {
        title: "AC Chair",
        price: 740,
        priceFrom: true,
        currency: "USD",
        href: "/international/products/chaise-ac",
        images: {
            main: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_AC_10538-10000_001_800x.jpg?v=1697611709",
            hover: "https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_AC_10538-10000_002_800x.jpg?v=1697611708"
        }
    }
];

export default products;