import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        (46241) 부산광역시 금정구 부산대학로63번길 2 (장전동) 부산대학교 Tel : 051-510-2000
        <br />
        <a href="mailto:plato@pusan.ac.kr">plato@pusan.ac.kr</a>
        </div>
      <div class="footer-dropdown">
        <button><img src="arrow.png" alt="Dropdown Icon" class="dropdown-icon"/></button>
        <ul class="dropdown-menu">
          <li><a href="#item1">Item 1</a></li>
          <li><a href="#item2">Item 2</a></li>
          <li><a href="#item3">Item 3</a></li>
        </ul>
    </div>
    </footer>
  );
};

export default Footer;
