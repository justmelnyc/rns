import Link from 'next/link'
import {CSSProperties} from 'react'

interface Props {
    label?: string
    video?: string

}

function Hero({label, video}: Props) {
    return (
        <>
            <div
                className="Hero_wrapper"
                style={{'--calc-margin': '92px'} as CSSProperties}
            >
                <video
                    className="Hero_video"
                    autoPlay
                    muted
                    playsInline
                    loop
                    src={video}
                />
                <div className="Hero_contentWrapper">
                    <div className="Hero_stickyTop">
                        <span className="Hero_secondary  styling_label">Manifesto</span>
                        <h1 className="Hero_main  styling_serif-xl">{label}</h1>
                    </div>
                    <Link className="Hero_stickyBottom" href="/">
                        <h2 className="Hero_main  styling_serif-xl">The Original Icon.</h2>
                        <div className="Hero_secondary styling_label">Discover</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hero