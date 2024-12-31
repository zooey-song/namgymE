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
            <option value="게이트볼장">게이트볼장</option>
            <option value="골프장">골프장</option>
            <option value="배드민턴장">배드민턴장</option>
            <option value="수영장">수영장</option>
            <option value="실내체육관">실내체육관</option>
            <option value="야구장">야구장</option>
            <option value="운동장">운동장</option>
            <option value="족구장">족구장</option>
            <option value="체력단련실">체력단련실</option>
            <option value="축구장">축구장</option>
            <option value="탁구장">탁구장</option>
            <option value="테니스장">테니스장</option>
            <option value="풋살장">풋살장</option>
            <option value="야외운동시설">야외운동시설</option>
            <option value="종합경기장장">종합경기장장</option>

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
            <option value="21">부산</option>
          </select>
          <select className="form-control">
            <option value="">시·군·구 선택</option>
            <option value="중구">중구</option>
            <option value="서구">서구</option>
            <option value="동구">동구</option>
            <option value="영도구">영도구</option>
            <option value="부산진구">부산진구</option>
            <option value="동래구">동래구</option>
            <option value="남구">남구</option>
            <option value="북구">북구</option>
            <option value="해운대구">해운대구</option>
            <option value="사하구">사하구</option>
            <option value="금정구">금정구</option>
            <option value="강서구">강서구</option>
            <option value="연제구">연제구</option>
            <option value="수영구">수영구</option>
            <option value="사상구">사상구</option>
            <option value="기장군">기장군</option>
            <option value="기장읍">기장읍</option>
            <option value="장안읍">장안읍</option>
            <option value="정관읍">정관읍</option>
            <option value="일광면">일광면</option>
            <option value="철마면">철마면</option>
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
