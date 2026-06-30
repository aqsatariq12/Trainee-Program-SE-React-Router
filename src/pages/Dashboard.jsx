import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's an overview of your account.</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h2>24</h2>
          <p>Total Orders</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Pending Orders</p>
        </div>

        <div className="stat-card">
          <h2>16</h2>
          <p>Completed Orders</p>
        </div>

        <div className="stat-card">
          <h2>$2,450</h2>
          <p>Total Spending</p>
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Recent Activity</h2>

        <ul>
          <li>✅ Purchased Nike Shoes</li>
          <li>📦 Apple Watch order shipped</li>
          <li>❤️ Added Laptop to wishlist</li>
          <li>⭐ Rated Headphones 5 stars</li>
        </ul>
      </div>
    </div>
  );
}