import GridCard, {GridCardItem} from '@/components/grid/grid-card'
import {CSSProperties} from 'react'
import {List} from '@/components/utils'
import {FilterDialog} from '@/components/ui'
import {makeTag} from '@/utils'
import Link from 'next/link'
import FixtureDialog from '@/components/fixture/fixture-dialog'
import {SectionTitle} from '@/components/info'

interface GridListProps {
    title: string
    products: GridCardItem[]
    tag: number
}

function GridList({title, tag, products}: GridListProps) {

    return (
        <>
            <div className="CollectionBlock_wrapper">
                <div className="CollectionHeader_wrapper">
                    <SectionTitle title={title} tag={makeTag(tag)}/>
                    <div className="CollectionHeader_filters">
                        <FilterDialog filters={[]}/>
                        <FixtureDialog/>
                    </div>
                </div>
                <div className="CollectionList_wrapper">
                    <ul className="CollectionList_list"
                        style={{'--wide-content-min-height': '74px'} as CSSProperties}>
                        <List from={products}>
                            {(product, index) => <GridCard {...product} wide={index === 3}/>}
                        </List>
                        <GridItemBreak/>
                        <GridCard {...products[2]}/>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GridList

function GridItemBreak() {
    return <div className="GridReinsurance_wrapper">
        <h2 className="TitleNumeric_wrapper styling_s GridReinsurance_title">
            <span className="TitleNumeric_number styling_mono">[02]</span>
            Quality
        </h2>
        <div>
            <p className="GridReinsurance_text">
                The Chair A is guaranteed for 10 years.​
            </p>
            <Link
                className="UnderlinedButton_wrapper  GridReinsurance_cta"
                href="/"
            >
                  <span className="UnderlinedButton_content">
                    Access the warranty
                  </span>
                <sup className="Sup_wrapper styling_mono UnderlinedButton_sup">
                    [x]
                </sup>
            </Link>
        </div>
    </div>

}