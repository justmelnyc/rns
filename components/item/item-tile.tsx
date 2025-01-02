import Link from 'next/link'

interface ItemTileProps {
    id: string;
    href: string;
    image: string;
    title: string;
    sku: string;
    variants: number;
    alt: string;
}

function ItemTile({id, image, title, sku, variants}: ItemTileProps) {
    return (
        <li className="CollectionList_item">
            <div className="IndexProductCard_wrapper">
                <Link
                    className="IndexProductCard_link"
                    href="/item"
                >
                      <span className="IndexProductCard_number styling_s styling_mono">
                        [{id}]
                      </span>
                    <div className="IndexProductCard_imgWrapper">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="AsyncImage_image IndexProductCard_img loaded inverted"
                            src={image}
                            alt={title}
                        />
                        <span className="IndexProductCard_more">[+]</span>
                    </div>
                    <div>
                        <h3 className="IndexProductCardContent_title styling_s">
                            {title}
                        </h3>
                        <div className="IndexProductCardContent_skuWrapper styling_s">
                            <span>N°</span>
                            <span className="IndexProductCardContent_sku styling_mono">
                                {sku}
                            </span>
                        </div>
                        <div className="IndexProductCardContent_variantsWrapper styling_s">
                            <button>
                                <span>+{variants} variants</span>
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </li>

    )
}

export default ItemTile