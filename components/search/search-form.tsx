import React from 'react'
import {Button} from '@/components/ui'
import Input from '@/components/form/input'

function SearchForm() {
    return (
        <>
            <form noValidate className="SearchBlock_form">
                <h4 className="SearchBlock_title">Search</h4>
                <Input className='SearchBlock_input'/>
                <Button
                    type="submit"
                    className="Submit_wrapper SearchBlock_submit"
                    isLoading={false}
                >
                    Search
                </Button>
            </form>
        </>
    )
}

export default SearchForm