import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FacilityDetail.css';

const FacilityDetail = () => {
  const [facilityData, setFacilityData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://www.eshare.go.kr/eshare-openapi/rsrc/detail/7cc4668b0bae3d6b940801a6eca5e616',
          {
            pageNo: 1,
            numOfRows: 1 // 필요한 데이터 수
            //,ctpvCd: 21,
          }
        );

        if (response.data && response.data.data) {
          setFacilityData(response.data.data[0]); // 첫 번째 데이터 사용
        } else {
          throw new Error('Invalid API response format.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!facilityData) return <p>No Data Available</p>;

  return (
    <div className="facility-detail-container">
      {/* 왼쪽 이미지 섹션 */}
      <div className="image-section">
        <div className="main-image">
          <img src={facilityData.imageUrl || 'placeholder.jpg'} alt="Main" />
        </div>
        <div className="thumbnail-images">
          {facilityData.additionalImages?.map((image, index) => (
            <img key={index} src={image} alt={`Thumbnail ${index}`} />
          ))}
        </div>
      </div>

      {/* 오른쪽 정보 섹션 */}
      <div className="info-section">
        <table>
          <tbody>
            <tr>
              <th>평일</th>
              <td>{facilityData.weekday || '관리자 문의'}</td>
            </tr>
            <tr>
              <th>토요일</th>
              <td>{facilityData.saturday || '관리자 문의'}</td>
            </tr>
            <tr>
              <th>일요일/공휴일</th>
              <td>{facilityData.sunday || '관리자 문의'}</td>
            </tr>
            <tr>
              <th>접수일시</th>
              <td>{facilityData.registrationTime || '전화문의'}</td>
            </tr>
            <tr>
              <th>이용기간</th>
              <td>{facilityData.operatingPeriod || '상시운영'}</td>
            </tr>
          </tbody>
        </table>
        <div className="facility-message">
          <p>{facilityData.message || '예약불필요 자원입니다.'}</p>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetail;
