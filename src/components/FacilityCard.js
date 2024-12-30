import React from "react";
import "./FacilityCard.css";

const FacilityCard = ({ facility }) => {
  const { rsrcNm, addr, daddr, fee, imgFileUrlAddr } = facility;

  return (
    <div className="facility-card">
      <img src={imgFileUrlAddr} alt={rsrcNm} className="card-image" />
      <div className="card-body">
        <p className="rsrcNm">{rsrcNm}</p>
        <p className="description">{addr}</p>
        <p className="detailed-address">{daddr}</p>
        <p className="fee">이용 요금: {fee}</p>
      </div>
      <div className="card-footer">
        <button className="details-button">상세보기</button>
      </div>
    </div>
  );
};

export default FacilityCard;
