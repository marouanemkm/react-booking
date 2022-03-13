import './Shows.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import services from "../../services/services";
import Datas from "../../types";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Shows() {

    const [shows, setShows] = useState<Datas[]>()

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state: RootState): any => { return state.cart });

    // Ce useEffect sert de guard afin d'empêcher d'aller sur cette page sans avoir choisis d'hôtel
    useEffect(() => {
        services.getShows().then(res => setShows(res))
        if (cart.hotelName == '') navigate('/');
    }, [])

    // Cette fonction permet d'enregistrer le show dans le state global ainsi que son prix, pour mettre à jour le panier
    const handleShows = (show: { id: number; name: string; price: number; image: string }) => {
        dispatch({ type: "addshow", showName: show.name, showPrice: show.price });
        dispatch({ type: "addtotalprice", totalPrice: cart.totalPrice + show.price });
        navigate('/cart');
    }

    return (
        <>
            <div className="shows-page-title">
                <h2>Choisissez un show pour animer votre séjour !</h2>    
            </div>
            <div className="shows-cards">
            {
                shows ?
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
                : ''
            }
            </div>
            <div className='text-center'>
                <button className='btn btn-danger' onClick={() => handleShows({id: 0, name: '', price: 0, image: ''})}>Ne pas sélectionner de show</button>
            </div>
        </>
    )
}