import {Page} from '@/components/layout'
import {blocks} from '@/data/text'
import {ImageSmallText} from '@/components/info'
import {List} from '@/components/utils'


function DatePage() {
    return (
        <>
            <Page offsetTop>
                <List from={blocks} className="Reinsurances_inner">
                    {(item, index) => (
                        <ImageSmallText {...item} big={index === 1}/>
                    )}
                </List>

            </Page>
        </>
    )
}

export default DatePage