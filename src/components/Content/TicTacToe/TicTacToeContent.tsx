import { useTranslation } from "../../../i18n/useTranslation";
import "./tic-tac-toe.css";

export function TicTacToeContent() {
  const { t, tArray } = useTranslation();
  const base = "content.tictactoe";

  return (
    <div className="content-inner tictactoe">
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
          href="https://andrew-mtz.github.io/TicTacToe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(`${base}.liveDemo`)}
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Andrew-Mtz/TicTacToe"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t(`${base}.sourceCode`)}
        </a>
      </p>
    </div>
  );
}
