import Card from 'react-bootstrap/Card';

const CardPage = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardPage
