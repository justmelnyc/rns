const text = [
    {
        id: 1,
        title: 'Manifesto',
        number: '01',
        content: `Created in 1935 by Xavier Pauchard, the Chaise A has become an icon of French design, 
      recognized worldwide. Originating from Burgundy, the Chaise A can now be found in fast-food 
      restaurants, Anna Wintour's offices in New-York, and even in the largest design museums 
      across Europe. This iconic model is known by everyone.`,
        imgSrc: 'https://cdn.sanity.io/images/1tas3bbm/production/3c7d0736ff53f23c1565f3ce1bd75ed2b85d2142-5248x7872.jpg?w=1500&q=80',
        reversed: false,
    },
    {
        id: 2,
        title: 'Manifesto',
        number: '02',
        content: `Although its design is now in the public domain, allowing for mass production in Asia 
      and elsewhere, the form of an original Tolix chair and a reproduction may be similar, 
      but the materials and manufacturing techniques are radically different. At Tolix, each 
      Chaise A is handmade: stamping on historical machines, welding by our artisans, and spray 
      painting. Every chair is therefore unique, imbued with craftsmanship and passion.`,
        imgSrc: 'https://cdn.sanity.io/images/1tas3bbm/production/279cd63fb9974335588215dfe1fdc367ca655ed6-5504x6880.jpg?w=1500&q=80',
        reversed: true,
    },
    {
        id: 3,
        title: 'Manifesto',
        number: '03',
        content: `Today, TOLIX reaffirms this difference by relaunching the Chaise A in a more accessible 
      version, without compromising on quality, to encourage reflection on the value of Made 
      in France and handmade craftsmanship in the face of mass production.`,
        imgSrc: 'https://cdn.sanity.io/images/1tas3bbm/production/6b185416190be3f2ce2bc3047011437cedcbc170-3121x3901.jpg?w=1500&q=80',
        reversed: false,
    },
    {
        id: 4,
        title: 'Craftsmanship',
        number: '04',
        content: `The manufacturing of a Chair A requires 100 manual operations.`,
        imgSrc: 'https://cdn.sanity.io/images/1tas3bbm/production/55674772bf897cb268492b4a3fcd9bb6f3187565-2400x3200.jpg?w=1500&q=80',
        reversed: true,
        bigNumber: { value: '100', unit: '' },
    },
    {
        id: 5,
        title: 'Success',
        number: '05',
        content: `Over 1 million chairs have been manufactured by Tolix since its creation.`,
        imgSrc: 'https://cdn.sanity.io/images/1tas3bbm/production/8e8d2e4f5a2d48629aaad67c404fac403b652d1e-4371x5464.jpg?w=1500&q=80',
        reversed: false,
        bigNumber: { value: '1', unit: 'M' },
    },
    {
        id: 6,
        title: 'Commitments',
        number: '06',
        content: `A maximum distance of 400 km to maintain a short supply chain for sourcing our materials.`,
        imgSrc: 'https://cdn.sanity.io/images/1tas3bbm/production/a16555099d4f7417d73e13f7f8f549522209b37e-3801x4751.jpg?w=1500&q=80',
        reversed: true,
        bigNumber: { value: '400', unit: 'Km' },
    },
    {
        id: 7,
        title: 'Durability',
        number: '07',
        content: `The A Chair is composed of 99% recyclable materials.`,
        imgSrc: 'https://cdn.sanity.io/images/1tas3bbm/production/cfa5fa89c9c96dc5e0e38165224453408f0c053d-2123x2654.jpg?w=1500&q=80',
        reversed: false,
        bigNumber: { value: '99', unit: '%' },
    },
    {
        id: 8,
        title: 'Origin',
        number: '08',
        content: `100% made in Autun`,
        imgSrc: 'https://cdn.sanity.io/images/1tas3bbm/production/13ae50d9f9ae1bf56795c1335bf114c15ebb21b2-2052x2566.jpg?w=1500&q=80',
        reversed: true,
        bigNumber: { value: '100', unit: '%' },
    },
];

export default text;

export const blocks = [
    {
        id: "04.1",
        title: "Made in France",
        description: "All our pieces are manufactured in Autun at the historic factory since 1927.",
        imageUrl: "https://cdn.sanity.io/images/1tas3bbm/production/6cc99752ad242d3e8b3301d854c6bf0381a075c6-8192x5464.png?w=1500&q=80&auto=format",
        ratio: 1.499267935578331,
        cta: null,
    },
    {
        id: "04.2",
        title: "Durability",
        description: "The A Chair is composed of 99% recyclable materials.",
        imageUrl: "https://cdn.sanity.io/images/1tas3bbm/production/13abea8d643ef4b7fb1f05619a1c776d31c303b9-8192x5464.jpg?w=1500&q=80&auto=format",
        ratio: 1.499267935578331,
        cta: null,
    },
    {
        id: "04.3",
        title: "Quality",
        description: "The Chair A is guaranteed for 10 years.",
        imageUrl: "https://cdn.sanity.io/images/1tas3bbm/production/6d13cace4694d69269b6af15c95769fc529cbcc3-7642x5097.jpg?w=1500&q=80&auto=format",
        ratio: 1.499313321561703,
        cta: { text: "Warranty", href: "/" },
    },
    {
        id: "04.4",
        title: "Fair price",
        description: "The Chaise A in the MFT version and its 12 colors is sold exclusively on our website, without intermediaries, in order to offer the most affordable price possible.",
        imageUrl: "https://cdn.sanity.io/images/1tas3bbm/production/e8c861184bbb8c64c2a50d089870001b4ed8e925-2800x1575.jpg?w=1500&q=80&auto=format",
        ratio: 1.7777777777777777,
        cta: null,
    },
];

