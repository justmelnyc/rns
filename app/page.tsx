import {ListHead} from '@/components/list'
import {List} from '@/components/utils'
import {makeTag} from '@/utils'
import {Page} from '@/components/layout'
import {getLatestRuns} from '@/redis'
import RunItem from '@/features/running/components/run-item'
import {groupByMonthAndYear} from '@/utils/date'
import {FilterDialog, Pagination} from '@/components/ui'
import filters from '@/data/filters'
import FilterRest from '@/features/filter/components/filter-reset'


export default async function Home({searchParams}: { searchParams: Record<string, string> }) {
    const size = parseInt(searchParams.size || '10', 10)    // default to 10
    const page = parseInt(searchParams.page || '1', 10)
    const runs = groupByMonthAndYear(await getLatestRuns({page, size}))
    // const years = await getAvailableYears()
    return (
        <Page offsetTop>
            <List from={runs}>
                {({title, runs}, index) => (
                    <div>
                        <ListHead className='CollectionHeader_wrapper' label={title} tag={makeTag(index)}>
                            <FilterDialog filters={filters}/>
                            <FilterRest/>
                        </ListHead>
                        <div className="DownloadsBlock_wrapper">
                            <List from={runs} as='ul' className="DownloadsList_list">
                                {(run) => <RunItem {...run} />}
                            </List>
                        </div>
                    </div>
                )}
            </List>
            <Pagination page={page} total={10}/>
        </Page>
    )
}
