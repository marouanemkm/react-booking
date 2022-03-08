import './Booking.css';
import { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Hotel from '../Hotels/Hotel';

export default function Booking() {
    
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [nights, setNights] = useState<Number>(0);

    const totalOfNights = useSelector((state: RootState): number => { return state.date.nights });
    const startDateFinal = useSelector((state: RootState): any => { return state.date.startDate });
    const endDateFinal = useSelector((state: RootState): any => { return state.date.endDate });

    const hotelNameFinal = useSelector((state: RootState): any => { return state.cart.hotelName });

    const dispatch = useDispatch();

    useEffect(() => {
        if (endDate >= startDate) {
            let numberOfNights: number = endDate.getTime() - startDate.getTime();
            setNights(Math.trunc(numberOfNights / (1000 * 3600 * 24)));       
        } 
        // else {
        //     alert('Veuillez choisir une date de départ inférieur à la date de fin');
        //     setStartDate(new Date());
        //     setEndDate(new Date());
        // }
    }, [startDate, endDate]);

    const handleStartDate = (e: Date): void => setStartDate(e);

    const handleEndDate = (e: Date): void => setEndDate(e);

    const handleNights = (hotel: any) => {
        dispatch({ type: 'addnights', payload: nights });
        dispatch({ type: 'addcart', hotelName: hotel.name, hotelPrice: hotel.price, showName: 'test', showPrice: 0 });
    }

    console.log(startDate, endDate, nights);
    console.log(totalOfNights);
    console.log(hotelNameFinal);
    
    
    return (
        <>
            <div className='calendar'>
                <h2 className='calendar-title'>Choisissez vos dates et votre séjour :</h2>
                <div className="select-date">
                    <div>
                        <p className='datepicker-label'>Date de départ du séjour</p>
                        <DatePicker onChange={handleStartDate} value={startDate} isOpen={false} />
                    </div>
                    <div>
                        <p className='datepicker-label'>Date de fin du séjour</p>
                        <DatePicker onChange={handleEndDate} value={endDate} isOpen={false} />
                    </div>
                </div>
            </div>
            <div className="hotels-component">
                <Hotel handleHotel={handleNights}/>
            </div>
        </>
    );
}