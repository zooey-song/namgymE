import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacilityCard from './FacilityCard';
import './FacilityGrid.css';

const itemsPerPage = 12;

const FacilityGrid = () => {
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState(null);
  //const [pageCount, setPageCount] = useState(10); // 총 120개 데이터와 12 페이지 고정
  const pageCount = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (selectedPage) => {
    try {
      const response = await axios.post('http://10.125.121.224:8080/api/resources', {
        pageNo: selectedPage,
        numOfRows: itemsPerPage,
        sido:"부산",
        gumgu:"해운대구"
      });
      //console.log(response);
      if (response.data.content) {
        setFacilities(response.data.content);
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
