import {cloneElement, FC} from 'react'
import {IconName, icons} from '@/components/icon/icons'


interface IconProps {
    name: IconName;
    width?: number;
    height?: number;
    className?: string;
    svgClassName?: string;
}

const Icon: FC<IconProps> = ({name, width = 16, height = 16, className,svgClassName,...props}) => {
    const IconComponent = icons[name]

    if (!IconComponent) {
        return null
    }

    return (
        <div className={className} style={{width, height}} {...props}>
            {cloneElement(IconComponent, {width, height, className:svgClassName})}
        </div>
    )
}

export default Icon