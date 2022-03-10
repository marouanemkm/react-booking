import './Cart.css';
import { useState } from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [adress, setAdress] = useState<string>('');

    const totalOfNights = useSelector((state: RootState): number => { return state.date.nights });
    const startDateFinal = useSelector((state: RootState): any => { return state.date.startDate });
    const endDateFinal = useSelector((state: RootState): any => { return state.date.endDate });
    const cartInfos = useSelector((state: RootState): any => { return state.cart });

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>): void => setFirstName(e.target.value);
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>): void => setLastName(e.target.value);
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value);
    const handleAdress = (e: React.ChangeEvent<HTMLInputElement>): void => setAdress(e.target.value);

    return (
        <div className='cart'>
            <h2>Votre panier :</h2>
            <div className='cart-content'>
                <p>Nom de l'hotel : <br /><span className='cart-infos'>{cartInfos.hotelName}</span></p>
                <p>Nom du show : <br /><span className='cart-infos'>{cartInfos.showName}</span></p>
                <p>Dates : <br /><span className='cart-date-infos'>Du <span className='start-date'>{startDateFinal.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> au <span className='end-date'>{endDateFinal.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></span></p>
            </div>
            <br />
            <form action="" className='formulaire'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse Email :</label>
                    <input type="email" className="form-control" id="email" placeholder="john@doe.com" onChange={(e) => handleEmail(e)} value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Nom :</label>
                    <input type="text" className="form-control" id="lastname" placeholder="John" onChange={(e) => handleFirstName(e)} value={firstName} />
                    <label htmlFor="firstname" className="form-label">Prénom :</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Doe" onChange={(e) => handleLastName(e)} value={lastName} />
                    <label htmlFor="adress" className="form-label">Adresse postal :</label>
                    <input type="text" className="form-control" id="adress" placeholder="46 Rue de Paris 75001 PARIS" onChange={(e) => handleAdress(e)} value={adress} />
                </div>
                <button className="btn btn-success" >Réserver</button>
            </form>
        </div>
    );
}