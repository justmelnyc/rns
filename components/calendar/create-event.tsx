import {Dialog, DialogClose, DialogContent, DialogTrigger, TextButton} from '@/components/ui'
import {Panel} from '@/components/layout'
import FixtureForm from '../fixture/fixture-form'

function CreateEvent() {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <span className="IndexProductCard_more create">[+]</span>
                </DialogTrigger>
                <DialogContent>
                <Panel className="PanelContent_wrapper PanelWarranty_wrapper">
                        <Panel.Header className="PanelFilters_header PanelWarranty_header">
                            <div>Create Fixture</div>
                            <DialogClose>
                                <TextButton label="Close" supText="x"/>
                            </DialogClose>
                        </Panel.Header>
                        <FixtureForm/>
                    </Panel>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default CreateEvent