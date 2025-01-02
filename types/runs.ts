
export interface Run {
    id: string;
    athlete_id: number;
    treadmill: boolean;
    strava_id?: number;
    timestamp: number;
    name: string;
    distance: number;
    duration: number;
    pace: number;
    elapsed_time: number;
    total_elevation_gain: number;
    type: string;
    sport_type: string;
    start_date: string;
    start_date_local: string;
    timezone: string;
    utc_offset: number;
    polyline: string;
    map_id: string | null;
    start_lat: number | null;
    start_lng: number | null;
    end_lat: number | null;
    end_lng: number | null;
    cadence: number | null;
    country?: string;
    state?: string;
    city?: string;
    location?: string;
    borough?: string;
    description?: string;
    source?: string;
    records?: string[] | null;
    isContinuous: boolean;
    average_speed: number;
    max_speed: number;
    average_cadence: number;
    has_heartrate: boolean;
    average_heartrate: number;
    max_heartrate: number;
    heartrate_opt_out: boolean;
    elev_high: number;
    elev_low: number;
    app: string;
}
export interface PaginationParams {
    page: number;  // current page number
    size: number;  // number of items per page
    sort?: 'asc' | 'desc';
}

export interface RunSummary {
    totalDistance: number;
    totalTime: number;
    totalRuns: number;
    averagePace: number;
}
export type RunGroup = {
    title: string;
    runs: Run[];
    summary: RunSummary;
}
export type RunGroups = Array<RunGroup>