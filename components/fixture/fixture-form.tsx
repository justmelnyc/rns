// 'use client';

import {FormConfig} from '@/types/form'
import FormBuilder from '@/components/form/form-builder'


interface FixtureFormData {
    lastname: string;
    firstname: string;
    email: string;
    phone?: string;
    use_cases: string;
    pictures?: FileList;
    invoices?: FileList;
    comments: string;
}

export const fixtureFormConfig: FormConfig<FixtureFormData> = {
    id: 'fixture-form',
    title: 'Fixture Request',
    className: 'PanelWarranty_form',
    fields: [
        {
            name: 'lastname',
            type: 'text',
            label: 'Lastname',
            placeholder: 'Lastname',
            isRequired: true,
            // dual: true,
        },
        {
            name: 'firstname',
            type: 'text',
            label: 'Firstname',
            placeholder: 'Firstname',
            isRequired: true,
            // dual: true,
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Enter your email*',
            isRequired: true,
            autoComplete: 'email',
            readOnly: false, // Make email readonly in edit mode
        },
        {
            name: 'phone',
            type: 'tel',
            label: 'Phone',
            placeholder: 'Phone',
        },
        {
            name: 'use_cases',
            type: 'select',
            label: 'Use Cases',
            placeholder: 'Select a use case',
            options: [
                {value: 'Use Chair A\'s 10-year warranty', label: 'Use Chair A\'s 10-year warranty'},
                {value: 'Authenticate a Chair A', label: 'Authenticate a Chair A'},
                {value: 'Other request', label: 'Other request'}
            ],
            isRequired: true,
        },
        {
            name: 'pictures',
            type: 'file',
            label: 'Photos of Chair(s) A',
            fileDescription: '.jpg .png, 15MB Max',
            accept: '.jpg,.jpeg,.png',
            multiple: true,
        },
        {
            name: 'invoices',
            type: 'file',
            label: 'Invoice(s)',
            fileDescription: '.pdf, 5MB Max',
            accept: '.pdf',
            multiple: true,
        },
        {
            name: 'comments',
            type: 'textarea',
            placeholder: 'Comments*',
            isRequired: true,
        },
    ],
    submitLabel: 'Create Fixture',
}

function createFormConfig({
                              title = 'Fixture Request',
                          }): FormConfig<FixtureFormData> {
    return fixtureFormConfig
}

function FixtureForm() {

    return (
        <div className="PanelWarranty_inner">
            <div className="PanelWarranty_descriptionWrapper">
                <div className="PanelWarranty_description">
                    Effective from October 15, 2024, TOLIX offers future owners of Chaise A a
                    10-year structural warranty. By structural, we guarantee the durability of
                    our welds and assemblies for normal, non-professional use. To benefit from
                    this warranty, we kindly ask you to read the{' '}
                    <a href="/international/page/gcs">
                        General Terms and Conditions of Sale (GTCS)
                    </a>{' '}
                    and complete the following warranty extension form:
                </div>
            </div>
            <FormBuilder
                config={fixtureFormConfig}
                // mode="edit"
                // initialData={warranty}
                // isLoading={isLoading}
                // onCancel={() => router.back()}
            />
        </div>
    )
}

export default FixtureForm