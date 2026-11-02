function Success(){

    return (
        <>
        
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="header">
    <div class="container">
      <nav class="nav" aria-label="Primary">
        <a class="brand" href="products.html">
          <span class="brand-badge" aria-hidden="true"></span>
          <span>Shop UI</span>
        </a>
      </nav>
    </div>
  </header>

  <main id="main">
    <div class="container auth-wrap">
      <section class="card card-pad" aria-label="Order success">
        <h1 style={{ margin: '0 0 6px' }}>✅ Order placed successfully</h1>
        <p  style={{ 
    margin: 0, 
    color: 'var(--muted)' 
  }}>Thank you! Your order ID is <b>#SG-24891</b>. We’ll email your invoice shortly.</p>

        <div class="hr"></div>

        <div style={{ 
    display: 'flex', 
    gap: '10px', 
    flexWrap: 'wrap' 
  }}>
          <a class="btn btn-primary" href="products.html">Continue shopping</a>
          <a class="btn" href="cart.html">View cart</a>
        </div>
      </section>

      <footer class="footer">
        <div class="row container">
          <span>© 2026 Shop UI. All rights reserved.</span>
          <span>Privacy • Terms • Support</span>
        </div>
      </footer>
    </div>
  </main>

        
        </>
    )
}

export default Success;