import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function range(start: number, end: number) {
    return Array.from({length: end - start}, (_, i) => i + start)
}

export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomItem<T>(arr: T[]): T {
    return arr[randomInt(0, arr.length - 1)]
}

export function shuffle<T>(arr: T[]): T[] {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = copy[i]
        copy[i] = copy[j]
        copy[j] = temp
    }
    return copy
}

export function makeTag(number: number): string {
    return String(number + 1).padStart(2, '0')
}

export function getLocationName(city?:string, borough?:string, state?:string) {
    if (city && borough) {
        return `${city}, ${borough}`
    }
    return city || borough || state ||  'New York'
}