import './Home.css';
import Booking from '../Booking/Booking';

export default function Home() {
    return (
        <>
            <div style={{display: 'none'}} className="home">
                <h2 className="home-title">Réservez votre hôtel ainsi que votre show<br />dès maintenant !</h2>
            </div>

            <div className='booking-picker'>
                <Booking />
            </div>
        </>
    );
}