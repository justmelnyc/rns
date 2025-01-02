'use client'

import {Button, Dialog, DialogContent} from '@/components/ui/index'
import {Panel} from '@/components/layout'
import {dialogKeys, useUIStore} from '@/features/app/store'

function Selector() {
    const {dialogs, toggleDialog} = useUIStore()
    const dismiss = () => {
        toggleDialog(dialogKeys.shipping) // Toggle the modal with key 'myModal'
    }
    return (
        <Dialog open={dialogs[dialogKeys.shipping]}>
            <DialogContent>
                <Panel className="PanelCountry_wrapper" selector>
                    <div>
                        <div>
                            <div className="PanelCountry_line">
                                <label className="PanelCountry_label" htmlFor="country">
                                    Country
                                </label>
                                <select className="PanelCountry_select" name="country">
                                    <option value="AT">Autriche - EUR</option>
                                    <option value="BE">Belgique - EUR</option>
                                    <option value="BG">Bulgarie - EUR</option>
                                    <option value="CH">Suisse - CHF</option>
                                    <option value="CY">Chypre - EUR</option>
                                    <option value="CZ">Tchéquie - EUR</option>
                                    <option value="DE">Allemagne - EUR</option>
                                    <option value="DK">Danemark - DKK</option>
                                    <option value="EE">Estonie - EUR</option>
                                    <option value="ES">Espagne - EUR</option>
                                    <option value="FI">Finlande - EUR</option>
                                    <option value="FR">France - EUR</option>
                                    <option value="GB">Royaume-Uni - GBP</option>
                                    <option value="GR">Grèce - EUR</option>
                                    <option value="HR">Croatie - EUR</option>
                                    <option value="HU">Hongrie - EUR</option>
                                    <option value="IE">Irlande - EUR</option>
                                    <option value="IT">Italie - EUR</option>
                                    <option value="LT">Lituanie - EUR</option>
                                    <option value="LU">Luxembourg - EUR</option>
                                    <option value="LV">Lettonie - EUR</option>
                                    <option value="MC">Monaco - EUR</option>
                                    <option value="MT">Malte - EUR</option>
                                    <option value="NL">Pays-Bas - EUR</option>
                                    <option value="NO">Norvège - NOK</option>
                                    <option value="PL">Pologne - EUR</option>
                                    <option value="PT">Portugal - EUR</option>
                                    <option value="RO">Roumanie - EUR</option>
                                    <option value="SE">Suède - SEK</option>
                                    <option value="SI">Slovénie - EUR</option>
                                    <option value="SK">Slovaquie - EUR</option>
                                    <option value="US">International - USD</option>
                                </select>
                            </div>
                            <Button className="PanelCountry_submit" onClick={dismiss}>
                                Validate
                            </Button>
                        </div>
                    </div>
                </Panel>
            </DialogContent>
        </Dialog>
    )
}

export default Selector