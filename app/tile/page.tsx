import {Page} from '@/components/layout'
import {makeTag} from '@/utils'
import {SectionHeader, SectionTitle} from '@/components/info'
import {List} from '@/components/utils'
import {ItemTile} from '@/components/item'
import tiles from '@/data/tiles'

function TilePage() {

    return (
        <Page offsetTop>
            <SectionHeader>
                <SectionTitle title={'Tile'} tag={makeTag(0)}/>
            </SectionHeader>
            <div className="CollectionList_wrapper CollectionList_wrapperIndex">
                <List from={tiles} as='ul' className="CollectionList_list CollectionList_listIndex">
                    {(item) => <ItemTile {...item} />}
                </List>
            </div>
            <SectionHeader>
                <SectionTitle title={'Tile'} tag={makeTag(0)}/>
            </SectionHeader>
            <div className="CollectionList_wrapper CollectionList_wrapperIndex">
                <List from={tiles} as='ul' className="CollectionList_list CollectionList_listIndex">
                    {(item) => <ItemTile {...item} />}
                </List>
            </div>
        </Page>
    )
}

export default TilePage


