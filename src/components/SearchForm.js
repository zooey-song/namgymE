import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SearchForm.css'; // 스타일 정의

const SearchForm = () => {
  const [filters, setFilters] = useState({
    resourceType: '',
    sido: '',
    gungu: '',
    myung: '',
  });

  const [gunguOptions, setGunguOptions] = useState([]); // 배열로 초기화

  // 첫 번째 select 값(sido)이 변경될 때마다 두 번째 select(gungu)의 옵션을 업데이트
  useEffect(() => {
    let options = [];
    if (filters.sido === '부산') {
      options = [
        '강서군', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구',
        '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구',
      ];
    } else if (filters.sido === '경남') {
      options = [
        '거제시', '거창군', '고성군', '김해시', '남해군', '밀양시', '사천시', '산청군',
        '양산시', '의령군', '진주시', '창녕군', '창원시', '통영시', '하동군', '함안군',
        '함양군', '합천군',
      ];
    }
    setGunguOptions(options); // gunguOptions 상태 업데이트
    setFilters((prevFilters) => ({
      ...prevFilters,
      gungu: '', // gungu 초기화
    }));
  }, [filters.sido]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="search-form">
      <div className="form-row">
        <div className="form-group">
          <label>희망지역</label>
          <select
            className="form-control"
            name="sido"
            value={filters.sido}
            onChange={handleInputChange}
          >
            <option value="">시·도 선택</option>
            <option value="부산">부산</option>
            <option value="경남">경상남도</option>
          </select>
          <select
            className="form-control"
            name="gungu"
            value={filters.gungu}
            onChange={handleInputChange}
          >
            <option value="">시·군·구 선택</option>
            {gunguOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="myung">자원명</label>
          <input
            type="text"
            id="myung"
            name="myung"
            className="form-control"
            value={filters.myung}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <Link
            to={{
              pathname: '/facility-grid',
              search: new URLSearchParams(filters).toString(),
            }}
            className="search-button"
          >
            검색
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
