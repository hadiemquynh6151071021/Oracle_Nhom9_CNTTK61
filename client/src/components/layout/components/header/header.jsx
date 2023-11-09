
import React from "react";
import './header.scss';
import logo from '../images/logo-removebg-preview__1_-removebg-preview (1).png';
function Header(){
  return (
    <div className="nav-bg">
      <div className="container">
        <div className="nav">
          <div className="nav-logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="nav-content">
            <p className="nav-content-1">BỘ GIÁO DỤC VÀ ĐÀO TẠO</p>
            <p className="nav-content-2">TRANG THÔNG TIN KỲ THI TỐT NGHIỆP THPT </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
