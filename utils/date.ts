import {Run, RunGroups, RunGroup, RunSummary} from '@/types/runs'

export const convertToUnixTimestamp = (isoDate: string): number => {
    return new Date(isoDate).getTime()
}

export function groupByMonthAndYear(runs: Array<Run>): RunGroups {
    const groups: RunGroups = []
    let currentGroup: RunGroup

    runs.forEach((run) => {
        const date = new Date(run.start_date)
        const month = date.toLocaleString('default', {month: 'long'})
        const year = date.getUTCFullYear()

        if (currentGroup?.title !== `${month} ${year}`) {
            currentGroup = {
                title: `${month} ${year}`, runs: [], summary: createSummary(runs)
            }

            groups.push(currentGroup)
        }

        currentGroup.runs.push(run)
    })

    return groups

}

function createSummary(runs: Array<Run>): RunSummary {
    const totalDistance = runs.reduce((total, run) => total + Number(run.distance), 0)
    const totalTime = runs.reduce((total, run) => total + Number(run.duration), 0)
    const totalRuns = runs.length
    const averagePace = totalDistance / totalTime

    return {totalDistance, totalTime, totalRuns, averagePace}
}

export function formatDate(dateString: string, format: 'MM/DD/YYYY' | 'MMMM D, YYYY' | 'CUSTOM'): string {
    const date = new Date(dateString)

    switch (format) {
        case 'MM/DD/YYYY':
            const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
            const day = date.getUTCDate().toString().padStart(2, '0')
            const year = date.getUTCFullYear()
            return `${month}/${day}/${year}`

        case 'MMMM D, YYYY':
            const longMonth = date.toLocaleString('default', {month: 'long'})
            const longDay = date.getUTCDate()
            const longYear = date.getUTCFullYear()
            return `${longMonth} ${longDay}, ${longYear}`

        case 'CUSTOM':
            const customMonth = date.toLocaleString('default', {month: 'long'})
            const customDay = date.getUTCDate()
            const customYear = date.getUTCFullYear()
            const customHours = date.getUTCHours().toString().padStart(2, '0')
            const customMinutes = date.getUTCMinutes().toString().padStart(2, '0')
            return `${customMonth} ${customDay}, ${customYear} at ${customHours}:${customMinutes} UTC`
        // example output: "January 1, 2021 at 00:00 UTC"

        default:
            return dateString
    }
}

export function formatDuration(seconds: number): string {
    const totalSeconds = Math.round(seconds)  // Round to the nearest whole number to avoid precision issues
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const remainingSeconds = totalSeconds % 60

    // Pad the numbers to ensure two digits are shown
    const paddedHours = hours.toString().padStart(2, '0')
    const paddedMinutes = minutes.toString().padStart(2, '0')
    const paddedSeconds = remainingSeconds.toString().padStart(2, '0')

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`

}

export function getTagFromDate(dateString: string): string {
    const date = new Date(dateString)
    const day = date.getUTCDate()
    const month = date.getUTCMonth()
    // const year = date.getUTCFullYear();
    // return `${String(year).slice(-2)}${String(month + 1).padStart(2, '0')}${String(day).padStart(2, '0')}`
    return `${String(month + 1).padStart(2, '0')}.${String(day).padStart(2, '0')}`
}

export const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

export const generateDays = (currentDate: Date): (number | null)[] => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days: (number | null)[] = []

    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        days.push(null)
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i)
    }

    return days
}

export const monthNames: readonly string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
] as const


export const daysOfWeek: Record<string, string>[] = [{
    id: "1",
    short: 'Sun',
    long: 'Sunday'
}, {
    id: '2',
    short: 'Mon',
    long: 'Monday'
}, {
    id: '3',
    short: 'Tue',
    long: 'Tuesday'
}, {
    id: '4',
    short: 'Wed',
    long: 'Wednesday'
}, {
    id: '5',
    short: 'Thu',
    long: 'Thursday'
}, {
    id: '6',
    short: 'Fri',
    long: 'Friday'
}, {
    id: '7',
    short: 'Sat',
    long: 'Saturday'
}] as const

export const weekDays: readonly string[] = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
] as const