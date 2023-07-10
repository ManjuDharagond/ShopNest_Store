import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3" style={{minHeight:'8vh', color: 'white', backgroundColor: "#131921" }}>
      <div className='container w-100' style={{maxWidth:'1480px'}}>
              <Link to="/home" className="navbar-brand">ShopNest</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link">Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cart" className="nav-link">Cart</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user" className="nav-link">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/logout" className="nav-link">Logout</Link>
                  </li>
                </ul>
              </div>
      </div>
    </nav>
  );
}

export default Navbar;
