import "./Login.css";

export default function Login() {
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
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
}