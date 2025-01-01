import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  // 로그인 상태를 확인하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 토큰을 확인하여 로그인 상태를 설정
    const token = localStorage.getItem('Authorization');
    setIsLoggedIn(!!token);
  }, []);

  // 로그아웃 함수
  const handleLogout = (event) => {
    event.preventDefault(); // 기본 링크 동작을 방지
    localStorage.removeItem('Authorization'); // localStorage에서 'Authorization' 삭제
    window.location.reload(); // 페이지 전체를 새로고침
  };

  return (
    <div className="header">
      <div className="top-nav">
        <div className="nav">
          {isLoggedIn ? (
            <>
              <a href="/logout" className="logout" onClick={handleLogout}>로그아웃</a>
              <a href="/favorit" className="favorit">즐겨찾기</a>
            </>
          ) : (
            <>
              <a href="/login" className="login">로그인</a>
              <a href="/register" className="signup">회원가입</a>
            </>
          )}
        </div>
      </div>
      <div className="main-nav">
        <a href="/" className="logo">
          <img src="logo.png" className="logo-image" alt="Logo"/>
        </a>
        <div className="nav">
          <a href="/">검색하기</a>
          <a href="#">커뮤니티</a>
        </div>
      </div>
    </div>
  );
};

export default Header;