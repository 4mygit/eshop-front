function Product(){
    
    return(
<>
  <a className="skip-link" href="#main">Skip to content</a>

  <header className="header">
    <div className="container">
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="products.html">
          <span className="brand-badge" aria-hidden="true"></span>
          <span>Shop UI</span>
        </a>

        <div className="search" role="search" aria-label="Site search">
          <input type="text" placeholder="Search products, brands…" aria-label="Search products" />
          <span className="hint" aria-hidden="true">Ctrl K</span>
        </div>

        <div className="nav-actions">
          <a className="icon-btn" href="cart.html" aria-label="Go to cart">
            🛒 <span className="badge" aria-label="Items in cart">2</span>
          </a>
          <a className="icon-btn" href="login.html">Login</a>
          <a className="btn btn-primary" href="register.html">Create account</a>
        </div>
      </nav>
    </div>
  </header>

  <main id="main">
    <div className="container">
      <section className="hero" aria-label="Intro">
        <div>
          <h1>Discover premium essentials</h1>
          <p>Modern, responsive UI template for a shopping cart project—products, details, cart, checkout, auth pages.</p>
        </div>
        <div style={{  display: 'grid', gap: '10px', justifyItems: 'start'}}>
          <a className="btn btn-primary" href="#catalog">Browse catalog</a>
          <a className="btn" href="cart.html">View cart</a>
        </div>
      </section>

      <div className="section-title">
        <h2 id="catalog">Popular Products</h2>
        <span className="small-muted">Showing 9 items</span>
      </div>

      <section className="grid grid-3" aria-label="Product listing">
        <article className="card product-card">
          <a className="product-media" href="product-details.html" aria-label="Open product details">
            <span className="pill">Best Seller</span>
            <img src="assets/img/product-1.jpg" alt="Wireless headphones on a desk" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Wireless Headphones</h3>
              <span className="price">₹2,499</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.6</span><span className="dot"></span>
              <span>Free delivery</span><span className="dot"></span>
              <span>2-year warranty</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>

  
        <article className="card product-card">
          <a className="product-media" href="product-details.html">
            <span className="pill">New</span>
            <img src="assets/img/product-2.jpg" alt="Smart watch close-up" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Smart Watch</h3>
              <span className="price">₹3,199</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.3</span><span className="dot"></span>
              <span>Fast shipping</span><span className="dot"></span>
              <span>AMOLED</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>

{/*card 3 */}
        <article className="card product-card">
          <a className="product-media" href="product-details.html">
            <span className="pill">-20%</span>
            <img src="assets/img/product-3.jpg" alt="Minimal backpack on chair" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Everyday Backpack</h3>
              <span className="price">₹1,699</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.7</span><span className="dot"></span>
              <span>Water resistant</span><span className="dot"></span>
              <span>20L</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>

     
        <article className="card product-card">
          <a className="product-media" href="product-details.html" aria-label="Open product details">
            <span className="pill">Trending</span>
            <img src="assets/img/product-1.jpg" alt="Wireless headphones on a desk" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Noise Cancelling Earbuds</h3>
              <span className="price">₹1,999</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.4</span><span className="dot"></span>
              <span>Compact case</span><span className="dot"></span>
              <span>Bluetooth 5.3</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>

        <article className="card product-card">
          <a className="product-media" href="product-details.html">
            <span className="pill">Limited</span>
            <img src="assets/img/product-2.jpg" alt="Smart watch close-up" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Fitness Band Pro</h3>
              <span className="price">₹1,299</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.2</span><span className="dot"></span>
              <span>7-day battery</span><span className="dot"></span>
              <span>Sleep tracking</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>

        <article className="card product-card">
          <a className="product-media" href="product-details.html">
            <span className="pill">Editor’s pick</span>
            <img src="assets/img/product-3.jpg" alt="Minimal backpack on chair" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Laptop Sleeve 15"</h3>
              <span className="price">₹899</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.8</span><span className="dot"></span>
              <span>Soft lining</span><span className="dot"></span>
              <span>Shock proof</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>

        <article className="card product-card">
          <a className="product-media" href="product-details.html">
            <span className="pill">Hot</span>
            <img src="assets/img/product-1.jpg" alt="Wireless headphones on a desk" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Bluetooth Speaker</h3>
              <span className="price">₹2,099</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.5</span><span className="dot"></span>
              <span>Deep bass</span><span className="dot"></span>
              <span>IPX7</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>

        <article className="card product-card">
          <a className="product-media" href="product-details.html">
            <span className="pill">Value</span>
            <img src="assets/img/product-2.jpg" alt="Smart watch close-up" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Charging Dock</h3>
              <span className="price">₹649</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.1</span><span className="dot"></span>
              <span>USB-C</span><span className="dot"></span>
              <span>Fast charge</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>

        <article className="card product-card">
          <a className="product-media" href="product-details.html">
            <span className="pill">Premium</span>
            <img src="assets/img/product-3.jpg" alt="Minimal backpack on chair" />
          </a>
          <div className="product-body">
            <div className="product-title">
              <h3>Travel Duffel Bag</h3>
              <span className="price">₹2,799</span>
            </div>
            <div className="meta">
              <span className="rating">⭐ 4.6</span><span className="dot"></span>
              <span>Carry-on</span><span className="dot"></span>
              <span>Durable</span>
            </div>
            <div className="product-actions">
              <a className="btn" href="product-details.html">View</a>
              <button className="btn btn-primary" type="button">Add to cart</button>
            </div>
          </div>
        </article>
      </section>

      <footer className="footer">
        <div className="row container">
          <span>© 2026 Shop UI. All rights reserved.</span>
          <span>Privacy • Terms • Support</span>
        </div>
      </footer>
    </div>
  </main>
  </>
)
}

export default Product;