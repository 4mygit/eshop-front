function Productdetails(){

    return (
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
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="products.html">Products</a>
        <span>›</span>
        <span>Wireless Headphones</span>
      </nav>

      <section className="details">
        <article className="card gallery" aria-label="Product gallery">
          <div className="main-img">
            <img src="assets/img/product-1.jpg" alt="Wireless headphones" />
          </div>
          <div className="thumbs" aria-label="Thumbnails">
            <div className="thumb"><img src="assets/img/product-1.jpg" alt="Thumbnail 1" /></div>
            <div className="thumb"><img src="assets/img/product-2.jpg" alt="Thumbnail 2" /></div>
            <div className="thumb"><img src="assets/img/product-3.jpg" alt="Thumbnail 3" /></div>
            <div className="thumb"><img src="assets/img/product-1.jpg" alt="Thumbnail 4" /></div>
          </div>
        </article>

        <aside className="card detail-panel" aria-label="Product purchase options">
          <div>
            <h1 style={{ 
    margin: 0, 
    fontSize: '22px', 
    lineHeight: 1.25 
  }}>Wireless Headphones</h1>
            <p style={{ 
    margin: '6px 0 0', 
    color: 'var(--muted)' 
  }}>
              Premium sound, active noise control, and all-day comfort.
            </p>
          </div>

          <div className="kpis" aria-label="Highlights">
            <div className="kpi"><b>⭐ 4.6</b><span>Customer rating</span></div>
            <div className="kpi"><b>48h</b><span>Fast delivery</span></div>
            <div className="kpi"><b>2yr</b><span>Warranty</span></div>
          </div>

          <div style={{ 
    display: 'flex', 
    alignItems: 'baseline', 
    justifyContent: 'space-between', 
    gap: '10px' 
  }}>
            <div>
              <div className="small-muted">Price</div>
              <div  style={{ 
    fontSize: '24px', 
    fontWeight: 900 
  }}>₹2,499</div>
            </div>
            <span className="pill" style={{ position: 'static' }}>In stock</span>
          </div>

          <div className="select-row">
            <div className="select">
              <label for="color">Color</label>
              <select id="color" name="color">
                <option>Midnight</option>
                <option>Silver</option>
                <option>Ocean</option>
              </select>
            </div>
            <div className="select">
              <label for="variant">Variant</label>
              <select id="variant" name="variant">
                <option>Standard</option>
                <option>Pro (ANC)</option>
                <option>Max</option>
              </select>
            </div>
          </div>

          <div className="quantity">
            <label for="qty">Quantity</label>
            <div className="qty-control">
              <button type="button" aria-label="Decrease quantity">−</button>
              <input id="qty" type="text" value="1" inputmode="numeric" aria-label="Quantity" />
              <button type="button" aria-label="Increase quantity">+</button>
            </div>
            <div className="helper">You can change quantity in cart later.</div>
          </div>

          <div style={{ display: 'grid', gap: '10px' }}>
            <button className="btn btn-primary" type="button">Add to cart</button>
            <a className="btn" href="cart.html">Go to cart</a>
          </div>

          <div className="hr"></div>

          <div>
            <h2 style={{ 
    margin: '0 0 6px', 
    fontSize: '16px' 
  }}>Description</h2>
            <ul style={{ 
    margin: 0, 
    color: 'var(--muted)', 
    paddingLeft: '18px' 
  }}>
              <li>Active noise reduction with transparency mode</li>
              <li>Up to 30 hours battery life</li>
              <li>Ergonomic fit, breathable cushions</li>
            </ul>
          </div>
        </aside>
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

export default Productdetails;