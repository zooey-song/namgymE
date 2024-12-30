import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // CSS 파일을 import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 로그인 검증 (데모용)
    if (email === 'user' && password === '123') {
      setError('');
      navigate('/'); // 성공 시 홈으로 이동
    } else {
      setError('아이디 혹은 비밀번호가 다릅니다.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <div className="login-input-group">
          <label>이름</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
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
            required
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
