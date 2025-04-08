import React, { useEffect, useState } from 'react';
import { getAllCars } from '../../api/carsApi';
import { Link } from 'react-router-dom';

export default function CarsSection() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars()
      .then(setCars)
      .catch(console.error);
  }, []);

  return (
    <div className="cars-section">
      <h2>🚗 Users cars:</h2>

      <div className="car-list">
        {cars.map((car) => (
          <div key={car._id} className="car-card">
            <img
              src={car.imageUrl || 'https://via.placeholder.com/300x180?text=No+Image'}
              alt={`${car.make} ${car.model}`}
            />
            <h3>{car.make} {car.model}</h3>
            <p><strong>Owner:</strong> {car.userId?.username || 'Unknown'}</p>
            <p><strong>Year:</strong> {car.year}</p>
            <p><strong>Power:</strong> {car.power} к.с.</p>

            {/* 🔍 Линк към детайли */}
            <Link to={`/cars/${car._id}`}>
              <button>🔍 Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
