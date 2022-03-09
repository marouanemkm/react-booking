import './Cart.css';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {

    const totalOfNights = useSelector((state: RootState): number => { return state.date.nights });
    const startDateFinal = useSelector((state: RootState): any => { return state.date.startDate });
    const endDateFinal = useSelector((state: RootState): any => { return state.date.endDate });

    const cartInfos = useSelector((state: RootState): any => { return state.cart });

    console.log(totalOfNights);
    console.log(startDateFinal);
    console.log(endDateFinal);

    return (
        <div className='cart'>
            <h2>Votre panier :</h2>
            <div className='cart-content'>
                <p>Nom de l'hotel : <br /><span className='cart-infos'>{cartInfos.hotelName}</span></p>
                <p>Nom du show : <br /><span className='cart-infos'>{cartInfos.showName}</span></p>
                <p>Dates : <br /><span className='cart-date-infos'>Du <span className='start-date'>{startDateFinal.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> au <span className='end-date'>{endDateFinal.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></span></p>
            </div>
            <br />
            <form action="">
                
            </form>
            <button className="btn btn-success" >Réserver</button>
        </div>
    );
}