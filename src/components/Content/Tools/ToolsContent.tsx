import { useTheme } from "../../../contexts/useTheme";
import { useTranslation } from "../../../i18n/useTranslation";
import "./tools.css";
import {
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoPython,
  BiLogoJava,
  BiLogoAws,
  BiLogoGit,
  BiLogoNodejs,
} from "react-icons/bi";

export function ToolsContent() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <div className="content-inner tools">
      <h2>{t("content.tools")}</h2>

      <ul className="tools-list">
        <li>
          <BiLogoReact size={26} color="#61dafb" /> React.js
        </li>
        <li>
          <BiLogoJavascript size={26} color="#efd81c" /> JavaScript
        </li>
        <li>
          <BiLogoTypescript size={26} color="#2f74c0" /> TypeScript
        </li>
        <li>
          <BiLogoNodejs size={26} color="#629c5e" /> Node.js
        </li>
        <li>
          <BiLogoJava size={26} color="#0a6cb0" /> Java (Spring Boot)
        </li>
        <li>
          <BiLogoPython size={26} className="python-icon" /> Python (FastAPI)
        </li>
        <li>
          <BiLogoPostgresql size={26} color="#336791" /> PostgreSQL
        </li>
        <li>
          <BiLogoMongodb size={26} color="#08ee69" /> MongoDB
        </li>
        <li>
          <BiLogoAws
            size={26}
            color="#234e7e"
            className={`aws-icon ${theme.theme === "light" ? "dark" : "light"}`}
          />
          AWS
        </li>
        <li>
          <BiLogoGit size={26} color="#f35530" /> GitHub / GitLab
        </li>
      </ul>
    </div>
  );
}
