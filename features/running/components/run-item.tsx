import Link from 'next/link'
import {InfoColumn, UnderlinedLink} from '@/components/item/base'
import {List, Show} from '@/components/utils'
import {Run} from '@/types/runs'
import {calculatePace, convertDistance} from '@/utils/run'
import {formatDuration, getTagFromDate} from '@/utils/date'
import {getLocationName} from '@/utils'
import RunRoute from '@/features/running/components/run-route'

const image = 'https://cdn.shopify.com/s/files/1/0820/6680/0956/files/TOLIX_CHAISE_T37_TECHNICAL_DRAWING_1000x.png?v=1701171438'

function RunItem({
                     distance,
                     id,
                     start_date,
                     duration,
                     name,
                     city,
                     records,
                     state,
                     average_speed,
                     borough,
                     isContinuous,
                     treadmill,
                     polyline,
                     start_lat,
                     start_lng
                 }: Run) {
    const href = `/run/${id}`
    const isMetric = false

    const hasPolyline = start_lat && start_lng && polyline && false

    const stats = [
        {
            name: 'Distance',
            value: convertDistance(distance, isMetric),
            unit: isMetric ? 'km' : 'mi'
        },
        {
            name: 'Avg. Pace',
            value: calculatePace(duration, distance, isMetric),
            unit: 'min'
        },
        {
            name: 'Duration',
            value: formatDuration(duration),
            unit: 'H:M:S'
        }
    ]
    return (
        <>
            <li className="DownloadsList_line">
                <div className="DownloadsItem_wrapper">
                    <Link href={href} className="DownloadsItem_link">
                        <div className="DownloadsItem_imageWrapper">
                            <span
                                className="DownloadsItem_number styling_mono styling_s">[{getTagFromDate(start_date)}]</span>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="AsyncImage_image DownloadsItem_image loaded"
                                src={image}
                                alt={image}
                            />
                            <Show when={hasPolyline}>
                                <RunRoute polyline={polyline}/>
                            </Show>
                        </div>
                        <div className="DownloadsItem_infos">
                            <InfoColumn title="Name" value={name} valueClassName="styling_s styling_mono DownloadsItem_sku truncate" />
                            <InfoColumn
                                title="N°"
                                value={getLocationName(city, borough, state)}
                                valueClassName="styling_s styling_mono DownloadsItem_sku"
                            />
                        </div>
                    </Link>
                    <div className="DownloadsItem_files">
                        <List from={stats}>
                            {({name, value, unit}) => (
                                <InfoColumn
                                    title={name}
                                    value={
                                        <UnderlinedLink
                                            href={href}
                                            label={value}
                                            unit={unit}
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

export default RunItem