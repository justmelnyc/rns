"use client"
import {List} from '@/components/utils'
import {CSSProperties, useState} from 'react'
import {ItemImage} from '@/types'


interface Props {
    images: ItemImage[]
}
function ItemGallery({images}:Props) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <>
            <div className="ProductOverview_wrapper">
                <div>
                    <ItemZoomImage
                        src={images[selectedImageIndex].src}
                        alt={images[selectedImageIndex].alt}
                    />
                </div>
                <ul className="ProductOverview_thumbs">
                    <List from={images}>
                        {(image, index) => (
                            <ItemThumbnail
                                key={index}
                                src={image.src.replace('2000x', '100x')} // Adjust for thumbnail size
                                alt={image.alt || `Thumbnail ${index + 1}`}
                                isActive={index === selectedImageIndex}
                                onClick={() => setSelectedImageIndex(index)}

                            />
                        )}
                    </List>
                </ul>
            </div>
        </>
    )
}

export default ItemGallery


interface ItemThumbnailProps {
    src: string;
    alt: string;
    isActive?: boolean;
    onClick?: () => void;
}
function ItemThumbnail({src, alt, isActive, onClick}:ItemThumbnailProps) {
    return (
        <li className={`ProductOverview_thumb ${isActive ? 'ProductOverview_active' : ''}`} onClick={onClick}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="AsyncImage_image ProductOverview_image loaded"
                src={src}
                alt={alt}
                draggable="false"
            />
        </li>
    )
}

function ItemZoomImage({src, alt}: ItemImage) {
    return (
        <div className="ProductOverview_item">
            <button
                className="ProductZoom_itemInner"
                style={{scale: 1, '--x': '0%', '--y': '0%'} as CSSProperties}
            >
                <div className="ProductZoom_imageWrapper">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="AsyncImage_image ProductZoom_image loaded"
                        src={src}
                        alt={alt}
                    />
                </div>
            </button>
        </div>
    )
}