import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';
import emptyPlate from './thought-catalog-fnztlIb52gU-unsplash.jpg';

export default function NotFound() {
    return (
        <Card className='p-3'>
            <Card.Title>Page Not Found</Card.Title>
            <Image src={emptyPlate} className='mb-2' />
            <p>
                We can't find what you are looking for...{'  '}
                <Link to='/'>Return Home</Link>
            </p>
        </Card>
    );
}
