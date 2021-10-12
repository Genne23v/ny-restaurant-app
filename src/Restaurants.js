import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { Container,Card, Table, Pagination } from 'react-bootstrap';
import Loading from './components/Loading';
import HeaderBg from './WK-new-york-eats-bar.png'

export default function Restaurants() {
    const perPage = 10;
    let url;
    let location = useLocation();
    let history = useHistory();
    const [page, setPage] = useState(1);
    const [restaurants, setRestaurants] = useState(null);
    const [loading, setLoading] = useState(false);

    function previousPage() {
        if (page > 1) setPage(page - 1);
    }

    function nextPage() {
        setPage(page + 1);
    }

    useEffect(() => {
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
                setLoading(true);
                console.log(result);    //TO BE REMOVED
            })
            .catch((err) => {
                console.error(`Something is wrong while fetching data ${err}`);
            });
    }, [location, page]);

    // if (error){
    //     return <Warning tryAgain={() => setRetries(retries +1)} />
    // }

    if (!loading) {
        return <Loading />;
    }

    if (!restaurants) {
        return (
            <Card>
                <Card.Title>No Restaurants Found</Card.Title>
            </Card>
        );
    }

    return (
        <Container className="mt-3">
            <Card>
                <Card.Body style={{ backgroundImage: `url(${HeaderBg})`, backgroundSize: 'cover', height: '115px'}}>
                    <Card.Title>Restaurants List</Card.Title>
                    <Card.Text>
                        Full list of restaurants. Optionally sorted by borough.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Table className='mt-3' striped bordered hover>
                <thead>
                    <tr>
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
                                horizontal
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
