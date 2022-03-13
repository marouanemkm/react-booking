import "./Hotel.css";
import { useState, useEffect } from "react";
import services from "../../services/services";
import { Datas } from "../../types";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Hotel({handleHotel}: {handleHotel: Function}) {

    const [hotels, setHotels] = useState<Datas[]>()

    useEffect(() => {
        services.getHotels().then(res => setHotels(res))
    }, []);

    return (
        <div className="hotels-cards">
        {
            hotels ?
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
            : ''
        }
        </div>
    );
}