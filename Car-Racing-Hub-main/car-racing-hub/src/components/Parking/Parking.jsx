// src/pages/Parking/Parking.jsx
import React from 'react';
import PostSection from './PostSection';
import CarsSection from './CarsSection';
import TracksSection from './TracksSection';
// import LapTimesSection from './LapTimesSection';

export default function Parking() {
    return (
        <section className="parking-page">
            <header className="parking-header">
                <h1>🏁 Parking – Social zone for Cars, Tracks, Posts and Passion</h1>
                <p>Check all cars, tracks, posts and lap-times from car community!</p>
            </header>

            <div className="parking-grid">
                <div className="parking-section">
                    <PostSection />
                </div>

                <div className="parking-section">
                    <CarsSection />
                </div>

                <div className="parking-section">
                    <TracksSection />
                </div>

                {/* <div className="parking-section">
                    <LapTimesSection />
                </div> */}
            </div>
        </section>
    );
}
