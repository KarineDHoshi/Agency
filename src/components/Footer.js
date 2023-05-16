import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const savedAddress = localStorage.getItem('address');
    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, []);

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('address', address);
    setAddress('');
  };

  return (
    <footer className="footer bg-light py-4 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Subscribe to our Newsletter</h4>
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={address}
                  onChange={handleChangeAddress}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
