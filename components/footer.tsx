"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            We provide high-quality products and services to meet your needs. Our mission is to ensure customer satisfaction through innovation and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-sm text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="text-sm text-gray-400 hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-400">123 Main Street, Lahore, Pakistan</p>
          <p className="text-sm text-gray-400 mt-2">Email: support@example.com</p>
          <p className="text-sm text-gray-400">Phone: +92-123-456-7890</p>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
