import loading from './loading-gear.gif';
import { Image, Row, Col, Container } from 'react-bootstrap';

export default function Loading({ desc }) {
    return (
        <Container style={{ height: '85vh' }}>
            <Row className='justify-content-md-center'>
                <Col xs={12} sm={4} md={4} style={{ position: 'absolute', top: '45%' }}>
                    <Image
                    className='mx-4'
                        style={{ width: '100px'}}
                        src={loading}
                        alt='Loading...'
                    />
                    <p>{desc}</p>
                </Col>
            </Row>
        </Container>
    );
}
