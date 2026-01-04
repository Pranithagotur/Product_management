import { useState } from "react";
import { initialProducts } from "./data/initialProducts";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import ViewToggle from "./components/ViewToggle";
import dashboardImg from "./assets/dashboard_img.png";

function App() {
  // ---------- Dashboard control ----------
  const [showDashboard, setShowDashboard] = useState(true);

  // ---------- Product app states ----------
  const [products, setProducts] = useState(initialProducts);
  const [view, setView] = useState("list");
  const [search, setSearch] = useState("");

  // ---------- DASHBOARD PAGE ----------
  if (showDashboard) {
    return (
      <div className="dashboard">
        {/* Text section */}
        <div className="dashboard-content">
          <h1 className="dashboard-title">Product Management</h1>
          <p className="dashboard-subtitle">
            Efficiently manage your products
          </p>

          <button
            className="dashboard-btn"
            onClick={() => setShowDashboard(false)}
          >
            Get Started
          </button>
        </div>

        {/* Image AFTER text */}
        <div className="dashboard-image">
          <img src={dashboardImg} alt="Dashboard Illustration" />
        </div>
      </div>
    );
  }

  // ---------- PRODUCT MANAGEMENT PAGE ----------
  return (
    <div className="container">
      <h1 className="page-title">Product Management</h1>

      <SearchBar setSearch={setSearch} />

      <ViewToggle view={view} setView={setView} />

      <ProductForm products={products} setProducts={setProducts} />

      <ProductList
        products={products}
        view={view}
        search={search}
      />
    </div>
  );
}

export default App;
