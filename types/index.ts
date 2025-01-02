import {RefCallback} from 'react'

export type FileInfo = {
    type: string;
    size: string;
};
export type Item = {
    number: string;
    image: string;
    model: string;
    sku: string;
    files: {
        [key: string]: FileInfo | undefined;
    };
};

export type Category = {
    category: string;
    items: Item[];
};

export type Items = Category[];

export interface IntersectionOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean
}

export interface UseIntersectionObserverReturn {
    ref: RefCallback<Element>
    entry?: IntersectionObserverEntry
    isIntersecting: boolean | undefined
    frozen: boolean
}


export interface ItemImage {
    src: string;
    alt?: string;
}

export interface Option {
    label: string;
    value: string;
}

