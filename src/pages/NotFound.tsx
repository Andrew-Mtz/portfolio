import { Link } from "react-router";
import { useTranslation } from "../i18n/useTranslation";
import { TargetMissIcon } from "../components/TargetMissIcon";
import JoystickPhysics from "../components/joystick/JoystickPhysics";
import "../styles/not-found.css";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      {/* Fondo animado con joysticks físicos */}
      <JoystickPhysics />

      {/* Contenido central */}
      <div className="not-found-content">
        <TargetMissIcon />
        <h1 className="not-found-title">{t("notFound.title")}</h1>
        <Link to="/" className="not-found-button">
          {t("notFound.button")}
        </Link>
      </div>
    </div>
  );
}
