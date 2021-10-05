import { useParams } from 'react-router';


export default function Restaurant() {
    const {id} = useParams();
    return <h1 key={id}> Restaurant </h1>
}