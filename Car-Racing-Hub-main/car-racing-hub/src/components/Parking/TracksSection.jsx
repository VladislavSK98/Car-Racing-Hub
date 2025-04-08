import React, { useEffect, useState } from 'react';
// import { getAllTracksWithTimes } from '../../api/tracksApi';

export default function TracksSection() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        // Временно зареждаме примерни данни
        setTracks([
            {
                id: 1,
                name: 'Serres Circuit',
                imageUrl: 'https://www.racingcircuits.info/uploads/images/Serres-Map.png',
                lapTimes: [
                    {
                        user: 'Иван',
                        car: 'Mazda MX-5',
                        time: '1:23.45'
                    },
                    {
                        user: 'Петър',
                        car: 'BMW E36',
                        time: '1:20.87'
                    }
                ]
            },
            {
                id: 2,
                name: 'Калояново',
                imageUrl: '',
                lapTimes: []
            }
        ]);
    }, []);

    return (
        <div className="tracks-section">
            <h2>🏁 Писти и времена</h2>

            <div className="track-list">
                {tracks.map(track => (
                    <div key={track.id} className="track-card">
                        <img
                            src={track.imageUrl || 'https://via.placeholder.com/400x200?text=No+Track+Image'}
                            alt={track.name}
                        />
                        <h3>{track.name}</h3>

                        {track.lapTimes.length > 0 ? (
                            <table className="lap-times-table">
                                <thead>
                                    <tr>
                                        <th>Потребител</th>
                                        <th>Автомобил</th>
                                        <th>Време</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {track.lapTimes.map((entry, i) => (
                                        <tr key={i}>
                                            <td>{entry.user}</td>
                                            <td>{entry.car}</td>
                                            <td>{entry.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="no-times">Все още няма записани времена.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
