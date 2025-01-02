'use client'
import {useEffect, useRef} from 'react'
import mapboxgl from 'mapbox-gl'
import mapbox from '@mapbox/polyline'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!

function RunRoute({polyline}: { polyline: string }) {
    const mapContainer = useRef<HTMLDivElement>(null)
    const map = useRef<mapboxgl.Map | null>(null)

    useEffect(() => {
        if (map.current) return // Initialize map only once

        if (mapContainer.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/justmelnyc/clwrtd7qu057401nxayjx2jpr',
                center: [-73.96247198805213, 40.67132360301912], // Default center
                zoom: 12,
            })

            const decodedPolyline = mapbox.decode(polyline).map(([lat, lng]) => [lng, lat])

            map.current.on('load', () => {
                map.current?.addSource('route', {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: decodedPolyline,
                        },
                    },
                })

                map.current?.addLayer({
                    id: 'route',
                    type: 'line',
                    source: 'route',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round',
                    },
                    paint: {
                        'line-color': '#ccfd50',
                        'line-width': 2,
                    },
                })

                const bounds = new mapboxgl.LngLatBounds()
                // @ts-ignore
                decodedPolyline.forEach((coord: [number, number]) => {
                    bounds.extend(coord as [number, number])
                })
                map.current?.fitBounds(bounds, {padding: 20})
            })
        }
    }, [polyline])
    return (
        <>
            <div className="AsyncImage_image DownloadsItem_image loaded" >
                <div ref={mapContainer} className="mapboxgl-canvas" style={{width: '100%', height: '200px'}}/>
            </div>
        </>
    )
}

export default RunRoute