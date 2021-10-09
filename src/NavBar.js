import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
    const [searchString, setSearchString] = useState('');
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/restaurants?borough=${searchString}`);
        setSearchString('');
    };

    return (
        <>
            <Navbar bg='light' expand='lg'>
                <LinkContainer to='/'>
                    <Navbar.Brand>New York Restaurants</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <LinkContainer to='/restaurants'>
                            <Nav.Link>Full List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form onSubmit={handleSubmit} inline>
                        <FormControl
                            type='text'
                            placeholder='Borough'
                            className='mr-sm-2'
                            value={searchString}
                            onChange={(e) => setSearchString(e.target.value)}
                        />
                        <Button type='submit' variant='outline-success'>
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
