import styles from "./Styles/Garage.module.css";

function Garage() {
    const cars = ["BMW E36", "Nissan Silvia S15", "Honda S2000"];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Garage</h1>
            <div className={styles.list}>
                {cars.map((car, index) => (
                    <div key={index} className={styles.listItem}>{car}</div>
                ))}
            </div>
        </div>
    );
}

export default Garage;
