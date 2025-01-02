'use client'

function View({data}: {
    data: null |undefined | Record<string, any> | Record<string, any>[] | string | number | boolean | string[] | number[] | boolean[]
}) {
    return (
        <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
    )
}

export default View