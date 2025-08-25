import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">
          &copy; 2025 Grocery Store. All rights reserved.
        </p>
        <div className="d-flex gap-3">
          <a href="/" className="text-white text-decoration-none">
            Home
          </a>
          <a href="/about" className="text-white text-decoration-none">
            About
          </a>
          <a href="/add-product" className="text-white text-decoration-none">
            Add Product
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
