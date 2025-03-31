import { useState } from "react";
import styles from "./AddCar.module.css";

const AddCar = ({ onCarAdded }) => {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    horsepower: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(car),
    });

    if (response.ok) {
      onCarAdded();
      setCar({ brand: "", model: "", year: "", horsepower: "", image: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add a New Car</h2>
      <input type="text" placeholder="Brand" value={car.brand} onChange={(e) => setCar({ ...car, brand: e.target.value })} className={styles.input} required />
      <input type="text" placeholder="Model" value={car.model} onChange={(e) => setCar({ ...car, model: e.target.value })} className={styles.input} required />
      <input type="number" placeholder="Year" value={car.year} onChange={(e) => setCar({ ...car, year: e.target.value })} className={styles.input} required />
      <input type="number" placeholder="Horsepower (HP)" value={car.horsepower} onChange={(e) => setCar({ ...car, horsepower: e.target.value })} className={styles.input} required />
      <input type="text" placeholder="Image URL" value={car.image} onChange={(e) => setCar({ ...car, image: e.target.value })} className={styles.input} required />
      <button type="submit" className={styles.button}>Add Car</button>
    </form>
  );
};

export default AddCar;
