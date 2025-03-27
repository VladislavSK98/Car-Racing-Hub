import styles from "./Styles/Home.module.css";
import TopTracks from "../components/Tracks/TopTracks";

function Home() {
    return (
      <main className="page-container"> 
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Car Racing Hub</h1>
            <p className={styles.description}>
                The best place to share your track experiences and your cars!
            </p>

            <div>
                <TopTracks />
            </div>

            <div className={styles.quotes}>
                <blockquote>
                    "To finish first, first you have to finish." – Ayrton Senna
                </blockquote>
                <blockquote>
                    "Racing is life. Anything before or after is just waiting." – Steve McQueen
                </blockquote>
                <blockquote>
                    "You can’t overtake 15 cars in sunny weather, but you can when it’s raining." – Senna
                </blockquote>
            </div>

            <div className={styles.gallery}>
                <img src="../src/assets/f1car.jpg" alt="F1 Car" />
                <img src="../src/assets/spa.jpg" alt="Race Track" />
                <img src="../src/assets/pitstop.jpg" alt="Pit Stop" />
            </div>
        </div>
      </main>
    );
}

export default Home;
