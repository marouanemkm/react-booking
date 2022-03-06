import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {



    return (
        <div className='navbar'>
            <div className='left-header'>React Booking</div>
            <div className='right-header'><FontAwesomeIcon icon={faCartShopping} /></div>
        </div>
    )
}