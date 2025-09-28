import React, { useState, useEffect } from "react";

// --- Mocking react-router-dom for standalone functionality ---
// In a real app, you would use `useLocation` and `Link` from 'react-router-dom'
const useLocation = () => {
  const [pathname, setPathname] = useState(window.location.pathname || "/");

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      window.dispatchEvent(new Event("popstate"));
    };
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    if (path !== pathname) {
      window.history.pushState(null, "", path);
    }
  };

  return { pathname, navigate };
};

const Link = ({ to, onClick, children, ...props }) => {
  const { pathname, navigate } = useLocation();
  const handleClick = (e) => {
    e.preventDefault();
    if (to !== pathname) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
// --- End of mock ---

// Navigation Data
const navItems = [
  { label: "Home", path: "/", icon: "🏠" },
  { label: "About", path: "/about", icon: "📋" },
  { label: "Departments", path: "/departments", icon: "🏢" },
  { label: "Services", path: "/services", icon: "⚙️" },
  { label: "News", path: "/news", icon: "📰" },
  { label: "Events", path: "/events", icon: "📅" },
  { label: "RTI", path: "/rti", icon: "📄" },
  { label: "Officers", path: "/officers", icon: "👥" },
  { label: "Contact", path: "/contact", icon: "📞" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header style change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Top Government Bar */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-2 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Government of Maharashtra</span>
              <span className="hidden md:inline text-gray-400">•</span>
              <span className="hidden md:inline text-gray-300">
                Sangli District
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="hover:text-yellow-300 transition-colors duration-200">
                हिंदी
              </button>
              <span className="text-gray-500">|</span>
              <button className="hover:text-yellow-300 transition-colors duration-200">
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link
              to="/"
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">PS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg">
                  Panchayat Samiti Shirala
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  पंचायत समिती शिराळा
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <nav className="flex items-center space-x-1 bg-gray-100/80 rounded-full px-4 py-2 shadow-inner">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                          : "text-gray-600 hover:text-blue-600 hover:bg-white"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <Link
                to="/grievance"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Grievance
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      mobileMenuOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
                  ></span>
                  <span
                    className={`bg-gray-800 block transition-all duration-150 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                      mobileMenuOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Slide-out) */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className={`fixed top-0 left-0 h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-500 to-indigo-600">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PS</span>
                </div>
                <div>
                  <h2 className="text-white font-semibold text-lg">Menu</h2>
                  <p className="text-white/80 text-sm">पंचायत समिती शिराळा</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="p-4 space-y-2 h-full overflow-y-auto pb-24">
              {[
                ...navItems,
                { label: "Grievance", path: "/grievance", icon: "📝" },
              ].map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-4 px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    }`}
                  >
                    <span className="text-2xl w-8 text-center">
                      {item.icon}
                    </span>
                    <span className="text-lg">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-sm"></div>
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Need Help?</p>
                <a
                  href="tel:(02345)272128"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  (02345) 272128
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
