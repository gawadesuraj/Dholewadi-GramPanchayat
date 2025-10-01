import { FaPhone, FaEnvelope, FaClock, FaGlobe } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

// --- Step 1: Import your images here ---
// Make sure the path and file names are correct.
import digitalIndiaLogo from "/MY DIRECTORY/Sample-Project/Dholewadi-GramPanchayat/src/assets/digital-india.png"; // Your first image
import anotherLogo from "/MY DIRECTORY/Sample-Project/Dholewadi-GramPanchayat/src/assets/satyamev-jayate.png"; // Your second image (update the path if needed)

function TopBar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    if (!i18n || typeof i18n.changeLanguage !== "function") {
      console.error("i18n instance or changeLanguage function not found");
      return;
    }
    const newLang = i18n.language === "en" ? "mr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 border-b border-gray-200">
      <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="hidden md:flex items-center space-x-6 text-gray-700">
              <a
                href={`tel:${t("topbar.phone").replace(/[^\d]/g, "")}`}
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                aria-label={t("aria.callOffice")}
              >
                <FaPhone className="w-3 h-3" />
                <span className="font-medium">{t("topbar.phone")}</span>
              </a>
              <a
                href={`mailto:${t("topbar.email")}`}
                className="flex items-center space-x-2 hover:text-primary transition-colors"
                aria-label={t("aria.sendEmail")}
              >
                <FaEnvelope className="w-3 h-3" />
                <span>{t("topbar.email")}</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-600">
                <FaClock className="w-3 h-3" />
                <span>{t("topbar.timing")}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 ml-auto">
              {/* --- Step 2: Added the images here --- */}
              <img
                src={anotherLogo}
                alt="satyamev-jayate"
                className="h-8" // You can adjust the height (h-6, h-8, etc.)
              />
              <img
                src={digitalIndiaLogo}
                alt="Digital India Logo"
                className="h-8" // You can adjust the height
              />

              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-white border border-gray-300 hover:border-primary hover:bg-gray-50 transition-all text-gray-700 font-medium"
                aria-label={`Switch to ${
                  i18n.language === "en" ? "Marathi" : "English"
                }`}
              >
                <FaGlobe className="w-3.5 h-3.5" />
                <span className="text-xs uppercase">
                  {t("topbar.language")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;