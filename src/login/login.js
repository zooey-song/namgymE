import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios를 import
import './login.css';

const Login = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 동작 방지

    try {
      const response = await axios.post('http://10.125.121.118:8080/login', {
        userid, // 요청 바디에 userid 추가
        password, // 요청 바디에 password 추가
      });

      // 로그인 성공 시
      if (response.status === 200) {
        const { token } = response.data; // 응답에서 토큰 가져오기
        localStorage.setItem('Authorization', token); // 토큰을 localStorage에 저장
        setError('');
        navigate('/'); // 홈으로 이동
        window.location.reload();
      } else {
        setError('로그인에 실패했습니다. 다시 시도하세요.');
      }
    } catch (error) {
      // 서버 에러 또는 네트워크 에러 처리
      if (error.response && error.response.data) {
        setError(error.response.data.message || '아이디 혹은 비밀번호가 다릅니다.');
      } else {
        setError('네트워크 에러가 발생했습니다. 다시 시도하세요.');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">로그인</h2>
        <div className="login-input-group">
          <label>아이디</label>
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            className="login-input"
            placeholder="아이디를 입력하세요"
            required
          />
        </div>
        <div className="login-input-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;