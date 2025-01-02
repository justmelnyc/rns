'use client'
import {Dialog, DialogClose, DialogContent, DialogTrigger, TextButton} from '@/components/ui'
import {useDynamicStyles} from '@/hooks'
import {SearchForm, Suggestions} from '@/components/search/index'
import Panel from '@/components/layout/panel'
import {dialogKeys, useUIStore} from '@/features/app/store'


function Search() {

    const { dialogs, toggleDialog } = useUIStore();

    const searchIsOpen = dialogs[dialogKeys.search]
    const dismiss = () => {
        toggleDialog(dialogKeys.search); // Toggle the modal with key 'myModal'
    }
    useDynamicStyles({searchOpen: searchIsOpen})

    const Trigger = searchIsOpen ? DialogClose : DialogTrigger

    const props = searchIsOpen ? {label: 'Close', supText: 'x'} : {label: 'Search', supText: ''}

    return (
        <>
            <Dialog open={searchIsOpen}>
                <Trigger>
                    <TextButton onClick={dismiss} {...props}/>
                </Trigger>
                <DialogContent>
                    <Panel className="PanelSearch_wrapper Panel_search">
                        <div className="PanelSearch_inner">
                            <div className="SearchBlock_wrapper">
                                <SearchForm/>
                                <Suggestions/>
                            </div>
                        </div>
                    </Panel>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Search