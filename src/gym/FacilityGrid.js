import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacilityCard from './FacilityCard';
import './FacilityGrid.css';

const itemsPerPage = 12;

const FacilityGrid = () => {
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(10); // 총 120개 데이터와 12 페이지 고정
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (selectedPage) => {
    try {
      const response = await axios.post('https://www.eshare.go.kr/eshare-openapi/rsrc/list/010500/7cc4668b0bae3d6b940801a6eca5e616', {
        pageNo: selectedPage,
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
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0); // 페이지 상단으로 스크롤
  };
  
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageClick(i)} disabled={currentPage === i}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  return (
    <div>
      <div className="facility-grid">
        {facilities.map(facility => (
          <FacilityCard key={facility.id} {...facility} />
        ))}
        {error && <div>{error}</div>}
      </div>
      <div className="pagination">
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default FacilityGrid;
