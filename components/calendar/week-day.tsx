import {SectionTitle} from '@/components/info'
import React from 'react'
interface WeekDayProps {
    title: string;
    tag: string;
}
function WeekDay({title, tag}: WeekDayProps) {
    return (
        <>
            <div className="mt-[20rem]">
                <SectionTitle title={title} tag={tag}/>
            </div>
        </>
    )
}

export default WeekDay