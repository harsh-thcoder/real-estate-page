import "../css/navbar.css";
// import logo from "../assets/logo.png"; // replace with your actual logo

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* <img src={logo} alt="Invest Logo" /> */}
        </div>
        <nav>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#overview">Investment Overview</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
