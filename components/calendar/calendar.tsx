'use client'
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isEqual,
    parse,
    startOfDay, startOfMonth,
    startOfToday,
    startOfWeek,
} from 'date-fns'
import React, {useState} from 'react'
import {List} from '@/components/utils'
import {daysOfWeek} from '@/utils/date'
import WeekDay from '@/components/calendar/week-day'
import {SectionHeader, SectionTitle} from '@/components/info'
import {TextButton} from '@/components/ui'
import DayTile from '@/components/calendar/day-tile'

interface Event {
    title: string,
    date: Date,        // Changed from string to Date
    startTime: Date,   // Changed from string to Date
    endTime: Date,     // Changed from string to Date
    description: string,
    location: string,
}

interface CalendarProps {
    events?: Array<Event>;
    year: number;
    month: number;
    day: number;
}


function Calendar({events, year, month, day}: CalendarProps) {
    const currentDate = new Date(year, month - 1, day)

    const days = eachDayOfInterval({
        start: startOfWeek(startOfMonth(currentDate)),
        end: endOfWeek(endOfMonth(currentDate)),
    })

    function getEventsForDay(events: Event[], day: Date): Event[] {
        return events?.filter(event =>
            isEqual(startOfDay(event.date), startOfDay(day))
        ) || []
    }

    return (
        <>
            <div className="CollectionList_wrapper CollectionList_wrapperIndex">
                <ul className="CollectionList_list CollectionList_listIndex Calendar">
                    <List from={days}>
                        {(date, index) => (
                            <DayTile
                                firstDayCurrentMonth={currentDate}
                                selectedDay={currentDate}
                                day={date}
                                index={index}
                                events={getEventsForDay(events || [], date)}
                                today={currentDate}/>
                        )}
                    </List>
                </ul>
            </div>
        </>
    )
}

export default Calendar
