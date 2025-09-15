import { Link } from "react-router";
import { useTranslation } from "../i18n/useTranslation";
import { TargetMissIcon } from "../components/TargetMissIcon";
import JoystickPhysics from "../components/joystick/JoystickPhysics";
import "../styles/not-found.css";

export default function Soon() {
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      {/* Fondo animado con joysticks físicos */}
      <JoystickPhysics />

      {/* Contenido central */}
      <div className="not-found-content">
        <TargetMissIcon />
        <h1 className="not-found-title">{t("comingSoon.title")}</h1>
        <p className="not-found-message">{t("comingSoon.description")}</p>
        <Link to="/" className="not-found-button">
          {t("comingSoon.button")}
        </Link>
      </div>
    </div>
  );
}
