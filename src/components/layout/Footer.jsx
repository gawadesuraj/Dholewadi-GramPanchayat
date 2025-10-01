// FILE: src/components/Footer.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-white to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-sm">PS</span>
              </div>
              <div>
                <h2 className="text-white font-bold text-base leading-tight">
                  {t("header.titleMarathi")}
                </h2>
                <p className="text-gray-400 text-xs">{t("header.district")}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {t("footer.about")}
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t("aria.visitFacebook")}
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t("aria.visitInstagram")}
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t("aria.visitTwitter")}
              >
                ft
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={t("aria.visitYoutube")}
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-3 border-primary pl-3">
              {t("footer.quickLinks")}
            </h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/services"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("nav.events")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rti"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("footer.rtiInfo")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/officers"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("footer.officersDirectory")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/grievance"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("footer.grievancePortal")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-3 border-primary pl-3">
              {t("footer.government")}
            </h3>
            <nav aria-label="Government links">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/departments"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("nav.departments")}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://india.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("footer.indiaPortal")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://maharashtra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("footer.maharashtraGovt")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://sangli.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    → {t("footer.sangliDistrict")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-3 border-primary pl-3">
              {t("footer.contact")}
            </h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt
                  className="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <p>{t("footer.address")}</p>
              </div>

              <div className="flex items-center space-x-3">
                <FaPhone
                  className="w-4 h-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${t("footer.phone").replace(/[^\d]/g, "")}`}
                  className="hover:text-white transition-colors"
                  aria-label={t("aria.callOffice")}
                >
                  {t("footer.phone")}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <FaEnvelope
                  className="w-4 h-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="hover:text-white transition-colors break-all"
                  aria-label={t("aria.sendEmail")}
                >
                  {t("footer.email")}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <FaClock
                  className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <p>
                  {t("footer.timing")}
                  <br />
                  <span className="text-xs text-gray-500">
                    {t("footer.timingNote")}
                  </span>
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} {t("footer.copyright")}
            </p>

            {/* Legal Links */}
            <nav aria-label="Legal links">
              <ul className="flex items-center space-x-6 text-sm">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    {t("footer.termsOfUse")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accessibility"
                    className="hover:text-white transition-colors"
                  >
                    {t("footer.accessibility")}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Last Updated */}
            <p className="text-xs text-gray-500">
              {t("footer.lastUpdated")}: October 01, 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
