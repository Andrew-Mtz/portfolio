import { useTranslation } from "../../../i18n/useTranslation";
import "./about-me.css";
import parse from "html-react-parser";

export function AboutMeContent() {
  const { t, tArray } = useTranslation();

  const about = "content.aboutMe";

  return (
    <div className="content-inner about-me">
      <h2>{t(`${about}.title`)}</h2>
      <p>{parse(t(`${about}.desc`))}</p>

      <h3>{t(`${about}.areas`)}</h3>
      <ul>
        {tArray(`${about}.skills`).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{t(`${about}.tech`)}</h3>
      <ul>
        {tArray(`${about}.technologies`).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{t(`${about}.values`)}</h3>
      <ul>
        {tArray(`${about}.valuesList`).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>{t(`${about}.softSkills`)}</h3>
      <ul>
        {tArray(`${about}.softSkillsList`).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
