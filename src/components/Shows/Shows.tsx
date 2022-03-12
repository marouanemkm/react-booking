import './Shows.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import shows from '../../data/shows';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Shows() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPrice = useSelector((state: RootState): any => { return state.cart.totalPrice });

    const handleShows = (show: { id: number; name: string; price: number; image: string }) => {
        dispatch({ type: "addshow", showName: show.name, showPrice: show.price });
        dispatch({ type: "addtotalprice", totalPrice: totalPrice + show.price });
        navigate('/cart');
    }

    return (
        <>
            <div className="shows-page-title">
                <h2>Choisissez un show pour animer votre séjour !</h2>    
            </div>
            <div className="shows-cards">
            {
                shows.map((item, index) => (
                    <Card style={{ width: '15rem', margin: '20px' }} key={index}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.price} €</Card.Text>
                            <Button onClick={() => handleShows(item)}>Choisir</Button>
                        </Card.Body>
                    </Card>
                ))
            }
            </div>
            <div className='text-center'>
                <button className='btn btn-danger' onClick={() => handleShows({id: 0, name: '', price: 0, image: ''})}>Ne pas sélectionner de show</button>
            </div>
        </>
    )
}