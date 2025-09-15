import { useTranslation } from "../../../i18n/useTranslation";
import parse from "html-react-parser";
import "./readme.css";

export function ReadmeContent() {
  const { t, tArray } = useTranslation();

  const readme = "content.readme";
  return (
    <div className="content-inner readme">
      <h2>{t(`${readme}.title`)}</h2>

      <p>{t(`${readme}.intro`)}</p>

      <h3>{t(`${readme}.statusTitle`)}</h3>
      <ul>
        {tArray(`${readme}.status`).map((item, i) => (
          <li key={i}>{parse(item)}</li>
        ))}
      </ul>

      <h3>{t(`${readme}.goalTitle`)}</h3>
      <p>{t(`${readme}.goalIntro`)}</p>
      <ul>
        {tArray(`${readme}.goals`).map((item, i) => (
          <li key={i}>{parse(item)}</li>
        ))}
      </ul>

      <h3>{t(`${readme}.nextTitle`)}</h3>
      <ul>
        {tArray(`${readme}.next`).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>{t(`${readme}.outro`)}</p>
    </div>
  );
}
