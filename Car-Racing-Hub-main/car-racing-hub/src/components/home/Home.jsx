import TopTracks from "../Tracks/TopTracks";

export default function Home() {
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>All about cars and racing</h2>
                <h3>Only on CarRacingHub</h3>
            </div>
            <img src="/images/touge.jpg" alt="hero" />

            <div id="home-page">
                <h1>Latest Tracks</h1>

                <TopTracks />

                {/* Ако няма писти *}
                {/* <p className="no-articles">No tracks yet</p> */}

            <div >
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
          

            <div className="track-list">
                    <img src="/images/f1car.jpg" alt="F1 Car" />
                    <img src="/images/spa.jpg" alt="Race Track" />
                    <img src="/images/pitstop.jpg" alt="Pit Stop" />
                </div>
            </div>
        </section>
    );
}
