import Redis from 'ioredis'
import {PaginationParams, Run, RunSummary} from '@/types/runs'
import {categories} from '@/constants'
// import {PaginationParams, Run} from '@/types'
// import {Run} from '@/utils/strava'

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'
export const redis = new Redis(REDIS_URL)

export const getRunById = async (id: string): Promise<Run> => {
    return await redis.hgetall(`run:${id}`) as unknown as Run
}

export const getLatestRuns = async (paginationParams: PaginationParams): Promise<Run[]> => {
    const ids = await getPaginatedRunIds('runs:timestamp', paginationParams)
    return await getRunDetails(ids)
}

export const groupByMonth = false

export const getRunDetails = async (runIds: string[]): Promise<Run[]> => {
    const runs: Run[] = []
    for (const id of runIds) {
        const run = await getRunById(id)
        if (run) runs.push(run)
    }
    return runs
}

// Example function to fetch paginated run IDs
const getPaginatedRunIds = async (
    sortedSetKey: string,
    {page, size, sort = 'desc'}: PaginationParams
): Promise<string[]> => {
    const start = (page - 1) * size
    const end = start + size - 1

    if (sort === 'asc') {
        return redis.zrange(sortedSetKey, start, end)
    } else {
        return redis.zrevrange(sortedSetKey, start, end)
    }
}

export const setRunName = async (id: string, name: string): Promise<void> => {
    await redis.hset(`run:${id}`, 'name', name)
}

export const setRunTimestamp = async (id: string, timestamp: number): Promise<void> => {
    await redis.hset(`run:${id}`, 'timestamp', timestamp)
}

export const updateRun = async (id: string, run: Run): Promise<void> => {
    await redis.hmset(`run:${id}`, run)
}


const getRunIdsByYear = async (locationKey: string): Promise<string[]> => {
    return redis.smembers(locationKey)
}
export const getRunsByYear = async (year: string): Promise<Run[]> => {
    const ids = await getRunIdsByYear(`runs:year:${year}`)
    return await getRunDetails(ids)
}

const getRunIdsByYearMonth = async (locationKey: string): Promise<string[]> => {
    return redis.smembers(locationKey)
}
export const getRunsByYearMonth = async (year: string, month: string): Promise<Run[]> => {
    const ids = await getRunIdsByYearMonth(`runs:yearmonth:${year}:${month}`)
    return await getRunDetails(ids)
}

export const getArchive = async (year: string, month?: string): Promise<Run[]> => month ? getRunsByYearMonth(year, month) : getRunsByYear(year)
export const getRecords = async (): Promise<Run[] | undefined> => {

    try {

        const records = []
        const recordIds: string[] = []

        for (const category of categories) {
            const key = `records:${category.name}`
            const record = await redis.hgetall(key)
            if (Object.keys(record).length > 0) {
                if (!recordIds.includes(record.run_id)) {
                    recordIds.push(record.run_id)
                }
            }
        }


        return await getRunDetails(recordIds)


    } catch (e) {

        console.log(e)
    }

}

export const getAllSummary = async (): Promise<RunSummary> => {
    return await getSummary('summary:all')
}



const getSummary = async (key: string): Promise<RunSummary> => {
    const totalDistance = parseFloat(await redis.hget(key, 'totalDistance') || '0')
    const totalTime = parseInt(await redis.hget(key, 'totalTime') || '0', 10)
    const totalRuns = parseInt(await redis.hget(key, 'totalRuns') || '0', 10)
    const averagePace = parseFloat(await redis.hget(key, 'averagePace') || '0')

    return {
        totalDistance,
        totalTime,
        totalRuns,
        averagePace,
    }
}

export const getYearSummary = async (year: string): Promise<RunSummary> => {
    return await getSummary(`summary:year:${year}`)
}
export const getYearMonthSummary = async (year: string, month: string): Promise<RunSummary> => {
    return await getSummary(`summary:yearmonth:${year}:${month}`)
}

export const getAvailableYears = async (): Promise<string[]> => {
    const pattern = 'runs:year:*'
    const keys: string[] = []
    let cursor = '0'

    do {
        const [nextCursor, foundKeys] = await redis.scan(cursor, 'MATCH', pattern)
        cursor = nextCursor
        keys.push(...foundKeys)
    } while (cursor !== '0')

    // Extract unique years from keys
    return keys.map(key => key.replace('runs:year:', ''))
}
