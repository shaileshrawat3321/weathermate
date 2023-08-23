import Card from 'react-bootstrap/Card';
import { useWeatherContext } from '../context/weatherContext';
const CardPage = () => {

    const weather = useWeatherContext();
    return (
        <div>
            <Card style={{ width: '20rem', backgroundColor: `${weather.mode === 'light' ? '#F5EFE6' : '#526D82'}`, 
                color: `${weather.mode === 'light' ? 'black' : 'white'}`}}>
                <Card.Header style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>

                    <Card.Img style={{ width: '40%' }}
                        variant="top"
                        src={weather?.data?.current?.condition?.icon}
                    />
                </Card.Header>
                <Card.Body>
                    <Card.Title>Weather Condition: {weather?.data?.current?.condition?.text}</Card.Title>
                    <Card.Text><strong>Region: </strong>{weather?.data?.location?.region}</Card.Text>
                    <Card.Text><strong>Country: </strong>{weather?.data?.location?.country}</Card.Text>
                    <Card.Text><strong>Temperature: </strong>{weather?.data?.current?.temp_c} °C</Card.Text>
                    <Card.Text><strong>Humidity: </strong> {weather?.data?.current?.humidity}</Card.Text>
                    <Card.Text><strong>Wind: </strong>{weather?.data?.current?.wind_kph} Km/h</Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}

export default CardPage;
