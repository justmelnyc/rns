import {makeTag} from '@/utils'
import {Page} from '@/components/layout'
import {SectionHeader, SectionTitle} from '@/components/info'
import ToggleDarkMode from '@/components/ui/toggle-dark-mode'

export default function Settings() {
    return (
        <Page offsetTop>
            <SectionHeader>
                <SectionTitle title={'Settings'} tag={makeTag(0)}/>
            </SectionHeader>
            <ToggleDarkMode/>
        </Page>
    )
}
