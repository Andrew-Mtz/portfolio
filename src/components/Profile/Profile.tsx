import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n/useTranslation";
import "./profile.css";
import { LuClock, LuMail } from "react-icons/lu";

interface ProfileProps {
  onContactClick: () => void;
}

export function Profile({ onContactClick }: ProfileProps) {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState({
    day: "",
    time: "",
    timeZoneName: "",
  });
  const locale = t("profile.locale");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const optionsDay: Intl.DateTimeFormatOptions = {
        weekday: "long",
      };
      const optionsTime: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Montevideo",
      };

      const day = now
        .toLocaleDateString(locale, optionsDay)
        .replace(/^\w/, c => c.toUpperCase());

      const time = now.toLocaleTimeString("es-UY", optionsTime);

      const timeZoneName =
        now
          .toLocaleTimeString("en-US", {
            timeZoneName: "short",
            timeZone: "America/Montevideo",
          })
          .split(" ")
          .pop() ?? "UTC-3";

      setCurrentTime({ day, time, timeZoneName });
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [locale]);

  return (
    <section className="profile-v2">
      {/* Header */}
      <div className="profile-header">
        <img
          src="/profile.jpeg"
          alt="Foto de perfil"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>Andrew Martinez</h2>
          <p>{t("profile.available")} 9:00 AM — 8:00 PM EST</p>
        </div>
      </div>

      <div className="profile-widgets">
        {/* Cards */}
        <div className="profile-cards">
          <div className="profile-card">
            <LuClock />
            <p>{currentTime.day}</p>
            <strong>
              {currentTime.time} {currentTime.timeZoneName}
            </strong>
          </div>
          <div
            className="profile-card clickable"
            onClick={onContactClick}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === "Enter" && onContactClick()}
          >
            <LuMail />
            <p>{t("profile.sendMessage")}</p>
            <strong className="profile-contact-text">
              {t("profile.hello")}
            </strong>
          </div>
        </div>

        {/* Placeholder / Proximamente */}
        <div className="profile-placeholder">
          <p>{t("profile.soon")}</p>
        </div>
      </div>

      <div className="profile-details">
        {/* Bio */}
        <div className="profile-bio">
          <p>{t("profile.mini-desc")}</p>
        </div>

        {/* Localización */}
        <div className="profile-location">
          <p>{t("profile.location")}</p>
        </div>
      </div>
    </section>
  );
}
