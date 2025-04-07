import { useEffect, useState } from 'react';
import { getAllCars } from '../../api/carsApi';
import { Link } from 'react-router-dom';


export default function Parking() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getAllCars().then(setCars);
    }, []);

    return (
        <section className="public-parking">
            <h2>🏁 Public Parking</h2>
            {cars.length === 0 ? (
                <p className="no-articles">No cars available yet.</p>
            ) : (
                <div className="car-list">
                    {cars.map(car => (
                        <div className="car-card" key={car._id}>
                            <img src={car.imageUrl || 'https://via.placeholder.com/250x150?text=No+Image'} alt={car.make} />
                            <h3>{car.make} {car.model}</h3>
                            <p>{car.power} hp · {car.year}</p>
                            <Link className="btn details-btn" to={`/garage/details/${car._id}`}>View</Link>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
