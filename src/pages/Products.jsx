import { Outlet } from "react-router";
import { Link } from "react-router";
function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      {/* Product list */}

      <Outlet />

        <Link to="/products/1">Product 1</Link>
        <Link to="/products/2">Product 2</Link>
    </div>
  );
}

export default Products;