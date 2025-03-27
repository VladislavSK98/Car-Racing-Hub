import { useState, useEffect } from "react";
import styles from "../pages/Styles/Parking.module.css"; 

const Parking = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching all cars:", err));
  }, []);

  return (
    <main className="page-container"> 
      <div className={styles.container}>
        <h2 className={styles.title}>All Cars in Parking</h2>
        <div className={styles.carsList}>
          {cars.length === 0 ? (
            <p>No cars available.</p>
          ) : (
            cars.map((car) => (
              <div key={car._id} className={styles.carCard}>
                <img src={car.image} alt={car.model} className={styles.carImage} />
                <div className={styles.carInfo}>
                  <h3>{car.brand} {car.model}</h3>
                  <p><strong>Year:</strong> {car.year}</p>
                  <p><strong>Horsepower:</strong> {car.horsepower} HP</p>
                  <p>
                    <strong>Owner:</strong>{" "}
                    {car.owner ? car.owner.username : "Unknown"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Parking;
