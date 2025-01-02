import {ReactNode} from 'react'
import type {Metadata} from 'next'
import {Footer, Header} from '@/components/layout'
import {cn} from '@/utils'
import {PopUp, Selector} from '@/components/ui'
import './globals.css'

export const metadata: Metadata = {
    title: 'rns',
    description: 'Fitness tracker',
}

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>rns</title>
            </head>
            <body cz-shortcut-listen="true">
                <main className={cn('Root_wrapper styling_default ready')}>
                    <div className="Root_inner">
                        <Header transparent/>
                        {children}
                    </div>
                    <Footer/>
                    <Selector/>
                    <PopUp/>
                </main>
            </body>
        </html>
    )
}
