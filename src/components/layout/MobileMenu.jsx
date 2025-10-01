// FILE: src/components/MobileMenu.jsx
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react"; // close icon
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "nav.home", path: "/" },
  { label: "nav.about", path: "/about" },
  { label: "nav.departments", path: "/departments" },
  { label: "nav.services", path: "/services" },
  { label: "nav.news", path: "/news" },
  { label: "nav.events", path: "/events" },
  { label: "nav.rti", path: "/rti" },
  { label: "nav.officers", path: "/officers" },
  { label: "nav.contact", path: "/contact" },
];

function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed top-0 right-0 w-72 sm:w-80 h-full bg-white shadow-xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                {t("aria.mainNavigation")}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto p-5">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-md text-base font-medium transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={onClose}
                      >
                        {t(item.label)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA Buttons */}
            <div className="border-t border-gray-200 p-5 space-y-3">
              <Link
                to="/grievance"
                onClick={onClose}
                className="block w-full text-center px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm"
              >
                {t("cta.grievance")}
              </Link>
              <Link
                to="/services"
                onClick={onClose}
                className="block w-full text-center px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md shadow-sm"
              >
                {t("cta.services")}
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
