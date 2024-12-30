import React from "react";
import "./SearchForm.css"; // 스타일 정의

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="resourceType">자원분류</label>
          <select id="resourceType" className="form-control">
            <option value="">자원분류 선택</option>
          </select>
        </div>
        <div className="form-group">
          <label>요금구분</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="feeType" value="all" defaultChecked /> 전체
            </label>
            <label>
              <input type="radio" name="feeType" value="free" /> 무료
            </label>
            <label>
              <input type="radio" name="feeType" value="paid" /> 유료
            </label>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>희망지역</label>
          <select className="form-control">
            <option value="">시·도 선택</option>
          </select>
          <select className="form-control">
            <option value="">시·군·구 선택</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="resourceName">자원명</label>
          <div className="input-group">
            <input type="text" id="resourceName" className="form-control" />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <button type="button" className="search-button">검색</button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
