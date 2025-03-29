import { useState, useEffect } from "react";
import AddCar from "../components/AddCar";
import styles from "../pages/Styles/Garage.module.css";

const Garage = () => {
  const [cars, setCars] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    fetch("http://localhost:5000/api/cars/my-garage", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching user cars:", err));
  }, [token]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Garage</h2>
      <AddCar onCarAdded={() => window.location.reload()} />
      <div className={styles.carsList}>
        {cars.length === 0 ? (
          <p>No cars added yet. Add your first car!</p>
        ) : (
          cars.map((car) => (
            <div key={car._id} className={styles.carCard}>
              <img src={car.image} alt={car.model} className={styles.carImage} />
              <div className={styles.carInfo}>
                <h3>{car.brand} {car.model}</h3>
                <p><strong>Year:</strong> {car.year}</p>
                <p><strong>Horsepower:</strong> {car.horsepower} HP</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Garage;
