import { z } from 'zod';

export type FormMode = 'create' | 'edit';

interface BaseField {
    name: string;
    label?: string;
    placeholder?: string;
    validation?: z.ZodTypeAny;
    isRequired?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    className?: string;
}

export interface TextField extends BaseField {
    type: 'text';
    autoComplete?: string;
}

export interface EmailField extends BaseField {
    type: 'email';
    autoComplete?: string;
}

export interface TelField extends BaseField {
    type: 'tel';
    autoComplete?: string;
}

export interface TextAreaField extends BaseField {
    type: 'textarea';
}

export interface FileField extends BaseField {
    type: 'file';
    accept?: string;
    multiple?: boolean;
    fileDescription?: string;
}

export interface SelectField extends BaseField {
    type: 'select';
    options: Array<{
        value: string;
        label: string;
    }>;
}

export type FormField =
    | TextField
    | EmailField
    | TelField
    | TextAreaField
    | FileField
    | SelectField;

export interface FormConfig<T> {
    id: string;
    title?: string;
    fields: FormField[];
    submitLabel?: string;
    className?: string;
    defaultValues?: Partial<T>;
}

export interface FormBuilderProps<T> {
    config: FormConfig<T>;
    mode?: FormMode;
    initialData?: Partial<T>;
    onCancel?: () => void;
    isLoading?: boolean;
}