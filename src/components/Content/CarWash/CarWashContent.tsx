import { useTranslation } from "../../../i18n/useTranslation";
import "./car-wash.css";

export function CarWashContent() {
  const { t, tArray } = useTranslation();
  const base = "content.carwash";

  return (
    <div className="content-inner carwash">
      <h2>{t(`${base}.title`)}</h2>
      <p>{t(`${base}.description`)}</p>

      <h3>{t(`${base}.featuresTitle`)}</h3>
      <ul>
        {tArray(`${base}.features`).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{t(`${base}.techTitle`)}</h3>
      <ul>
        {tArray(`${base}.technologies`).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="links">
        <a
          href="https://carflash.autos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(`${base}.liveDemo`)}
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Andrew-Mtz/carwash-astro"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(`${base}.sourceCode`)}
        </a>
      </p>
    </div>
  );
}
