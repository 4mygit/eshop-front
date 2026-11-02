 import { Link } from "react-router-dom";

 <Link to='/reg'>Registration</Link>

function Login(){

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
        <div class="nav-actions">
          <a class="icon-btn" href="products.html">Products</a>
          <a class="btn btn-primary" href="register.html">Create account</a>
        </div>
      </nav>
    </div>
  </header>

  <main id="main">
    <div class="container auth-wrap">
      <section class="card auth" aria-label="Login form">
        <h1>Welcome back</h1>
        <p>Login to track orders, save cart, and checkout faster.</p>

        <form class="form" action="products.html" method="get">
          <div class="form-row">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />
          </div>

          <div class="form-row">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" required />
            <div class="helper">Must be at least 8 characters.</div>
          </div>

          <div class="checkbox">
            <input id="remember" type="checkbox" />
            <label for="remember">Remember me on this device</label>
          </div>

          <button class="btn btn-primary" type="submit">Login</button>

          <div class="auth-footer">
            <a class="btn-link" href="#">Forgot password?</a>
            <span>New here?  <Link className="btn-link" to='/reg'>Registration</Link></span>
          </div>
        </form>
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

export default Login;