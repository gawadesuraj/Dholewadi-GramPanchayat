// FILE: src/components/Navigation.jsx
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navItems = [
  { label: "contact", path: "/contact" },
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "departments", path: "/departments" },
  { label: "services", path: "/services" },
  { label: "news", path: "/news" },
  { label: "events", path: "/events" },
  { label: "rti", path: "/rti" },
  { label: "officers", path: "/officers" },
];

function Navigation() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <nav
      className="hidden lg:flex items-center justify-center flex-1 mx-8"
      aria-label={t("aria.mainNavigation")}
    >
      <ul className="flex items-center space-x-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`relative block px-4 py-2 text-sm font-semibold transition-all duration-200 border-b-2 ${
                  isActive
                    ? "text-primary border-primary bg-primary/5"
                    : "text-gray-700 border-transparent hover:text-primary hover:border-primary/50 hover:bg-gray-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {t(item.label)}

                {/* Active Indicator */}
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                    aria-hidden="true"
                  ></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
