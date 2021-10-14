import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Container, Card, ListGroup } from 'react-bootstrap';
import Loading from './components/Loading';
import HeaderBg from './WK-new-york-eats-bar.png';

export default function Restaurant() {
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    let location = useLocation();
    const { id } = useParams();
    let key = 0;

    useEffect(() => {
        setLoading(true);

        fetch(`https://restaurant-api-wk.herokuapp.com/api/restaurants/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        'Could not fetch the requested restaurant info'
                    );
                }
                return res.json();
            })
            .then((result) => {
                if (result.hasOwnProperty('_id')) {
                    setRestaurant(result);
                } else {
                    setRestaurant(null);
                }
            })
            .catch((err) => {
                console.error(
                    `Something is wrong while fetching restaurant info - ${err}`
                );
            })
            .finally(() => setLoading(false))
    }, [id, location]);

    if (!loading && !restaurant) {
        return (
            <Card className='p-3'>
                <Card.Title>Unable to find restaurant with id: {id}</Card.Title>
            </Card>
        );
    }

    if (loading) {
        return <Loading desc={'Loading a restaurant...'} />;
    }

    return (
        <Container>
            <Card bg='light'>
                <Card.Body
                    style={{
                        backgroundImage: `url(${HeaderBg})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>
                        {restaurant.address.building}{' '}
                        {restaurant.address.street}
                    </Card.Text>
                </Card.Body>
            </Card>
            <MapContainer
                className='mt-3'
                style={{ height: '400px' }}
                center={[
                    restaurant.address.coord[1],
                    restaurant.address.coord[0],
                ]}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker
                    position={[
                        restaurant.address.coord[1],
                        restaurant.address.coord[0],
                    ]}
                />
            </MapContainer>
            <Card className='mt-3'>
                <Card.Header
                    style={{
                        color: 'white',
                        backgroundImage:
                            'linear-gradient(to right, #00afbc, #00efec',
                    }}>
                    <h5>Ratings</h5>
                </Card.Header>
                <ListGroup as='ul' className='list-group-flush' horizontal>
                    {restaurant.grades.map((each) => {
                        const dateConverted = new Date(each.date);
                        return (
                            <ListGroup.Item key={key++}>
                                <h6>Grade: {each.grade}</h6>
                                <p>
                                    Date: {dateConverted.toLocaleDateString()}
                                </p>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Card>
        </Container>
    );
}
