import React from "react";
import "./Header.css";

const Header = () => {
  return (
<div class="header">
  <div class="top-nav">
    <div class="nav">
      <a href="/login" class="login">로그인</a>
      <a href="/register" class="signup">회원가입</a>
    </div>
  </div>
  <div class="main-nav">
    <a href="/" class="logo">
      <img src="logo.png" class="logo-image" alt="Logo"/>
    </a>
    <div class="nav">
      <a href="/">검색하기</a>
      <a href="#">커뮤니티</a>
    </div>
  </div>
</div>
  );
};

export default Header;
