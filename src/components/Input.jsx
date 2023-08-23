import React from 'react'
import { Button, FormControl} from 'react-bootstrap';

const Input = () => {
    return (
        <div className='flex justify-content-center'>
            <div className='container'>
                <FormControl
                    
                    type='text'
                    placeholder='Enter the location'
                />
            </div>
            <div>
                <Button
                    variant='primary'
                    className='ms-3 mt-2'
                >
                    Search
                </Button>
            </div>
        </div>

    )
}

export default Input
