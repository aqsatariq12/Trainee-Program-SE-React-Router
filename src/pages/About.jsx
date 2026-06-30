import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About ReactShop</h1>

        <p>
          Welcome to <strong>ReactShop</strong>, a simple e-commerce project
          built to learn React Router concepts like routing, nested routes,
          dynamic routes, protected routes, and navigation.
        </p>

        <div className="features">
          <div className="feature-box">
            <h3>🚀 Fast</h3>
            <p>Built with React and Vite for lightning-fast performance.</p>
          </div>

          <div className="feature-box">
            <h3>🛒 Shopping</h3>
            <p>Browse products and view their detailed information.</p>
          </div>

          <div className="feature-box">
            <h3>🔒 Secure</h3>
            <p>Protected dashboard using React Router authentication.</p>
          </div>
        </div>

        <button>Learn More</button>
      </div>
    </div>
  );
}