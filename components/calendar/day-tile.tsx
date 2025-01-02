import {format, getDay, isEqual, isSameMonth, isToday} from 'date-fns'
import {cn} from '@/utils'
import {Show} from '@/components/utils'
import CreateEvent from '@/components/calendar/create-event'
import pluralize from 'pluralize'
import DayEvents from '@/components/calendar/day-events'
import {weekDays} from '@/utils/date'
import Link from 'next/link'

interface Event {
    title: string,
    date: Date,        // Changed from string to Date
    startTime: Date,   // Changed from string to Date
    endTime: Date,     // Changed from string to Date
    description: string,
    location: string,
}

interface DayTileProps {
    image?: string;
    day: Date;
    date?: string;
    title?: string;
    events?: Event[];
    alt?: string;
    index: number;
    today: Date;
    selectedDay: Date;
    firstDayCurrentMonth: Date;
    onClick?: () => void;
}


function DayTile({day, selectedDay, onClick, events, firstDayCurrentMonth, index}: DayTileProps) {

    const isSelected = isEqual(day, selectedDay)
    const isCurrentDay = isToday(day)
    const isSelectedDayCurrentDay = isEqual(day, selectedDay) && isToday(day)
    const isInCurrentMonth = isSameMonth(day, firstDayCurrentMonth)

    // console.log({
    //     day,
    //     selectedDay,
    //     isCurrentDay,
    //     isSelected,
    //     isSelectedDayCurrentDay,
    //     isInCurrentMonth,
    //
    // })
    return (
        <Link
            href={`/date/${format(day, 'yyyy/MM/dd')}`}
            onClick={onClick}
            className={cn(
                index === 0 && ['', ...Array.from({length: 6}, (_, i) => `col-start-${i + 2}`)][getDay(day)],
                'CollectionList_item Calendar'
            )}
        >
            <div className={cn('IndexProductCard_wrapper', {
                isSelectedDayCurrentDay,
                isSelected,
                isNotCurrentMonth: !isInCurrentMonth,
            })}>

            <span className={cn('IndexProductCard_link', {
                isCurrentDay, isSelected,
                isInCurrentMonth,
                isNotCurrentMonth: !isInCurrentMonth,
            })}>
                <span className={cn('flexBetween DayHeader', {
                    isCurrentDay,
                    isSelected,
                    isInCurrentMonth,
                    isNotCurrentMonth: !isInCurrentMonth,
                    isSelectedDayCurrentDay
                    // 'text-white': isEqual(day, selectedDay),
                    // 'text-red-500': !isEqual(day, selectedDay) && isToday(day),
                    // 'text-gray-900':
                    //     !isEqual(day, selectedDay) &&
                    //     !isToday(day) &&
                    //     isSameMonth(day, firstDayCurrentMonth),
                    // 'text-gray-400': !isEqual(day, selectedDay) && !isToday(day) && !isSameMonth(day, firstDayCurrentMonth),
                    // 'bg-red-500': isSelectedDayCurrentDay,
                    // 'bg-gray-900 semi-bold': isEqual(day, selectedDay) &&
                    //     !isToday(day),
                })}>
                    <span className="IndexProductCard_number styling_s styling_mono ">
                         [{format(day, 'dd')}]
                    </span>
                    <Show when={index <= 6}>
                        <span
                            className="IndexProductCard_number styling_s styling_mono uppercase">{weekDays[index]}</span>
                    </Show>
                </span>
                <CreateEvent/>
                {/*<Show when={events?.length}>*/}
                {/*    <DayEvents>*/}
                {/*        <div>*/}
                {/*            <h3 className="IndexProductCardContent_title styling_s">*/}
                {/*              {events![0]?.title}*/}
                {/*            </h3>*/}
                {/*            <div className="IndexProductCardContent_skuWrapper styling_s">*/}
                {/*              <span>N°</span>*/}
                {/*              <span className="IndexProductCardContent_sku styling_mono">*/}
                {/*                {format(day, 'MM.dd')}*/}
                {/*              </span>*/}
                {/*            </div>*/}
                {/*            <div className="IndexProductCardContent_variantsWrapper styling_s">*/}
                {/*              <button>*/}
                {/*                <span>+{events?.length} {pluralize('event', events?.length)}</span>*/}
                {/*              </button>*/}
                {/*            </div>*/}
                {/*  </div>*/}
                {/*    </DayEvents>*/}
                {/*</Show>*/}
            </span>
            </div>
        </Link>
    )
}

export default DayTile
