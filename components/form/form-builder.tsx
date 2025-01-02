'use client'

import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'
import Input from '@/components/form/input'
import Select from '@/components/form/select'
import {Button} from '@/components/ui'
import {FormConfig, FormField, FormMode, SelectField} from '@/types/form'
import {List, Show} from '@/components/utils'
import {getFieldProps, getSelectProps, isSelectField} from '@/components/form/utils'

interface FormBuilderProps<T = any> {
    config: FormConfig<T>;
    mode?: FormMode;
    initialData?: Partial<T>;
    onCancel?: () => void;
    isLoading?: boolean;
}


export const createFormSchema = (fields: FormField[]) => {
    const schemaMap: Record<string, z.ZodTypeAny> = {}

    fields.forEach((field) => {
        if (field.hidden) return

        let fieldSchema: z.ZodTypeAny

        if (field.validation) {
            fieldSchema = field.validation
        } else {
            switch (field.type) {
                case 'email':
                    fieldSchema = z.string().email('Invalid email address')
                    break
                case 'file':
                    fieldSchema = z.instanceof(FileList)
                    break
                case 'select':
                    fieldSchema = z.string()
                    break
                case 'textarea':
                    fieldSchema = z.string()
                    break
                default:
                    fieldSchema = z.string()
            }
        }

        if (field.isRequired) {
            if (fieldSchema instanceof z.ZodString) {
                fieldSchema = fieldSchema.min(1, `${field.label || field.name} is required`)
            } else if (fieldSchema instanceof z.ZodEffects) {
                // Handle refined schemas
                fieldSchema = z.string().min(1, `${field.label || field.name} is required`).pipe(fieldSchema)
            } else {
                // For non-string types (like FileList), use refine
                fieldSchema = fieldSchema.refine((val) => val != null && val !== '', {
                    message: `${field.label || field.name} is required`
                })
            }
        } else {
            fieldSchema = fieldSchema.optional()
        }

        schemaMap[field.name] = fieldSchema
    })

    return z.object(schemaMap)
}



export const FormBuilder = <T extends Record<string, any>>({
                                                               config,
                                                               initialData,
                                                               onCancel,
                                                               isLoading = false
                                                           }: FormBuilderProps<T>) => {
    const schema = createFormSchema(config.fields)
    type FormValues = z.infer<typeof schema>;

    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            ...config.defaultValues,
            ...initialData
        } as FormValues
    })

    const onSubmit = async (data: FormValues) => {
        console.log(data)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={config.className}
            noValidate
            style={{'--submit-height': '60px'} as React.CSSProperties}
        >
            <Show when={config.title && false}>
                <h2>{config?.title as string}</h2>
            </Show>

            <p className="PanelWarranty_requiredFields">* Required fields</p>

            <List from={config.fields}>
                {(field) => {

                    return (
                        <>
                            <Show when={isSelectField(field)} fallback={
                                <Input
                                    {...register(field.name)}
                                    {...getFieldProps(field)}
                                    error={errors[field.name]?.message as string}
                                />
                            }>
                                <Controller
                                    name={field.name}
                                    control={control}
                                    render={({field: {onChange, value}}) => (
                                        <Select
                                            {...getSelectProps(field as SelectField)}
                                            value={value}
                                            onChange={onChange}
                                            error={errors[field.name]?.message as string}
                                        />
                                    )}
                                />
                            </Show>
                        </>
                    )
                }}
            </List>

            <Button
                type="submit"
                className="PanelWarranty_submit"
                left
                disabled={isLoading}
            >
                {config?.submitLabel as string}
            </Button>
            <Show when={onCancel}>
                <Button
                    type="button"
                    onClick={onCancel}
                    className="PanelWarranty_cancel"
                    disabled={isLoading}
                >
                    Cancel
                </Button>
            </Show>
        </form>
    )
}

export default FormBuilder