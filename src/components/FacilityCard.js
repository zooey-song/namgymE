import React from "react";
import "./FacilityCard.css";

const FacilityCard = ({ facility }) => {
  const { title, description, approval, fee, image } = facility;

  return (
    <div className="facility-card">
      <CardImage image={image} title={title} />
      <CardBody title={title} description={description} approval={approval} fee={fee} />
      <CardFooter />
    </div>
  );
};

const CardImage = ({ image, title }) => (
  <img src={image} alt={title} className="card-image" />
);

const CardBody = ({ title, description, approval, fee }) => (
  <div className="card-body">
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
    <p className="approval">심사여부: {approval}</p>
    <p className="fee">이용 요금: {fee}</p>
  </div>
);

const CardFooter = () => (
  <div className="card-footer">
    <button className="details-button">상세보기</button>
  </div>
);

export default FacilityCard;
