import './Cart.css';
import React, { useState } from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Cart() {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [adress, setAdress] = useState<string>('');

    const [emailError, setEmailError] = useState<string>('');
    const [firstNameError, setFirstNameError] = useState<string>('');
    const [lastNameError, setLastNameError] = useState<string>('');
    const [adressError, setAdressError] = useState<string>('');
    const [error, setError] = useState<string>('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalOfNights = useSelector((state: RootState): number => { return state.date.nights });
    const startDateFinal = useSelector((state: RootState): any => { return state.date.startDate });
    const endDateFinal = useSelector((state: RootState): any => { return state.date.endDate });
    const cartInfos = useSelector((state: RootState): any => { return state.cart });

    const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>): void => setFirstName(e.target.value);
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>): void => setLastName(e.target.value);
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value);
    const handleAdress = (e: React.ChangeEvent<HTMLInputElement>): void => setAdress(e.target.value);

    const handleForm = (e: React.FormEvent) => {
        e.preventDefault();

        if (email == '') setEmailError('Veuillez renseigner ce champ');
        else setEmailError('');

        if (firstName == '') setFirstNameError('Veuillez renseigner ce champ');
        else setFirstNameError('');

        if (lastName == '') setLastNameError('Veuillez renseigner ce champ');
        else setLastNameError('');

        if (adress == '') setAdressError('Veuillez renseigner ce champ');
        else setAdressError('');

        if (cartInfos.totalPrice == 0) setError('Le panier est vide, vous ne pouvez pas commander !');
        else setError('');


        if (email != '' && firstName != '' && lastName != '' && adress != '' && cartInfos.totalPrice != 0) {
            dispatch({ type: 'addorder', email: email, firstName: firstName, lastName: lastName, adress: adress });
            navigate('/order');
        } 
    }    

    return (
        <div className='cart'>
            <h2>Votre panier :</h2>
            <div className='cart-content col-md-6'>
                {/* On gère ici le rendu conditionnel de chaque information du panier, pour ne pas afficher de zones vides */}
                {
                    cartInfos.hotelName ? 
                    <p>
                        Nom de l'hotel : <br /><span className='cart-infos'>{cartInfos.hotelName}</span>
                    </p>
                    : 
                    <p>
                        Panier vide !
                    </p>
                }
                {
                    cartInfos.showName != '' ? 
                    <p>
                        Nom du show : <br /><span className='cart-infos'>{cartInfos.showName}</span>
                    </p> 
                    : ''
                }
                {
                    startDateFinal && endDateFinal ? 
                    <p>
                        Dates : <br /><span className='cart-date-infos'>Du <span className='start-date'>{startDateFinal && startDateFinal.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> au <span className='end-date'>{endDateFinal && endDateFinal.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span></span>
                    </p> 
                    : ''
                }
                <p>Prix : <br /><span className='cart-infos'>{cartInfos.totalPrice} €</span></p>
            </div>
            <br />
            <form onSubmit={(e) => handleForm(e)} className='formulaire'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse Email * :</label>
                    <input type="email" className="form-control" id="email" placeholder="john@doe.com" onChange={(e) => handleEmail(e)} value={email} />
                    <h5 style={{color: 'red', margin: '20px'}}>{emailError}</h5>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Nom :</label>
                    <input type="text" className="form-control" id="lastname" placeholder="John" onChange={(e) => handleLastName(e)} value={lastName} />
                    <h5 style={{color: 'red', margin: '20px'}}>{lastNameError}</h5>
                    <label htmlFor="firstname" className="form-label">Prénom :</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Doe" onChange={(e) => handleFirstName(e)} value={firstName} />
                    <h5 style={{color: 'red', margin: '20px'}}>{firstNameError}</h5>
                    <label htmlFor="adress" className="form-label">Adresse postal :</label>
                    <input type="text" className="form-control" id="adress" placeholder="46 Rue de Paris 75001 PARIS" onChange={(e) => handleAdress(e)} value={adress} />
                    <h5 style={{color: 'red', margin: '20px'}}>{adressError}</h5>
                </div>
                <h5 style={{color: 'red', margin: '20px'}}>{error}</h5>
                <button type='submit' className="btn btn-success" >Réserver</button>
                <p style={{fontSize: '15px', fontStyle: 'italic', marginTop: '15px'}}>* : Champs requis</p>
            </form>
        </div>
    );
}

export default React.memo(Cart);