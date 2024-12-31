import React from "react";
import "./MainContent.css";
import SearchForm from "../components/SearchForm";

import FacilityGrid from "../gym/FacilityGrid"
const MainContent = () => {
  return (
    <div>
      <SearchForm />
      <FacilityGrid />
    </div>
  );
};

export default MainContent;
