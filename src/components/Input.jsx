import { Button, FormControl } from 'react-bootstrap';
import { useWeatherContext } from '../context/weatherContext';

const Input = () => {

    const weather = useWeatherContext();
    return (
        <div className='d-flex justify-content-center flex-row align-items-center'>
            <div className='container'>
                <FormControl
                    type='text'
                    placeholder='Enter the cityname'
                    value={weather.searchCity}
                    onChange={(e) => weather.setSearchCity(e.target.value)}
                />
            </div>
            <div>
                <Button
                    variant='primary'
                    onClick={weather.fetchApiData}
                >
                    Search
                </Button>
            </div>
        </div>

    )
}

export default Input
