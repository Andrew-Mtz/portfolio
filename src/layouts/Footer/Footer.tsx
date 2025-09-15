import { useLocation, useNavigate } from "react-router";
import { useLanguage } from "../../contexts/useLanguage";
import { useTheme } from "../../contexts/useTheme";
import { useTranslation } from "../../i18n/useTranslation";
import "./footer.css";

export function Footer() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const layoutOptions = [
    { label: `🖥️ ${t("footer.view.ui")}`, path: "/" },
    { label: `📄 ${t("footer.view.resume")}`, path: "/resume" },
    { label: `✍️ ${t("footer.view.simplified")}`, path: "/simplified" },
  ];

  return (
    <footer className="footer-section">
      <span className="footer-label">{t("footer.createdBy")}</span>
      <div className="footer-controls">
        <select
          value={language}
          onChange={e => setLanguage(e.target.value as "es" | "en")}
          title="Seleccionar idioma"
        >
          <option value="es">🌐 {t("footer.language.es")}</option>
          <option value="en">🌐 {t("footer.language.en")}</option>
        </select>

        <select
          value={theme}
          onChange={e =>
            setTheme(e.target.value as "light" | "dark" | "custom")
          }
          title="Tema visual"
        >
          <option value="light">☀️ {t("footer.theme.light")}</option>
          <option value="dark">🌙 {t("footer.theme.dark")}</option>
          <option value="custom">🎨 {t("footer.theme.custom")}</option>
        </select>

        <select
          value={location.pathname}
          onChange={e => navigate(e.target.value)}
          title="Seleccionar vista"
        >
          {layoutOptions.map(option => (
            <option key={option.path} value={option.path}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </footer>
  );
}
