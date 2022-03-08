import './Shows.css';
import shows from '../../data/shows';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Shows() {



    return (
        <div className="shows-cards">
        {
            shows.map((item, index) => (
                <Card style={{ width: '15rem', margin: '20px' }} key={index}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price} €</Card.Text>
                        <Button onClick={() => console.log(item)}>Choisir</Button>
                    </Card.Body>
                </Card>
            ))
        }
        </div>
    )
}