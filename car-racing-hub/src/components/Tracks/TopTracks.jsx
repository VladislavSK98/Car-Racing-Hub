import { useEffect, useState } from "react";
import styles from "./TopTracks.module.css";

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tracks")
      .then((res) => res.json())
      .then((data) => {
        const topTracks = data.slice(0, 3); // Вземаме само топ 3 писти
        setTracks(topTracks);
      })
      .catch((error) => console.error("Error fetching tracks:", error));
  }, []);

  return (
    <div className={styles.tracksContainer}>
      <h2 className={styles.title}>🏁 Top 3 Tracks 🏁</h2>
      <div className={styles.tracksGrid}>
        {tracks.map((track) => (
          <div key={track._id} className={styles.trackCard}>
            <img src={track.image} alt={track.name} className={styles.trackImage} />
            <div className={styles.trackDetails}>
              <h3>{track.name}</h3>
              <p><strong>Location:</strong> {track.location}</p>
              <p><strong>Length:</strong> {track.length}</p>
              <p><strong>Fastest Lap:</strong> {track.fastestLap}</p>
              <p><strong>Record Holder:</strong> {track.recordHolder}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTracks;
