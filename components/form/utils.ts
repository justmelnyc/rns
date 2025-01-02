import {EmailField, FileField, FormField, SelectField, TelField, TextField} from '@/types/form'
import {InputProps} from '@/components/form/input'

export function isSelectField(field: FormField): field is SelectField {
    return field.type === 'select'
}

export function isFileField(field: FormField): field is FileField {
    return field.type === 'file'
}

export function isInputField(field: FormField): field is TextField | EmailField | TelField {
    return ['text', 'email', 'tel'].includes(field.type)
}
interface Option {
    value: string;
    label: string;
}
export interface SelectProps {
    options: Option[];
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}


export function getBaseProps(field: FormField) {
    return {
        placeholder: field.placeholder || field.label,
        disabled: Boolean(field.readOnly),
        className: 'PanelWarranty_input',
    }
}

export function getSelectProps(field: SelectField): SelectProps {
    return {
        ...getBaseProps(field),
        options: field.options,
    }
}

export function getInputProps(field: TextField | EmailField | TelField): InputProps {
    return {
        ...getBaseProps(field),
        type: field.type,
        autoComplete: field.autoComplete,
    }
}

export function getFileProps(field: FileField): InputProps {
    return {
        ...getBaseProps(field),
        type: 'file',
        isFileInput: true,
        fileLabel: field.label,
        fileDescription: field.fileDescription,
        accept: field.accept,
        multiple: field.multiple,
    }
}


export function getFieldProps(field: FormField) {
    if (isSelectField(field)) {
        return getSelectProps(field)
    }

    if (isFileField(field)) {
        return getFileProps(field)
    }

    if (isInputField(field)) {
        return getInputProps(field)
    }
    return {
        ...getBaseProps(field),
        type: 'textarea' as const
    }
}