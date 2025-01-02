import Link from 'next/link'

interface UnderlinedLinkProps {
    href?: string
    label: string
    size?: string
    unit?: string
    className?: string
    download?: boolean
    target?: string
}
function UnderlinedLink({
                            href = '',
                            label,
                            size,
                            unit = 'MB',
                            className = '',
                            download,
                            target
                        }: UnderlinedLinkProps) {
    return (
        <>
            <Link
                href={href}
                className={`UnderlinedButton_wrapper UnderlinedButton_uppercase ${className}`}
                download={download}
                target={target}
            >
                <span className="UnderlinedButton_content">{label}</span>
                {size && <span className="UnderlinedButton_suffix styling_mono">{size}</span>}
                {unit && <sup className="Sup_wrapper styling_mono UnderlinedButton_sup">[{unit}]</sup>}
            </Link>
        </>
    )
}
export default UnderlinedLink