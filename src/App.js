import React from 'react';
import Restaurants from './Restaurants';
import Restaurant from './Restaurant';
import About from './About';
import NotFound from './NotFound';
import NavBar from './components/NavBar';

import { Col, Container, Row } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <NavBar />

            <Container>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path='/'>
                                <Redirect to='/restaurants' />
                            </Route>

                            <Route exact path='/about'>
                                <About />
                            </Route>

                            <Route path='/restaurants'>
                                <Restaurants />
                            </Route>

                            <Route path='/restaurant/:id'>
                                <Restaurant />
                            </Route>

                            <Route>
                                <NotFound />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
