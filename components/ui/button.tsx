import {Show, Wrap} from '@/components/utils'
import React, {ReactNode} from 'react'
import {cn} from '@/utils'
import {Icon} from '@/components/icon'

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    inverted?: boolean;
    onClick?: () => void;
    supText?: string;
    left?: boolean;
    half?: boolean;
    isLoading?: boolean;

}

const Button = ({
                    type = 'button',
                    className = '',
                    children,
                    onClick,
                    inverted,
                    left,
                    half,
                    disabled,
                    isLoading,
                }: ButtonProps) => {

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={cn(`Button_wrapper base`, {
                Button_inverted: inverted,
                Button_left: left && !isLoading,
                Button_half: half,
                Button_disabled: disabled,
            }, className)}
        >
            <Show when={!isLoading} fallback={<Icon className="Button_icon" name="loading"/>}>
                {children}
            </Show>
        </button>
    )
}

export default Button
