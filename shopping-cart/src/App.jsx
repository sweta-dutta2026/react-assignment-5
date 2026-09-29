import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="shopping-app">

      <header className="shopping-header">
        <div className="brand">
          <div className="brand-icon">🛍️</div>

          <div>
            <h1>ShopEase</h1>
            <p>Your favorite products, all in one place</p>
          </div>
        </div>

        <div className="header-badge">
          ✨ Easy Shopping
        </div>
      </header>

      <div className="hero-section">
        <div>
          <span className="hero-tag">WELCOME TO SHOPEASE</span>

          <h2>
            Shop smarter.
            <br />
            <span>Live better.</span>
          </h2>

          <p>
            Discover amazing products and manage your cart effortlessly.
          </p>

          <button
            className="shop-now-btn"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Products →
          </button>
        </div>

        <div className="hero-emoji">
          🛒
        </div>
      </div>

      <main className="shopping-main">

        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <span>OUR COLLECTION</span>
              <h2>Featured Products</h2>
            </div>

            <div className="section-decoration">
              ✦ ✦ ✦
            </div>
          </div>

          <ProductList />
        </section>

        <section className="cart-wrapper">
          <div className="cart-heading">
            <span>🛒</span>

            <div>
              <span>YOUR SELECTION</span>
              <h2>Shopping Cart</h2>
            </div>
          </div>

          <Cart />
        </section>

      </main>

      <footer className="shopping-footer">
        <p>🛍️ ShopEase</p>
        <span>Happy shopping, happy living ✨</span>
      </footer>

    </div>
  );
}

export default App;