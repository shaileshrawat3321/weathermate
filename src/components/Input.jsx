import React from 'react'
import { Button, FormControl} from 'react-bootstrap';

const Input = (props) => {
    return (
        <div className='d-flex justify-content-center flex-row align-items-center'>
            <div className='container'>
                <FormControl
                    type='text'
                    placeholder='Enter the cityname'
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
            <div>
                <Button
                    variant='primary'
                    onChange={props.onClick}
                >
                    Search
                </Button>
            </div>
        </div>

    )
}

export default Input
