import React, { useState, useEffect } from 'react';
import "./SearchForm.css"; // 스타일 정의

const SearchForm = () => {

  const [firstSelectValue, setFirstSelectValue] = useState('option1');
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);

  // 첫 번째 select 값이 변경될 때마다 두 번째 select의 옵션을 업데이트
  useEffect(() => {
    let options;
    if (firstSelectValue === '21') {
      options = ['강서군', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구'];
    } else if (firstSelectValue === '48') {
      options = ['거제시', '거창군', '고성군', '김해시', '남해군', '밀양시', '사천시', '산청군', '양산시', '의령군', '진주시', '창녕군', '창원시', '통영시', '하동군', '함안군', '함양군', '합천군'];
    } else {
      options = ['시·군·구 선택'];
    }
    setSecondSelectOptions(options);
  }, [firstSelectValue]);



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
          <select className="form-control" value={firstSelectValue} onChange={e => setFirstSelectValue(e.target.value)}>
            <option value="00">시·도 선택</option>
            <option value="21">부산</option>
            <option value="48">경상남도</option>
          </select>
          <select className="form-control">
            {secondSelectOptions.map(option => (
            <option key={option} value={option}>{option}</option>
            ))}
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
