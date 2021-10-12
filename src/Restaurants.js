import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { Container, Card, Table, Pagination } from 'react-bootstrap';
import Loading from './components/Loading';
import HeaderBg from './WK-new-york-eats-bar.png';

export default function Restaurants() {
    const perPage = 10;
    let location = useLocation();
    let history = useHistory();
    const [page, setPage] = useState(1);
    const [restaurants, setRestaurants] = useState(null);
    const [error, setError] = useState(null);

    function previousPage() {
        if (page > 1) setPage(page - 1);
    }

    function nextPage() {
        setPage(page + 1);
    }

    useEffect(() => {
        let url;
        let query = queryString.parse(location.search);

        if (query.borough) {
            url = `https://restaurant-api-wk.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}&borough=${query.borough}`;
        } else {
            url = `https://restaurant-api-wk.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}`;
        }

        fetch(url)
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
                setError(err);
            });
    }, [location, page, restaurants, error]);

    if (Array.isArray(restaurants) && !restaurants.length) {
        return (
            <Card className='p-3'>
                <Card.Title>
                    No Restaurants Found for{' '}
                    {queryString.parse(location.search).borough}
                </Card.Title>
            </Card>
        );
    }

    if (error) {
        return (
            <Card className='p-3'>
                <Card.Title>Something is wrong while fetching data</Card.Title>
                <Card.Text>{error.message}</Card.Text>
            </Card>
        );
    }

    if (!restaurants) {
        return (
            <>
                <Loading desc={'Loading restaurants...'} />
            </>
        );
    }

    return (
        <Container>
            <Card>
                <Card.Body
                    style={{
                        backgroundImage: `url(${HeaderBg})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <Card.Title>Restaurants List</Card.Title>
                    <Card.Text>
                        Full list of restaurants. Optionally sorted by borough.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Table className='mt-3' striped bordered hover>
                <thead>
                    <tr style={{
                        color: '#333',
                        backgroundImage:
                            'linear-gradient(to right, #00afbc, #00efec',
                    }}>
                        <th className='col-4'>Name</th>
                        <th className='col-3'>Address</th>
                        <th className='col-2'>Borough</th>
                        <th className='col-3'>Cuisine</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map((restaurant) => {
                        return (
                            <tr
                                key={restaurant._id}
                                onClick={() =>
                                    history.push(
                                        `/restaurant/${restaurant._id}`
                                    )
                                }>
                                <td className='col-4'>{restaurant.name}</td>
                                <td className='col-3'>
                                    {restaurant.address.building}{' '}
                                    {restaurant.address.street}
                                </td>
                                <td className='col-2'>{restaurant.borough}</td>
                                <td className='col-3'>{restaurant.cuisine}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

            <Pagination>
                <Pagination.Prev onClick={previousPage} />
                <Pagination.Item>{page}</Pagination.Item>
                <Pagination.Next onClick={nextPage} />
            </Pagination>
        </Container>
    );
}
