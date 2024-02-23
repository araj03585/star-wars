// PlanetCard.js

import React, { useState, useEffect } from 'react';

const PlanetCard = ({ planet }) => {
    const [residents, setResidents] = useState([]);

    useEffect(() => {
        const fetchResidents = async () => {
            const residentsData = await Promise.all(planet.residents.map(async residentUrl => {
                const response = await fetch(residentUrl);
                return response.json();
            }));
            setResidents(residentsData);
        };

        fetchResidents();
    }, [planet.residents]);

    return (
        <div className="planet-card">
            <h2>{planet.name}</h2>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Population:</strong> {planet.population}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
            <h3>Residents</h3>
            <ul className="residents-list">
                {residents.map((resident, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {resident.name} <br />
                        <strong>Height:</strong> {resident.height} <br />
                        <strong>Mass:</strong> {resident.mass} <br />
                        <strong>Gender:</strong> {resident.gender}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlanetCard;
