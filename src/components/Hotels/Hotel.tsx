import "./Hotel.css";
import React from 'react';
import hotels from '../../data';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Hotel() {
    return (
        <div className="hotels-cards">
        {
            hotels.map((hotel, index) => (
                <Card style={{ width: '15rem', height: '20rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            ))
        }
        </div>
        
    );
}