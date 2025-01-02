'use client'
import {
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isToday,
    startOfMonth,
} from 'date-fns'
import React, {useMemo} from 'react'
import {daysOfWeek} from '@/utils/date'
import {cn} from '@/utils'
import WeekDay from '@/components/calendar/week-day'
import {List} from '@/components/utils'
import {tableImage} from '@/data/images'

interface Event {
    date: Date;
    title: string;
}

interface EventCalendarProps {
    events: Event[];
}


function EventCalendar({events}: EventCalendarProps) {
    const currentDate = new Date()
    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)
    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    })

    const startingDayIndex = getDay(firstDayOfMonth)

    const eventsByDate = useMemo(() => {
        return events.reduce((acc: { [key: string]: Event[] }, event) => {
            const dateKey = format(event.date, 'yyyy-MM-dd')
            if (!acc[dateKey]) {
                acc[dateKey] = []
            }
            acc[dateKey].push(event)
            return acc
        }, {})
    }, [events])

    const emptyDays = Array.from({length: startingDayIndex}).map((_, index) => ({id: `empty-${index}`}))
    return (
        <>
            <div className="CollectionList_wrapper CollectionList_wrapperIndex">
                <ul className="CollectionList_list CollectionList_listIndex Calendar">
                    <List from={daysOfWeek}>
                        {({id}, index) => <WeekDay tag={`${index + 1}`} title={id}/>}
                    </List>
                    <List from={emptyDays}>
                        {() => <EmptyDayTile/>}
                    </List>
                    <List from={daysInMonth}>
                        {(day) => <DayTile title={'one'} day={day.toString()} date={day} events={eventsByDate[format(day, 'yyyy-MM-dd')] || []}/>}
                    </List>
                </ul>
            </div>

            <div className="container mx-auto p-4 hidden">
                <div className="mb-4">
                    <h2 className="text-center">{format(currentDate, 'MMMM yyyy')}</h2>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {daysOfWeek.map((day) => {
                        return (
                            <div key={day.id} className="font-bold text-center">
                                {day.id}
                            </div>
                        )
                    })}
                    {Array.from({length: startingDayIndex}).map((_, index) => {
                        return (
                            <div
                                key={`empty-${index}`}
                                className="CollectionList_item"
                                // className="border rounded-md p-2 text-center border-gray-300"
                            />
                        )
                    })}
                    {daysInMonth.map((day, index) => {
                        const dateKey = format(day, 'yyyy-MM-dd')
                        const todaysEvents = eventsByDate[dateKey] || []
                        return (
                            <div
                                key={index}
                                className={cn('border rounded-md p-2 text-center', {
                                    'bg-gray-200': isToday(day),
                                    'text-gray-900': isToday(day),
                                })}
                            >
                                {format(day, 'd')}
                                {todaysEvents.map((event) => {
                                    return (
                                        <div
                                            key={event.title}
                                            className="bg-green-500 rounded-md text-gray-900"
                                        >
                                            {event.title}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default EventCalendar

interface DayTileProps {
    day: string;
    date: Date;
    title: string;
    events: Event[];
    image?: string;
}

function DayTile({day, date, title, events}:DayTileProps) {
    return (
        <>
            <li className="CollectionList_item">
                <div className="IndexProductCard_wrapper">
                    <span
                        className="IndexProductCard_link"
                        // href="/item"
                    >
                      <span className="IndexProductCard_number styling_s styling_mono">
                        [{format(day, 'dd')}]
                      </span>
                        <div className="IndexProductCard_imgWrapper">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="AsyncImage_image IndexProductCard_img loaded inverted"
                                src={tableImage}
                                alt={title}
                            />
                            <span className="IndexProductCard_more">[+]</span>
                        </div>
                        <div>
                            <h3 className="IndexProductCardContent_title styling_s">
                                {title}
                            </h3>
                            <div className="IndexProductCardContent_skuWrapper styling_s">
                                <span>N°</span>
                                <span className="IndexProductCardContent_sku styling_mono">
                                {date.toString()}
                            </span>
                            </div>
                            <div className="IndexProductCardContent_variantsWrapper styling_s">
                                <button>
                                    <span>+{events.length} events</span>
                                </button>
                            </div>
                        </div>
                    </span>
                </div>
            </li>
        </>
    )
}
function EmptyDayTile() {
    return (
        <div
            // key={`empty-${day}`}
            className="CollectionList_item"
        >
            <div className="IndexProductCard_wrapper">
                                    <span className="IndexProductCard_link">
                    <span className="IndexProductCard_number styling_s styling_mono">
                        [30]
                    </span>
                    <div className="IndexProductCard_imgWrapper">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="AsyncImage_image IndexProductCard_img loaded"
                            src={tableImage}
                            alt={'title'}
                        />
                        <span className="IndexProductCard_more">[+]</span>
                    </div>
                    <div>
                        <h3 className="IndexProductCardContent_title styling_s">
                            Empty
                        </h3>
                        <div className="IndexProductCardContent_skuWrapper styling_s">
                            <span>N°</span>
                            <span className="IndexProductCardContent_sku styling_mono">
                                {format(new Date(), 'yyyy/MM/30')}
                            </span>
                        </div>
                        <div className="IndexProductCardContent_variantsWrapper styling_s">
                            <button>
                                <span>+2 events</span>
                            </button>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )
}