import {CSSProperties} from 'react'
import Link from 'next/link'
import {Show} from '@/components/utils'
import {cn} from '@/utils'

interface Props {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    ratio: number;
    cta?: { text: string; href: string } | null;
    big?: boolean;
}

function ImageSmallText({id, title, description, imageUrl, ratio, cta, big}: Props) {
    return (
        <>
            <div
                className={cn('Reinsurance_wrapper Reinsurances_item', {Reinsurance_inView: big})}
                style={{'--ratio': ratio} as CSSProperties}
            >
                <div className="Reinsurance_inner">
                    <div className="Reinsurance_media">
                        <div className="Reinsurance_ruler"/>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="AsyncImage_image Reinsurance_image loaded"
                            src={imageUrl}
                            alt=""
                        />
                        <h2 className="TitleNumeric_wrapper styling_s Reinsurance_title">
                            <span className="TitleNumeric_number styling_mono">[{id}]</span>
                            {title}
                        </h2>
                    </div>
                    <div className="Reinsurance_content">
                        <p className="Reinsurance_text">{description}</p>
                        <Show when={cta}>
                            <Link className="UnderlinedButton_wrapper Reinsurance_cta" href={cta?.href || '/'}>
                                <span className="UnderlinedButton_content">{cta?.text}</span>
                                <sup className="Sup_wrapper styling_mono">[+]</sup>
                            </Link>
                        </Show>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageSmallText