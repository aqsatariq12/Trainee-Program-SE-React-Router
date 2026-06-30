import "./Signup.css";
import { Navigate, useNavigate } from "react-router-dom";
export default function Signup() {
    const navigate = useNavigate();
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>

        <p className="signup-info">
          Create your account to start managing your dashboard.
        </p>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <input type="password" placeholder="Password" />

          <input type="password" placeholder="Confirm Password" />

          <button type="submit">Register</button>
        </form>

        <p className="login-text">
          Already have an account? <button className="login-btn" onClick={()=>navigate("/login")}>Login</button>
        </p>
      </div>
    </div>
  );
}