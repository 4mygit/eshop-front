import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from './Modal'; // Import the Modal component
import Test from './Test'; // Import the Modal component

function Registration() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: ''
  })
const [isRegistered, setisRegistered] = useState(false)
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type == 'text') {
      if (name == 'fname') {
        setFormData(prev => ({ ...prev, fname: value }))
      }
    }

    if (type == 'text') {
      if (name == 'lname') {
        setFormData(prev => ({ ...prev, lname: value }))
      }
    }

    if (type == 'email') {
      if (name == 'email') {
        setFormData(prev => ({ ...prev, email: value }))
      }
    }

    if (type == 'password') {
      if (name == 'password') {
        setFormData(prev => ({ ...prev, password: value }))
      }
    }
    //alert(formData);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData))
    toggleModal();
   // navigate('/login')

  }

  const [isModalOpen, setIsModalOpen] = useState(false); // false is used for modal will not be displayed once page is loaded first time.State to control visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen); // ! means if false then it will be true or the reverse. Function to toggle the state


  return (
    <>
      {isRegistered ? (
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {/* Content passed as children to the Modal component */}
        <h2>User Created Successfully!</h2>
        <p>Go to login page to!</p>
        <button onClick={toggleModal}>Close Modal</button>
      </Modal>
      ) : (
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {/* Content passed as children to the Modal component */}
        <h2>Registration failed!</h2>
        <p>Try again!</p>
        <button onClick={toggleModal}>Close Modal</button>
      </Modal>

      )}

      <a className="skip-link" href="#main">Skip to content</a>

      <header className="header">
        <div className="container">
          <nav className="nav" aria-label="Primary">
            <a className="brand" href="products.html">
              <span className="brand-badge" aria-hidden="true"></span>
              <span>Shop UI</span>
            </a>
            <div className="nav-actions">
              <a className="icon-btn" href="login.html">Login</a>
              <a className="icon-btn" href="products.html">Products</a>
            </div>
          </nav>
        </div>
      </header>

      <main id="main">
        <div className="container auth-wrap">
          <section className="card auth" aria-label="Registration form">
            <h1>Create your account</h1>
            <p>It takes less than a minute. Start shopping instantly.</p>

            <form onSubmit={handleSubmit} >
              <div className="form-split">
                <div className="form-row">
                  <label for="firstName">First name</label>
                  <input name="fname" type="text" placeholder="Anupam" required onChange={handleInputChange} />
                </div>
                <div className="form-row">
                  <label for="lastName">Last name</label>
                  <input name="lname" type="text" placeholder="Dasgupta"  onChange={handleInputChange}/>
                </div>
              </div>

              <div className="form-row">
                <label for="email">Email</label>
                <input name="email" type="email" placeholder="you@example.com" required onChange={handleInputChange} />
                <div className="helper">We’ll never share your email.</div>
              </div>

              <div className="form-row">
                <label for="password">Password</label>
                <input name="password" type="password" placeholder="Create a strong password" required onChange={handleInputChange} />
              </div>

              <div className="form-row">
                <label for="confirm">Confirm password</label>
                <input id="confirm" type="password" placeholder="Re-enter password" required onChange={handleInputChange}/>
              </div>

              <div className="checkbox">
                <input name="marketing" type="checkbox" onChange={handleInputChange}/>
                <label for="marketing">Send me updates and offers (optional).</label>
              </div>

              <div className="checkbox">
                <input name="terms" type="checkbox" required onChange={handleInputChange} />
                <label for="terms">I agree to the Terms & Conditions and Privacy Policy.</label>
              </div>

              <button className="btn btn-primary">Create account</button>
              <div className="auth-footer">
                <span>Already have an account? <Link className="btn-link" to="/">Login</Link></span>
              </div>
            </form>
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

export default Registration;