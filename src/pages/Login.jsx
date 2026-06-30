import "./Login.css";
import { Navigate, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>

        <p className="login-text">
          Sign in to access your dashboard and manage your account.
        </p>

        <form className="login-form">
          <input type="email" placeholder="Email Address" />

          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? <button className="login-btn" onClick={()=>navigate("/signup")}>Signup</button>
        </p>
      </div>
    </div>
  );
}