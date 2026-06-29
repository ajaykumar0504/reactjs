import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', { email, password, rememberMe });
  };

  return (
    <div className="login-container">
      <section className="login-left">
        <div className="brand-header">
          <span className="app-title">AI Education</span>
          <h1 className="main-heading">Empowering Minds with AI Education</h1>
          <p className="short-description">
            Unlock your potential with personalized learning paths powered by next-generation artificial intelligence.
          </p>
        </div>

        <ul className="feature-highlights">
          <li className="feature-item">
            <span className="feature-icon">✨</span> Smart Learning
          </li>
          <li className="feature-item">
            <span className="feature-icon">📈</span> Track Progress
          </li>
          <li className="feature-item">
            <span className="feature-icon">🤖</span> AI Assistance
          </li>
        </ul>

        <div className="illustration-wrapper">
          <div className="illustration-placeholder">
            <span className="illustration-graphic">💡</span>
          </div>
        </div>
      </section>

      <section className="login-right">
        <div className="login-card">
          <header className="card-header">
            <h2>Welcome Back</h2>
            <p className="subtitle">Please enter your credentials to access your account.</p>
          </header>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Me</span>
              </label>
              <a href="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-button">
              Log In
            </button>
          </form>

          <footer className="card-footer">
            <p>
              Don't have an account?{' '}
              <a href="/register" className="register-link">
                Register here
              </a>
            </p>
          </footer>
        </div>
      </section>

    </div>
  );
};

export default Login;