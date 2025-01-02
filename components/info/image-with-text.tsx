interface Props {
    title: string;
    number: string;
    content: string;
    imgSrc: string;
    reversed?: boolean;
    bigNumber?: {
        value: string;
        unit: string;
    };
}
function ImageWithText({ title, number, content, imgSrc, reversed, bigNumber }:Props) {
    return (
        <>
            <div className={`Manifesto_wrapper ${reversed ? 'Manifesto_reversed' : ''}`}>
                <img className="Manifesto_image" src={imgSrc} alt={`${title} Image`}/>
                <div className="Manifesto_inner">
                    <div>
                        <h2 className="TitleNumeric_wrapper  styling_s  Manifesto_title ">
                            <span className="TitleNumeric_number  styling_mono">{`[${number}]`}</span>
                            {title}
                        </h2>
                        {bigNumber && (
                            <div className="Manifesto_bigNumber">
                                {bigNumber.value}
                                <span className="Manifesto_unit">{bigNumber.unit}</span>
                            </div>
                        )}
                    </div>
                    <div className="Manifesto_content">
                        <p className='Manifesto_richtext'>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageWithText