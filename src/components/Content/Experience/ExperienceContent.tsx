import { useTranslation } from "../../../i18n/useTranslation";
import type { ExperienceContent as ExperienceContentType } from "../../../i18n/types";
import parse from "html-react-parser";
import "./experience.css";

export function ExperienceContent() {
  const { t, tObject } = useTranslation();
  const experience = t("content.experience");
  const jobs = tObject(
    "content.experience.jobs"
  ) as ExperienceContentType["jobs"];

  return (
    <div className="content-inner experience">
      <h2>{t(`${experience}.title`)}</h2>

      {jobs.map((job, i) => (
        <section className="job" key={i}>
          <h3>
            {job.company} <span className="job-date">{job.date}</span>
          </h3>
          <ul>
            {job.items.map((item, j) => (
              <li key={j}>{parse(item)}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
