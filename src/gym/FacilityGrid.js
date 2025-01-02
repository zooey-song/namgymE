import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacilityCard from './FacilityCard';
import './FacilityGrid.css';

const itemsPerPage = 100;

const FacilityGrid = () => {
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (selectedPage) => {
    try {
      const response = await axios.post('https://www.eshare.go.kr/eshare-openapi/rsrc/list/010500/7cc4668b0bae3d6b940801a6eca5e616', {
        pageNo: selectedPage,
        numOfRows: itemsPerPage
      });
      if (response.data && response.data.data) {
        setFacilities(response.data.data);
        setPageCount(Math.ceil(response.data.totalCount / itemsPerPage));
      } else {
        throw new Error('Data is not in expected format');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
    console.log(facilities);
  }, [currentPage]);

  return (
    <div className="facility-grid">
      {facilities.map(facility => (
        <FacilityCard key={facility.id} {...facility} />
      ))}
      {error && <div>{error}</div>}
    </div>
  );
};

export default FacilityGrid;