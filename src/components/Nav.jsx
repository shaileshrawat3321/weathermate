import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useWeatherContext } from '../context/weatherContext';
const Nav = () => {

    const { mode, toggleTheme } = useWeatherContext();
    return (
        <div>
            <Navbar bg={`${mode}`} data-bs-theme={`${mode}`}>
                <Container>
                    <Navbar.Brand href="#home">Weathermate</Navbar.Brand>

                    <Form>
                        <Form.Check
                            style={{ color: `${mode === 'light' ? 'black' : 'white'}` }}
                            type="switch"
                            id="custom-switch"
                            label="Dark mode"
                            onClick={toggleTheme}
                        />
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav;
