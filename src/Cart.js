function Cart(){

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

        <div className="nav-actions">
          <a className="icon-btn" href="products.html">Continue shopping</a>
          <a className="icon-btn" href="login.html">Login</a>
        </div>
      </nav>
    </div>
  </header>

  <main id="main">
    <div className="container">
      <div className="section-title">
        <h2>Your Cart</h2>
        <span className="small-muted">2 items</span>
      </div>

      <section className="two-col">
        <article className="card">
          <div className="cart-list" aria-label="Cart items">
            <div className="cart-item">
              <div className="thumb2">
                <img src="assets/img/product-1.jpg" alt="Wireless Headphones" />
              </div>
              <div>
                <h3>Wireless Headphones</h3>
                <div className="small-muted">Variant: Pro (ANC) • Color: Midnight</div>

                <div className="row">
                  <div className="left">
                    <div className="qty-control" style={{ width: '160px' }}>
                      <button type="button" aria-label="Decrease quantity">−</button>
                      <input type="text" value="1" aria-label="Quantity" />
                      <button type="button" aria-label="Increase quantity">+</button>
                    </div>
                    <button className="btn btn-link remove" type="button">Remove</button>
                  </div>

                  <div className="price">₹2,499</div>
                </div>
              </div>
            </div>

            <div className="cart-item">
              <div className="thumb2">
                <img src="assets/img/product-3.jpg" alt="Everyday Backpack" />
              </div>
              <div>
                <h3>Everyday Backpack</h3>
                <div className="small-muted">Color: Black • Size: 20L</div>

                <div className="row">
                  <div className="left">
                    <div className="qty-control" style={{ width: 160 }}>
                      <button type="button" aria-label="Decrease quantity">−</button>
                      <input type="text" value="1" aria-label="Quantity" />
                      <button type="button" aria-label="Increase quantity">+</button>
                    </div>
                    <button className="btn btn-link remove" type="button">Remove</button>
                  </div>

                  <div className="price">₹1,699</div>
                </div>
              </div>
            </div>

            <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    gap: '10px' 
  }}>
              <a className="btn" href="products.html">← Back to products</a>
              <button className="btn btn-danger" type="button">Clear cart</button>
            </div>
          </div>
        </article>

        <aside className="card summary" aria-label="Order summary">
          <h2>Order Summary</h2>

          <div className="line"><span>Subtotal</span><strong>₹4,198</strong></div>
          <div className="line"><span>Shipping</span><strong>₹0</strong></div>
          <div className="line"><span>Discount</span><strong>−₹200</strong></div>

          <div className="hr"></div>

          <div className="line"><span>Total</span><strong style={{ fontSize: '18px' }}>₹3,998</strong></div>
          <div className="small-muted">Inclusive of taxes where applicable.</div>

          <div className="cta">
            <a className="btn btn-primary" href="checkout.html">Proceed to checkout</a>
            <button className="btn" type="button">Apply coupon</button>
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

export default Cart;