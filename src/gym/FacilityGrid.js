import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacilityCard from './FacilityCard';
import './FacilityGrid.css';

const itemsPerPage = 6;

const FacilityGrid = () => {
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Define fetchData outside useEffect so it can be called from handlePageChange
  const fetchData = async () => {
    try {
      const response = await axios.post('https://www.eshare.go.kr/eshare-openapi/rsrc/list/010500/7cc4668b0bae3d6b940801a6eca5e616', {
        pageNo: currentPage,
        numOfRows: itemsPerPage
      });
      if (response.data && response.data.data) {
        setFacilities(response.data.data);
      } else {
        throw new Error('Data is not in expected format');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();  // Call fetchData inside useEffect
  }, [currentPage]);  // Dependency array to re-fetch data when currentPage changes

  const totalPages = Math.ceil(60 / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFacilities = facilities.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="facility-grid">
        {error ? <p>Error: {error}</p> :
          currentFacilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} />
          ))
        }
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button key={page} onClick={() => handlePageChange(page)}
            className={`page-button ${page === currentPage ? "active" : ""}`}>{page}</button>
        ))}
      </div>
    </div>
  );
};

export default FacilityGrid;
