import {getRunById} from '@/redis'
import {Page} from '@/components/layout'
import {getLocationName} from '@/utils'
import {View} from '@/components/utils'
import {
    ItemAction,
    ItemDescription,
    ItemDetails,
    ItemGallery,
    ItemImageGrid,
    ItemOverview,
    ItemSpec,
    ItemSteps, RecentlyViewed, RelatedItems
} from '@/components/item'
import images from '@/data/images'
import {VariantSelector} from '@/components/fixture'
import React from 'react'
import {convertDistance} from '@/utils/run'

async function RunPage({params: {id}}: { params: { id: string } }) {

    const run = await getRunById(id)
    const isMetric = false
    if (Object.keys(run).length === 0) {
        throw new Error('Run not found')
    }
    const {
        name,
        start_date,
        duration,
        distance,
        start_lat,
        start_lng,
        polyline,
        isContinuous,
        treadmill,
        city,
        borough,
        state,
        max_heartrate,
        cadence
    } = run

    return (
        <Page className='Product_wrapper'>
            <ItemOverview
                name={name}
                unit={isMetric ? 'km' : 'mi'}
                value={convertDistance(distance, isMetric)}
            />
            <div className="Product_center">
                <ItemGallery images={images}/>
                <div className="Product_sections">
                    <ItemImageGrid/>
                    <ItemDescription/>
                    <ItemSpec/>
                    <ItemDetails/>
                    <ItemSteps/>
                </div>
            </div>
            <VariantSelector/>
            <ItemAction/>
            <div className="Product_bottom">
                <RelatedItems/>
                <RecentlyViewed/>
            </div>
            {/*<h1 className="workItemHero_title__K_76g text_S__iDbmJ pb-3">*/}
            {/*    <span>{id}</span>*/}
            {/*    <span>{getLocationName(city, borough, state)}</span>*/}
            {/*</h1>*/}
            {/*<View data={run}/>*/}
        </Page>
    )
}

export default RunPage