import "./Hotel.css";
import React from 'react';
import hotels from '../../data/hotels';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Hotel({handleHotel}: {handleHotel: Function}) {

    const handleInfos = (item: Object) => {
        console.log(item);
    }

    return (
        <div className="hotels-cards">
        {
            hotels.map((item, index) => (
                <Card style={{ width: '15rem', margin: '20px' }} key={index}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price} € / nuit</Card.Text>
                        <Button onClick={() => handleHotel(item)}>Choisir</Button>
                    </Card.Body>
                </Card>
            ))
        }
        </div>
    );
}