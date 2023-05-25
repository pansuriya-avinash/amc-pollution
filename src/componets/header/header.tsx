import React from "react";
import amcLogo from "../../assets/image/amcLogo.jpeg";
import "./header.scss";
const Header: React.FC<any> = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-logo flex align-items--center">
          <img src={amcLogo} alt="logo" />
          <div className="logo-text">
            <h6>Ahmedabad Municipal Corporation</h6>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Header;
