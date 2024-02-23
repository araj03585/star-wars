

import React from 'react';
import PlanetCard from './PlanetCard';

const PlanetsList = ({ planets }) => {
    return (
        <div className="planets-container">
            {planets.map((planet, index) => (
                <PlanetCard key={index} planet={planet} />
            ))}
        </div>
    );
};

export default PlanetsList;
