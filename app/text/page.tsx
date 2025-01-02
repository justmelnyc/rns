import {Hero, Page} from '@/components/layout'
import {List} from '@/components/utils'
import text from '@/data/text'
import {ImageWithText} from '@/components/info'

function TextPage() {
    return (
        <Page>
            <Hero
                label="The A Chair"
                video='https://cdn.sanity.io/files/1tas3bbm/production/a1f8c11b7dbeaeef809c76b674777442ba9a0f93.mov'
            />
            <div className="Landing_step"/>
            <List from={text}>
                {(item, index) => (<ImageWithText {...item} reversed={index % 2 !== 0}/>)}
            </List>
        </Page>
    )
}

export default TextPage