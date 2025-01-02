import React, {PropsWithChildren} from 'react'
import {cn} from '@/utils'

function Panel({children, className, selector}: { className?: string, selector?: boolean } & PropsWithChildren) {
    return (
        <div className="Panel_outer">
            <div className="Panel_wrapper">
                <div className={cn('Panel_inner', {Selector: selector})}>
                    <div className={className}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panel

function PanelHeader({children, className}: { className?: string } & PropsWithChildren) {
    return (
        <div className={`PanelHeader_wrapper ${className}`}>
            {children}
        </div>
    )
}

function PanelSpacer() {
    return (
        <div className="PanelFilters_spacer"/>
    )
}


function PanelFooter({children, className}: { className?: string } & PropsWithChildren) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
Panel.Spacer = PanelSpacer

Panel.Header = PanelHeader

Panel.Footer = PanelFooter
