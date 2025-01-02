import React from "react";
import "./FacilityCard.css"; // 스타일 시트

const FacilityCard = ({ rsrcNm, addr, daddr, fee, imgFileUrlAddr, instUrlAddr }) => {
  // 더 이상 facility 객체를 받지 않고, 직접 각 필드를 프롭스로 받습니다.

  // 데이터 검증: 제공된 값이 없을 때 기본값 설정
  return (
    <div className="facility-card">
      <img src={imgFileUrlAddr || "default-image.png"} alt={rsrcNm || "No image available"} className="card-image" />
      <div className="card-body">
        <h4 className="rsrcNm">{rsrcNm || "No name provided"}</h4>
        <p className="description">{addr ? `${addr} ${daddr || ""}` : "No address provided"}</p>
        <p className="fee">이용 요금: {fee || "정보 없음"}</p>
      </div>
      <div className="card-footer">
        <a href={instUrlAddr || "#"} target="_blank" rel="noopener noreferrer" className="details-button">상세보기</a>
      </div>
    </div>
  );
};

export default FacilityCard;
