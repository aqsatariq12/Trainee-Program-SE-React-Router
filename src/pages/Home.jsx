import "./Home.css"
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to ReactShop</h1>

        <p>
          Learn React Router by building a simple e-commerce website with
          multiple pages, dynamic routes, protected routes, and more.
        </p>

        <button onClick={()=> navigate("/products")}>Explore Products</button>
      </div>
    </div>
  );
}