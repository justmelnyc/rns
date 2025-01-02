import {Cities} from '@/components/city'
import {Page} from '@/components/layout'
import {makeTag} from '@/utils'
import {SectionHeader, SectionTitle} from '@/components/info'

function ListPage() {

    return (
        <Page offsetTop>
            <SectionHeader>
                <SectionTitle title={'List'} tag={makeTag(0)}/>
            </SectionHeader>
            <Cities/>
        </Page>
    )
}

export default ListPage