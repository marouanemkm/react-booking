import './Order.css';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Order() {

    const startDateFinal = useSelector((state: RootState): any => { return state.date.startDate });
    const endDateFinal = useSelector((state: RootState): any => { return state.date.endDate });
    const cartInfos = useSelector((state: RootState): any => { return state.cart });
    const orderInfos = useSelector((state: RootState): any => { return state.order });

    const navigate = useNavigate();

    // Ce useEffect sert de guard afin d'empêcher d'aller sur cette page sans avoir choisis d'hôtel
    useEffect(() => {
        if (cartInfos.hotelName == '') navigate('/');
    }, [])

    return (
        <div>
            <h3 className='order-page-title'>Merci d'avoir passé commande ! Voici un récapitulatif de votre commande :</h3>
            <div className='order-container'>
                <div className='cart-order col-md-4'>
                    <p>Nom de l'hotel : <br /><span className='cart-infos'>{cartInfos.hotelName}</span></p>
                    <p>Nom du show : <br /><span className='cart-infos'>{cartInfos.showName}</span></p>
                    <p>Dates : <br /><span className='cart-date-infos'>Du <span className='start-date'>{startDateFinal.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> au <span className='end-date'>{endDateFinal.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></span></p>
                </div>
                <div className='infos-order col-md-4'>
                    <p>Prix payé : <br /><span className='cart-infos'>{cartInfos.totalPrice} €</span></p>
                    <p>
                        Vos informations : 
                        <br /><span className='cart-infos'>{orderInfos.email}</span>
                        <br /><span className='cart-infos'>{orderInfos.firstName && orderInfos.firstName}</span>
                        <br /><span className='cart-infos'>{orderInfos.lastName && orderInfos.lastName}</span>
                        <br /><span className='cart-infos'>{orderInfos.adress && orderInfos.adress}</span>
                    </p>
                </div>
            </div>
            {/* <div className='return-btn'>
                <button onClick={handleReturn} className='btn btn-warning'>Retour à l'accueil</button>
            </div> */}
        </div>
    );
}