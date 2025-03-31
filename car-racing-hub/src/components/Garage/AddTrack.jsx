import { useState } from "react";
import styles from "./addTrack.module.css";

const AddTrack = ({ onTrackAdded }) => {
  const [track, setTrack] = useState({
    name: "",
    location: "",
    length: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:5000/api/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(track),
    });

    if (response.ok) {
      onTrackAdded();
      setTrack({ name: "", location: "", length: "", image: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add a New Track</h2>
      <input type="text" placeholder="Name" value={track.name} onChange={(e) => setTrack({ ...track, name: e.target.value })} className={styles.input} required />
      <input type="text" placeholder="Location" value={track.location} onChange={(e) => setTrack({ ...track, location: e.target.value })} className={styles.input} required />
      <input type="number" placeholder="Length (km)" value={track.length} onChange={(e) => setTrack({ ...track, length: e.target.value })} className={styles.input} required />
      <input type="text" placeholder="Image URL" value={track.image} onChange={(e) => setTrack({ ...track, image: e.target.value })} className={styles.input} required />
      <button type="submit" className={styles.button}>Add Track</button>
    </form>
  );
};

export default AddTrack;