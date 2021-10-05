import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { Card, ListGroup, Pagination } from 'react-bootstrap';

export default function Restaurants() {
    let location = useLocation();
    let [page, setPage] = useState(1);
    const perPage = 10;
    let [restaurants, setRestaurants] = useState(null);
    let history = useHistory();
    // let borough, url;

    function previousPage() {
        if (page > 1) setPage(page - 1);
    }

    function nextPage() {
        setPage(page + 1);
    }

    useEffect(() => {
        fetch(`https://restaurant-api-wk.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}&borough=${JSON.stringify(queryString(location.search))}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Could not fetch restaurant data`);
                }
                return res.json();
            })
            .then((result) => {
                setRestaurants(result);
            })
            .catch((err) => {
                console.error(`Something is wrong while fetching data ${err}`);
            });
    }, [location, page]);

    return (
        <>
            <Card>
                <Card.Title>Restaurants List</Card.Title>
                <Card.Body>
                    Full list of restaurants. Optionally sorted by borough.
                </Card.Body>
            </Card>
            <ListGroup horizontal>
                <ListGroup.Item>Name</ListGroup.Item>
                <ListGroup.Item>Address</ListGroup.Item>
                <ListGroup.Item>Borough</ListGroup.Item>
                <ListGroup.Item>Cuisine</ListGroup.Item>
            </ListGroup>

            {restaurants.map((restaurant) => {
                return (
                    <ListGroup
                        horizontal
                        onClick={() =>
                            history.push(`/restaurant/${restaurant._id}`)
                        }>
                        <ListGroup.Item>{restaurant.name}</ListGroup.Item>
                        <ListGroup.Item>
                            {restaurant.address.building}{' '}
                            {restaurant.address.street}
                        </ListGroup.Item>
                        <ListGroup.Item>{restaurant.borough}</ListGroup.Item>
                        <ListGroup.Item>{restaurant.cuisine}</ListGroup.Item>
                    </ListGroup>
                );
            })}

            <Pagination>
                <Pagination.Prev onClick={previousPage} />
                <Pagination.Item>{page}</Pagination.Item>
                <Pagination.Next onClick={nextPage} />
            </Pagination>
        </>
    );
}
