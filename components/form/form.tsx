'use client'
import {CSSProperties} from 'react'
import {useForm, SubmitHandler, Controller} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import Input from '@/components/form/input'
import Select from '@/components/form/select'
import {Button} from '@/components/ui'

const schema = z.object({
    lastname: z.string().min(1, 'Last name is required'),
    firstname: z.string().min(1, 'First name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    use_cases: z.enum([
        'Use Chair A\'s 10-year warranty',
        'Authenticate a Chair A',
        'Other request'
    ], {
        required_error: 'Please select a use case'
    }),
    pictures: z.instanceof(FileList).optional(),
    invoices: z.instanceof(FileList).optional(),
    comments: z.string().min(1, 'Comments are required')
})

// Define form values
type FormValues = z.infer<typeof schema>;

const options = [
    { value: "Use Chair A's 10-year warranty", label: "Use Chair A's 10-year warranty" },
    { value: "Authenticate a Chair A", label: "Authenticate a Chair A" },
    { value: "Other request", label: "Other request" }
];
function Form() {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    })
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="PanelWarranty_form"
                noValidate
                style={{'--submit-height': '60px'} as CSSProperties}
            >
                <p className="PanelWarranty_requiredFields">* Required fields</p>

                <div className="PanelWarranty_dual">
                    <Input
                        {...register('lastname')}
                        placeholder="Lastname*"
                        error={errors.lastname?.message}
                    />

                    <Input
                        {...register('firstname')}
                        placeholder="Firstname*"
                        error={errors.firstname?.message}
                    />
                </div>

                <Input
                    {...register('email')}
                    type="email"
                    placeholder="Enter your email*"
                    error={errors.email?.message}
                    autoComplete="email"
                />

                <Input
                    {...register('phone')}
                    type="tel"
                    placeholder="Phone number"
                />

                <Controller
                    name="use_cases"
                    control={control}
                    render={({ field }) => (
                        <Select
                            options={options}
                            placeholder="Use cases*"
                            error={errors.use_cases?.message}
                            {...field}
                        />
                    )}
                />

                <Input
                    {...register('pictures')}
                    type="file"
                    isFileInput
                    fileLabel="Photos of Chair(s) A"
                    fileDescription=".jpg .png, 15MB Max"
                    accept=".jpg, .jpeg, .png"
                    multiple
                    id="pictures__1"
                />

                <Input
                    {...register('invoices')}
                    type="file"
                    isFileInput
                    fileLabel="Invoice(s)"
                    fileDescription=".pdf, 5MB Max"
                    accept=".pdf"
                    multiple
                    id="invoices__2"
                />

                <Input
                    {...register('comments')}
                    type="textarea"
                    placeholder="Comments*"
                    error={errors.comments?.message}
                />
                <Button
                    type="submit"
                    className="PanelWarranty_submit"
                    left
                >
                    Create
                </Button>
            </form>
        </>
    )
}

export default Form