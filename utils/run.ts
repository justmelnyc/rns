import polyline from '@mapbox/polyline';
import {Run} from '@/types/runs'

export function sort(runs: Run[], property = 'timestamp', order = 'desc'): Run[] {
    return runs.sort((a, b) => {
        // @ts-ignore
        let aValue = a[property]
        // @ts-ignore
        let bValue = b[property]

        // If the values are not numbers, convert them to strings for comparison
        if (typeof aValue !== 'number' || typeof bValue !== 'number') {
            aValue = aValue.toString()
            bValue = bValue.toString()
        }

        if (order === 'asc') {
            if (aValue < bValue) return -1
            if (aValue > bValue) return 1
            return 0
        } else {
            if (aValue > bValue) return -1
            if (aValue < bValue) return 1
            return 0
        }
    })
}


/**
 * Calculates the pace given distance and duration.
 *
 * @param distance - The distance covered in meters.
 * @param duration - The duration of the run in seconds.
 * @param isMetric - If true, the pace is calculated in minutes per kilometer; if false, the pace is calculated in minutes per mile.
 * @returns The pace as a string in the format "mm:ss per km".
 */
export function calculatePace(duration: number, distance = 0, isMetric = false): string {
    // if (distance <= 0) {
    //     throw new Error('Distance must be greater than zero.')
    // }

    // Conversion factors
    const metersPerKilometer = 1000
    const metersPerMile = 1609.34

    // Calculate distance in the chosen unit
    const distanceInUnits = isMetric ? distance / metersPerKilometer : distance / metersPerMile

    // Calculate total pace in seconds per chosen unit
    const paceInSecondsPerUnit = duration / distanceInUnits

    // Convert pace to minutes and seconds
    const paceMinutes = Math.floor(paceInSecondsPerUnit / 60)
    const paceSeconds = Math.floor(paceInSecondsPerUnit % 60)

    // Format the pace to "mm:ss"
    return `${paceMinutes.toString().padStart(2, '0')}'${paceSeconds.toString().padStart(2, '0')}"`
}

export function convertDistance2(meters: number, isMetric?: boolean): number {
    const metersPerKilometer = 1000
    const metersPerMile = 1609.34

    if (isMetric) {
        return meters / metersPerKilometer  // Convert meters to kilometers
    } else {
        return meters / metersPerMile  // Convert meters to miles
    }
}
export function convertDistanceNoPad(meters: number, metric: boolean | undefined): string {
    const conversionRate = metric ? 0.001 : 0.000621371;
    const distance = meters * conversionRate;
    return distance.toFixed(2);
}

export function convertDistance(meters: number, metric: boolean | undefined): string {
    const conversionRate = metric ? 0.001 : 0.000621371;
    let distance = meters * conversionRate;

    let distanceString = distance.toFixed(2);
    let [integerPart, decimalPart] = distanceString.split('.');

    if (parseInt(integerPart) < 10) {
        integerPart = '0' + integerPart;
    }

    return `${integerPart}.${decimalPart}`;
}
function checkForContinuity(movingTime: number, elapsedTime: number): boolean {

    const pauseThreshold = 60 // seconds, adjust based on what constitutes a pause

    return Math.abs(movingTime - elapsedTime) < pauseThreshold

}

/**
 * Calculates calories burned during a run based on METs (Metabolic Equivalent of Task).
 *
 * @param weightKg - The weight of the runner in kilograms.
 * @param durationSeconds - The duration of the run in seconds.
 * @param averageSpeedMps - The average speed of the run in meters per second.
 * @returns The estimated calories burned.
 */
function calculateCalories(weightKg: number, durationSeconds: number, averageSpeedMps: number): number {
    // Convert average speed from meters per second to kilometers per hour
    const averageSpeedKph = averageSpeedMps * 3.6

    // Estimate MET value based on average speed (using a general MET value for running)
    // This is a simplification; for more accuracy, you might want to use a detailed MET table
    const MET = averageSpeedKph > 8 ? 9.8 : 7.5 // Higher MET for speeds greater than 8 kph

    // Calculate duration in hours
    const durationHours = durationSeconds / 3600

    // Calculate calories burned
    return MET * weightKg * durationHours
}

function getPolylineTrack(summary_polyline: string) {
    const trackpoints = polyline.decode(summary_polyline);

    return trackpoints.map(([latitude, longitude]: [number, number]) => ({
        time: '', // Strava doesn't provide timestamp for individual points in polyline
        position: {
            latitudeDegrees: latitude,
            longitudeDegrees: longitude,
        },
        altitudeMeters: null, // Strava doesn't provide altitude in polyline, need to fetch it separately if needed
        distanceMeters: null, // Strava doesn't provide distance in polyline, need to calculate if needed
        heartRateBpm: null, // Strava doesn't provide heart rate in polyline
        cadence: null, // Strava doesn't provide cadence in polyline
    }));
}

//
// export async function convertStravaRun(run: StravaRun): Promise<Run> {
//     let locationData = {location: 'Unknown Location'}
//     if (run.start_latlng) {
//         locationData = await getHumanReadableLocation(run.start_latlng[0], run.start_latlng[1])
//     }
//     return {
//         id: run.external_id.replace('.fit', ''),
//         strava_id: run.id,
//         date: run.start_date,
//         timestamp: new Date(run.start_date).getTime(),
//         duration: run.moving_time,
//         distanceMeters: run.distance,
//         pace: run.distance / run.moving_time,
//         maximumSpeed: run.max_speed,
//         calories: calculateCalories(91, run.moving_time, run.average_speed),
//         averageHeartRateBpm: run.average_heartrate,
//         maximumHeartRateBpm: run.max_heartrate,
//         cadence: run.average_cadence,
//         ...locationData,
//         coordinates: {
//             latitude: run.start_latlng ? run.start_latlng[0] : null,
//             longitude: run.start_latlng ? run.start_latlng[1] : null,
//         },
//         title: run.name.replace('Nike Run Club: ', ''),
//         source: 'strava',
//         isContinuous: checkForContinuity(run.moving_time, run.elapsed_time),
//         description: '',
//         track: getPolylineTrack(run.map.summary_polyline),
//     }
// }
