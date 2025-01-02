'use client';

import React, {forwardRef, SelectHTMLAttributes} from 'react'
import {Icon} from '@/components/icon'
import {List, Show} from '@/components/utils'
import {cn} from '@/utils'

interface Option {
    value: string;
    label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
    options: Option[];
    error?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
                                                                      options,
                                                                      error,
                                                                      placeholder,
                                                                      value,
                                                                      onChange,
                                                                      className = '',
                                                                      ...props
                                                                  }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value)
    }

    return (
        <div className={cn('Select_wrapper PanelWarranty_input', {error}, className)}>
            <div className="Select_inner">
                <select
                    ref={ref}
                    className="Select_select Select_grey"
                    value={value}
                    onChange={handleChange}
                    {...props}
                >
                    <Show when={placeholder}>
                        <option value="" hidden disabled>
                            {placeholder}
                        </option>
                    </Show>
                    <List from={options}>
                        {(option) => (
                            <option value={option.value}>
                                {option.label}
                            </option>
                        )}
                    </List>
                </select>
                <Icon className='Select_arrow' name='chevron'/>
            </div>
            <Show when={error}>
                <div className="Select_error styling_xs">
                    [!] {error}
                </div>
            </Show>
        </div>
    )
})

Select.displayName = 'Select'

export default Select