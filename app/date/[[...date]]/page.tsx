import {Page} from '@/components/layout'
import Calendar from '@/components/calendar/calendar'
import {events} from '@/faker'
import {SectionHeader, SectionTitle} from '@/components/info'
import {add, format, parse} from 'date-fns'
import {TextButton} from '@/components/ui'
import Link from 'next/link'

interface CalendarPageProps {
    params: {
        date?: string[];
    }
}
function CalendarPage({params}: CalendarPageProps) {
    const today = new Date()

    // Get year and month from params or default to today
    const year = params.date?.[0] || today.getFullYear()
    const month = params.date?.[1] || (today.getMonth() + 1)
    const day = params.date?.[2] || today.getDate()

    // Create the current date based on URL params
    const currentDate = new Date(Number(year), Number(month) - 1, Number(day))

    // Calculate prev and next month dates
    const prevMonth = add(currentDate, { months: -1 })
    const nextMonth = add(currentDate, { months: 1 })

    // Format URLs for prev/next navigation
    const prevMonthUrl = `/date/${format(prevMonth, 'yyyy')}/${format(prevMonth, 'MM')}`
    const nextMonthUrl = `/date/${format(nextMonth, 'yyyy')}/${format(nextMonth, 'MM')}`


    return (
        <>
            <Page offsetTop>
                <SectionHeader>
                    <Link href={'/date'}>
                        <SectionTitle
                            tag={format(currentDate, 'yyyy')}
                            title={format(currentDate, 'MMMM')}
                        />
                    </Link>
                    <div className="CollectionHeader_filters">
                        <Link href={prevMonthUrl}>
                            <TextButton
                                label="Back"
                                supText="<"
                            />
                        </Link>
                        <Link href={nextMonthUrl}>
                            <TextButton
                                label="Next"
                                supText=">"
                            />
                        </Link>
                    </div>
                </SectionHeader>
                <Calendar
                    year={Number(year)}
                    month={Number(month)}
                    day={Number(day)}
                    events={events}  />
            </Page>
        </>
    )
}

export default CalendarPage