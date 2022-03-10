import './Booking.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Hotel from '../Hotels/Hotel';

export default function Booking() {
    
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [nights, setNights] = useState<Number | undefined>(undefined);
    const [error, setError] = useState<string>('');

    const startDateFinal = useSelector((state: RootState): any => { return state.date.startDate });
    const endDateFinal = useSelector((state: RootState): any => { return state.date.endDate });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect((): void => {
        let startTime = startDate.getTime().toString().substring(0, 5);
        let endTime = endDate.getTime().toString().substring(0, 5);
        let todayTime = Date.now().toString().substring(0, 5);
        let numberOfNights: number = Math.trunc((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));

        if (numberOfNights > 0 && (startTime > todayTime && endTime > todayTime)) setNights(numberOfNights);
        else setNights(undefined);
    }, [startDate, endDate]);

    const handleStartDate = (e: Date): void => setStartDate(e);

    const handleEndDate = (e: Date): void => setEndDate(e);

    dispatch({ type: 'addnights', nights: nights, startDate: startDate, endDate: endDate });

    const handleHotel = (hotel: any): void => {
        dispatch({ type: 'addhotel', hotelName: hotel.name, hotelPrice: hotel.price });

        if (!startDateFinal && !endDateFinal) {
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
                        <DatePicker onChange={handleStartDate} value={startDate} isOpen={false} />
                    </div>
                    <div>
                        <p className='datepicker-label'>Date de fin du séjour</p>
                        <DatePicker onChange={handleEndDate} value={endDate} isOpen={false} />
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