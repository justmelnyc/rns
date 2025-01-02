'use client'
import {Button, Dialog, DialogContent} from '@/components/ui/index'
import {Panel} from '@/components/layout'
import {dialogKeys, useUIStore} from '@/features/app/store'

function PopUp() {
    const { dialogs, toggleDialog } = useUIStore();

    const dismiss = () => {
        toggleDialog(dialogKeys.cookie); // Toggle the modal with key 'myModal'
    }

    return (
        <Dialog open={dialogs[dialogKeys.cookie]}>
            <DialogContent>
                <Panel className="CookiePopin_center">
                    <div className="CookiePopin_text">
                        We use cookies to provide you with a personalised shopping experience. To
                        find out more and learn how to opt out, read our cookie policy.
                    </div>
                    <div className="CookiePopin_buttons">
                        <Button  onClick={dismiss} left half inverted >
                            Decline
                        </Button>
                        <Button  onClick={dismiss} half left>
                            Accept
                        </Button>
                    </div>
                </Panel>
            </DialogContent>
        </Dialog>
    )
}

export default PopUp