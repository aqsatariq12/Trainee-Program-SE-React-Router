import { Link, Outlet } from "react-router-dom";
import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: "$120",
      image: "https://picsum.photos/250/180?random=1",
    },
    {
      id: 2,
      name: "Apple Watch",
      price: "$299",
      image: "https://picsum.photos/250/180?random=2",
    },
    {
      id: 3,
      name: "Laptop",
      price: "$899",
      image: "https://picsum.photos/250/180?random=3",
    },
    {
      id: 4,
      name: "Headphones",
      price: "$99",
      image: "https://picsum.photos/250/180?random=4",
    },
  ];

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <Link to={`/products/${product.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;