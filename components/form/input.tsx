'use client';

import React, {forwardRef, InputHTMLAttributes, RefObject} from 'react'
import {Show} from '@/components/utils'
import {cn} from '@/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    error?: string;
    type?: 'text' | 'email' | 'tel' | 'file' | 'textarea' | 'password' | 'select';
    isFileInput?: boolean;
    fileLabel?: string;
    fileDescription?: string;
}

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(({
                                                                                         label,
                                                                                         error,
                                                                                         type = 'text',
                                                                                         className = '',
                                                                                         isFileInput = false,
                                                                                         fileLabel,
                                                                                         fileDescription,
                                                                                         ...props
                                                                                     }, ref) => {
    if (isFileInput) {
        return (
            <div className={cn('FileInput_wrapper', className)}>
                <div className="FileInput_inner">
                    <input
                        ref={ref as RefObject<HTMLInputElement>}
                        type="file"
                        className="FileInput_input"
                        {...props}
                    />
                    <div className="FileInput_labelWrapper">
                        <label>{fileLabel}</label>
                        <span className="FileInput_smallLabel styling_label">
                            {fileDescription}
                        </span>
                    </div>
                    <button className="UnderlinedButton_wrapper">
                        <span className="UnderlinedButton_content">Import</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={cn('Input_wrapper', {error}, className)}>
            <div className="Input_inner">
                <Show when={label}>
                    <label>{label}</label>
                </Show>
                <Show when={type === 'textarea'} fallback={
                    <input
                        ref={ref as RefObject<HTMLInputElement>}
                        type={type}
                        className="Input_input"
                        {...props}
                    />
                }>
                    <textarea
                        ref={ref as RefObject<HTMLTextAreaElement>}
                        className="Input_input"
                        {...props}
                    />
                </Show>
            </div>
            <Show when={error}>
                <div className="Input_error styling_xs">
                    [!] {error}
                </div>
            </Show>
        </div>
    )
})

Input.displayName = 'Input'

export default Input