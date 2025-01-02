import {Panel} from '@/components/layout'
import {Dialog, DialogClose, DialogContent, DialogTrigger, TextButton} from '@/components/ui'
import FixtureForm from '@/components/fixture/fixture-form'

function FixtureDialog() {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <TextButton label="Create" supText="+"/>
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
export default FixtureDialog