import React, { useState } from 'react';
import axios from 'axios'; // axios를 import
import './Register.css';

const Register = () => {
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess(false);
    } else {
      try {
        // 여기에서 POST 요청을 보냅니다.
        const response = await axios.post('http://10.125.121.118:8080/join', {
          userid,
          password,
          nickname
        });

        if (response.data.success) {
          setSuccess(true);
          setError('');
          console.log('Registration Successful:', response.data);
          // 추가적인 로직 (예: 로그인 페이지로 리디렉션)
        } else {
          setError(response.data.message || 'An error occurred. Please try again.');
          setSuccess(false);
        }
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred. Please try again.');
        setSuccess(false);
      }
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">회원가입</h2>
        <div className="register-input-group">
          <label>아이디</label>
          <input
            type="userid"
            value={userid}
            onChange={(e) => setUserId(e.target.value)}
            className="register-input"
            required
          />
        </div>
        <div className="register-input-group">
          <label>닉네임</label>
          <input
            type="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="register-input"
            required
          />
        </div>
        <div className="register-input-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
            required
          />
        </div>
        <div className="register-input-group">
          <label>확인비밀번호</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="register-input"
            required
          />
        </div>
        {error && <p className="register-error">{error}</p>}
        {success && <p className="register-success">Registration Successful!</p>}
        <button type="submit" className="register-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Register;