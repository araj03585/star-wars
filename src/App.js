// App.js

import React, { useState, useEffect } from 'react';
import PlanetsList from './PlanetsList';
import './App.css'

const App = () => {
    const [planets, setPlanets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}`);
                const data = await response.json();
                setPlanets(data.results);
                setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 planets per page
            } catch (error) {
                console.error('Error fetching planets:', error);
            }
        };

        fetchPlanets();
    }, [currentPage]);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div>
           <div className="starry-sky"></div> 
            <div className="container"></div>
            <header>
                <h1>Star Wars Planets Directory</h1>
            </header>
            <PlanetsList planets={planets} />
            
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default App;
