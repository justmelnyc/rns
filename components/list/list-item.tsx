import Link from 'next/link'
import {Item} from '@/types'
import {InfoColumn, UnderlinedLink} from '@/components/item/base'
import {List} from '@/components/utils'

interface Stat {
    name: string
    value: string
    unit?: string
}
interface Props {
    item: Item
}

function ListItem({item}: Props) {
    return (
        <>
            <li className="DownloadsList_line">
                <div className="DownloadsItem_wrapper">
                    <Link href="/item" className="DownloadsItem_link">
                        <div className="DownloadsItem_imageWrapper">
                            <span className="DownloadsItem_number styling_mono styling_s">[{item.number}]</span>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="AsyncImage_image DownloadsItem_image loaded"
                                src={item.image}
                                alt={item.model}
                            />
                        </div>
                        <div className="DownloadsItem_infos">
                            <InfoColumn title="Model" value={item.model}/>
                            <InfoColumn
                                title="SKU N°"
                                value={item.sku}
                                valueClassName="styling_s styling_mono DownloadsItem_sku"
                            />
                        </div>
                    </Link>
                    <div className="DownloadsItem_files">
                        <List from={Object.entries(item.files)}>
                            {([fileType, fileInfo]) => fileInfo && (
                                <InfoColumn
                                    title={fileType}
                                    value={
                                        <UnderlinedLink
                                            href="/item"
                                            label={fileInfo.type}
                                            size={fileInfo.size}
                                        />
                                    }
                                />
                            )}
                        </List>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ListItem
