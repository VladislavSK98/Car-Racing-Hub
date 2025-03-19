import styles from "./Styles/Tracks.module.css";

function Tracks() {
    const tracks = ["Nürburgring", "Spa-Francorchamps", "Tsukuba Circuit"];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Track Experiences</h1>
            <div>
                {tracks.map((track, index) => (
                    <div key={index} className={styles.trackCard}>{track}</div>
                ))}
            </div>
        </div>
    );
}

export default Tracks;
