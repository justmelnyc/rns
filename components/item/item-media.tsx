"use client"
import {useState} from 'react'
import {List} from '@/components/utils'


interface ItemGalleryProps {
    images: string[]
}
function ItemGallery({images}: ItemGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="ProductOverview_wrapper">
            <div>
                <List from={images.map(i => ({id:i, image: i}))}>
                    {({image}, index) => (
                        <div
                            className={`ProductOverview_item ${index !== activeIndex ? 'ProductOverview_hidden' : ''}`}
                        >
                            <button className="ProductZoom_itemInner">
                                <div className="ProductZoom_imageWrapper">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        className="AsyncImage_image ProductZoom_image loaded"
                                        src={image}
                                        alt={`Product view`}
                                    />
                                </div>
                            </button>
                        </div>)}
                </List>
            </div>
            <GalleryThumbnails images={images} activeIndex={activeIndex} onSelect={setActiveIndex}/>
        </div>
    )
}

export default ItemGallery

interface GalleryThumbnailsProps {
    images: string[]
    activeIndex: number
    onSelect: (index: number) => void
}

const GalleryThumbnails = ({images, activeIndex, onSelect}:GalleryThumbnailsProps) => (
    <ul className="ProductOverview_thumbs">
        <List from={images.map(i => ({id:i, image: i}))}>
            {({image}, index) => (
                <li
                    className={`ProductOverview_thumb ${index === activeIndex ? 'ProductOverview_active' : ''}`}
                    onClick={() => onSelect(index)}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="AsyncImage_image ProductOverview_image loaded"
                        src={image.replace('2000x', '100x')}
                        draggable="false"
                        alt={`Thumbnail ${index + 1}`}
                    />
                </li>
            )}
        </List>
    </ul>
)