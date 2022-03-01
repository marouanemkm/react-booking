import './Booking.css';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import { useDispatch } from 'react-redux';


export default function Booking() {
    
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [nights, setNights] = useState<Number>(0);

    const dispatch = useDispatch();

    useEffect(() => {
        if (endDate >= startDate) {
            let days: number = endDate.getTime() - startDate.getTime();
            setNights(Math.trunc(days / (1000 * 3600 * 24)) + 1);       
        } else {
            alert('Veuillez choisir une date de départ inférieur à la date de fin')           
        }
    }, [startDate, endDate]);

    const handleStartDate = (e: Date): void => {
        setStartDate(e);
        // dispatch({
        //     type: 'start',
        //     payload: startDate,
        // });
    }

    const handleEndDate = (e: Date): void => {
        // if (launchFunction) {
            setEndDate(e);
            // dispatch({
            //     type: 'end',
            //     payload: endDate,
            // });
        // }
    }
    
    return (
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
    );
}