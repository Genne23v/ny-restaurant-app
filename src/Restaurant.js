import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Container, Card, ListGroup } from 'react-bootstrap';
import Loading from './components/Loading';

export default function Restaurant() {
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    let location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        console.log(`id: ${location.search}`); //TO BE REMOVED
        fetch(`http://restaurant-api-wk.herokuapp.com/api/restaurants/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        'Could not fetch the requested restaurant info'
                    );
                }
                return res.json();
            })
            .then((result) => {
                console.log(`result: ${result._id}`); //TO BE REMOVED
                if (result.hasOwnProperty('_id')) {
                    setRestaurant(result);
                } else {
                    setRestaurant(null);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(
                    `Something is wrong while fetching restaurant info - ${err}`
                );
            });
    }, [id, location]);

    if (loading) {
        return <Loading />;
    }

    if (!restaurant) {
        return (
            <Card>
                <Card.Title>Unable to find restaurant with id: {id}</Card.Title>
            </Card>
        );
    }

    return (
        <Container className='mt-3'>
            <Card bg='light'>
                <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>
                        {restaurant.address.building}{' '}
                        {restaurant.address.street}
                    </Card.Text>
                </Card.Body>
            </Card>
            <MapContainer
                className='mt-2'
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
            <Card className="mt-3">
                <Card.Header><h5>Ratings</h5></Card.Header>
                <ListGroup as='ul' className='list-group-flush' horizontal>
                    {restaurant.grades.map((each) => {
                        const dateConverted = new Date(each.date);
                        return (
                            <ListGroup.Item>
                                <h6>Grade:{' '}{each.grade}</h6>
                                <p>Date:{' '}{dateConverted.toLocaleDateString()}</p>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
            </Card>
        </Container>
    );
}
