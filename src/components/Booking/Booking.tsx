import './Booking.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { useDispatch } from 'react-redux';
import Hotel from '../Hotels/Hotel';
import moment from 'moment'; 

const Booking = () => {
    
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [nights, setNights] = useState<number>(0);
    const [error, setError] = useState<string>('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect((): void => {
        // Toute la partie logique de la gestion et de la vérification de la date est géré ici
        // On formate les dates pour pouvoir les comparer avec la date du jour 
        let startDateConverted: string = moment(startDate).format('YYYY/MM/DD');
        let endDateConverted: string = moment(endDate).format('YYYY/MM/DD');
        let todayDate: string = moment(new Date(Date.now())).format('YYYY/MM/DD');
        let numberOfNights: number = 0;

        if (startDate != null && endDate != null) numberOfNights = Math.trunc((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

        // Si les dates sont supérieur à la date du jour et que le nomrbe de nuits entre les deux dates n'est pas négatif ou null, c'est validé
        if (numberOfNights > 0 && (startDateConverted >= todayDate && endDateConverted >= todayDate)) setNights(numberOfNights);
        dispatch({ type: 'addnights', nights: nights, startDate: startDate, endDate: endDate });
    }, [startDate, endDate]);

    const handleStartDate = (e: Date): void => setStartDate(e);
    const handleEndDate = (e: Date): void => setEndDate(e);    

    // Cette fonction permet de valider le choix d'une date et d'un hotel, ou bien d'afficher une erreur
    const handleHotel = (hotel: any): void => {
        // Ici on dispatch nos variables pour les enregistrer dans le store
        
        dispatch({ type: 'addhotel', hotelName: hotel.name, hotelPrice: hotel.price });
        dispatch({ type: 'addtotalprice', totalPrice: hotel.price * nights });

        // Ici on gère les erreurs concernant les dates
        if (!startDate && !endDate) {
            setError('Veuillez chosir une date');
        } else if(!nights) {
            setError('Veuillez choisir une date valide ou supérieur à la date actuelle');
        } else {
            setError('');
            navigate('/shows');
        }
    }
    
    return (
        <>
            <div className='calendar'>
                <h2 className='calendar-title'>Choisissez vos dates et votre séjour :</h2>
                <div className="select-date">
                    <div>
                        <p className='datepicker-label'>Date de départ du séjour</p>
                        <DatePicker onChange={(e: Date) => handleStartDate(e)} value={startDate} isOpen={false} />
                    </div>
                    <div>
                        <p className='datepicker-label'>Date de fin du séjour</p>
                        <DatePicker onChange={(e: Date) => handleEndDate(e)} value={endDate} isOpen={false} />
                    </div>
                </div>
                <h5 style={{color: 'red', margin: '20px'}}>{error}</h5>
            </div>
            <div className="hotels-component">
                <Hotel handleHotel={handleHotel}/>
            </div>
        </>
    );
}

export default React.memo(Booking);