import React, { useState } from "react";
import FacilityCard from "./FacilityCard";
import "./FacilityGrid.css";

const facilities = [
  
  { city: "부산", district: "연제구", type: "직접예약", title: "남문초등학교 체육시설", description: "예약방법 간편문의", approval: "심사", fee: "무료", image: "facility1.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "남문초등학교 체육시설", description: "예약방법 간편문의", approval: "심사", fee: "무료", image: "facility1.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "남문초등학교 체육시설", description: "예약방법 간편문의", approval: "심사", fee: "무료", image: "facility1.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "남문초등학교 체육시설", description: "예약방법 간편문의", approval: "심사", fee: "무료", image: "facility1.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "남문초등학교 체육시설", description: "예약방법 간편문의", approval: "심사", fee: "무료", image: "facility1.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "남문초등학교 체육시설", description: "예약방법 간편문의", approval: "심사", fee: "무료", image: "facility1.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "남문초등학교 체육시설", description: "예약방법 간편문의", approval: "심사", fee: "무료", image: "facility1.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  { city: "부산", district: "연제구", type: "직접예약", title: "연안교하부쉼터", description: "예약방법 예약불필요", approval: "비대상", fee: "무료", image: "facility2.jpg" },
  // 추가 데이터 (예제)
];

const itemsPerPage = 6; // 한 페이지에 표시할 항목 수

const FacilityGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지별 데이터 계산
  const totalPages = Math.ceil(facilities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFacilities = facilities.slice(startIndex, startIndex + itemsPerPage);

  // 페이지 변경 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="facility-grid">
        {currentFacilities.map((facility, index) => (
          <FacilityCard key={index} facility={facility} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={`page-button ${page === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default FacilityGrid;
