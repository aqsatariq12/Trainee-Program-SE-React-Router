import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="product-detail">
      <div className="detail-card">
        <img
          src={`https://picsum.photos/500/350?random=${id}`}
          alt={`Product ${id}`}
        />

        <div className="detail-content">
          <h1>Product {id}</h1>

          <p className="price">$ {(id * 120).toFixed(2)}</p>

          <p className="description">
            This is a premium quality product. It is built with excellent
            materials and designed to provide comfort, durability, and a modern
            look.
          </p>

          <div className="buttons">
            <button className="buy-btn">
              Buy Now
            </button>

            <button
              className="back-btn"
              onClick={() => navigate("/products")}
            >
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;