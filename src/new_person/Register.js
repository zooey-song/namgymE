import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess(false);
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
      console.log('User Registered:', { email, password });
      // 여기에 회원가입 처리 로직 추가 가능
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Sign Up</h2>
        <div className="register-input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
            required
          />
        </div>
        <div className="register-input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
            required
          />
        </div>
        <div className="register-input-group">
          <label>Confirm Password:</label>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
