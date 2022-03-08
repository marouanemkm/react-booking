import React from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {

    const totalOfNights = useSelector((state: RootState): number => { return state.date.nights });
    const startDateFinal = useSelector((state: RootState): any => { return state.date.startDate });
    const endDateFinal = useSelector((state: RootState): any => { return state.date.endDate });

    const hotelNameFinal = useSelector((state: RootState): any => { return state.cart.hotelName });

    console.log(totalOfNights);
    console.log(hotelNameFinal);
    console.log(startDateFinal);
    console.log(endDateFinal);

    return (
        <div>
            test cart
        </div>
    );
}