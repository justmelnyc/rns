import {Show, Wrap} from '@/components/utils'

interface TextButtonProps {
    label: string
    supText?: string;
    onClick?: () => void
    className?: string
    asChild?: boolean

}

function TextButton({label, onClick, className, supText, asChild}: TextButtonProps) {
    return (
        <Wrap when={asChild} with={(children) => <>{children}</>}>
            <span
                onClick={onClick}
                className={`cursor-pointer TextButton_wrapper Header_link TextButton_hoverable ${className || ''}`}
            >
                <span className="TextButton_content">{label}</span>
                <Show when={supText}>
                    <sup className="Sup_wrapper styling_mono">[{supText}]</sup>
                </Show>
            </span>
        </Wrap>
    )
}

export default TextButton
