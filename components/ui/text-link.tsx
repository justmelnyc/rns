import {Show} from '@/components/utils'


interface Props {
    href?: string
    supText?: string
    label: string
    className?: string
    disabled?: boolean
}

function TextLink({supText, label, className}: Props) {
    return (
        <span className={`cursor-pointer TextButton_wrapper Header_link TextButton_hoverable ${className || ''}`}>
           <span className="TextButton_content">{label}</span>
                <Show when={supText}>
                    <sup className="Sup_wrapper styling_mono">[{supText}]</sup>
                </Show>
        </span>
    )
}

export default TextLink