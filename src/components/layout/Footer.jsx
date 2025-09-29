import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-400 text-3xl">〰️</span>
          </div>
          <p className="mt-4 text-gray-300 max-w-lg text-sm">
            Shirala taluka is known for its Sahyadri mountain ranges and natural
            beauty. It is famous for its rivers Warna and Morana making the
            southern region fertile.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6">
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaFacebook size={22} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaInstagram size={22} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaXTwitter size={22} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaGithub size={22} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition">
            <FaYoutube size={22} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/rti"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  RTI
                </Link>
              </li>
              <li>
                <Link
                  to="/officers"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Officers
                </Link>
              </li>
            </ul>
          </div>

          {/* Government */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Government
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/departments"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/grievance"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Grievance
                </Link>
              </li>
              <li>
                <a
                  href="https://maharashtra.gov.in"
                  className="text-gray-300 hover:text-white text-sm transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maharashtra Govt
                </a>
              </li>
              <li>
                <a
                  href="https://sangli.nic.in"
                  className="text-gray-300 hover:text-white text-sm transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sangli District
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li>Ta. Shirala, Dist. Sangli</li>
              <li>Maharashtra 415 408</li>
              <li>Phone: (02345) 272128</li>
              <li>Email: bdoshirala@gmail.com</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-gray-300 hover:text-white text-sm transition"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-300 text-center">
          © {currentYear} Panchayat Samiti Shirala. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
