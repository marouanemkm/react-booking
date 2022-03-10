import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';


export default function Navbar() {

    const totalPrice = useSelector((state: RootState): any => { return state.cart.totalPrice });

    return (
        <div className='navbar'>
            <div className='left-header'>React Booking</div>
            <div className='right-header'>
                <FontAwesomeIcon icon={faCartShopping} />
                <p className='total-price-navbar'>{totalPrice} €</p>
            </div>
        </div>
    )
}