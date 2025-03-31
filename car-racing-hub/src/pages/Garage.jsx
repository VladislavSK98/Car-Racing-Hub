import { useState } from "react";
import AddCar from "../components/AddCar";
import AddTrack from "../components/Garage/AddTrack";
import AddPost from "../components/Garage/AddPost";
import styles from "./Styles/Garage.module.css";

const Garage = () => {
  const [activeTab, setActiveTab] = useState("cars");

  return (
    <div className={styles.container}>
      <h1>My Garage</h1>
      <div className={styles.tabs}>
        <button onClick={() => setActiveTab("cars")} className={activeTab === "cars" ? styles.active : ""}>
          Cars
        </button>
        <button onClick={() => setActiveTab("tracks")} className={activeTab === "tracks" ? styles.active : ""}>
          Tracks
        </button>
        <button onClick={() => setActiveTab("posts")} className={activeTab === "posts" ? styles.active : ""}>
          Posts
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === "cars" && <AddCar />}
        {activeTab === "tracks" && <AddTrack />}
        {activeTab === "posts" && <AddPost />}
      </div>
    </div>
  );
};

export default Garage;
