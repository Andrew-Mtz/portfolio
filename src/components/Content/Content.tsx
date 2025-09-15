import { useNavigation } from "../../contexts/useNavigation";
import { fileSystem } from "../../data/fileSystem";
import { useTranslation } from "../../i18n/useTranslation";
import { FileSystemItem } from "../../types/FileSystemItem";
import "./content.css";

import { AboutMeContent } from "./AboutMe/AboutMeContent";
import { ExperienceContent } from "./Experience/ExperienceContent";
import { ToolsContent } from "./Tools/ToolsContent";
import { ReadmeContent } from "./Readme/ReadmeContent";
import { TicTacToeContent } from "./TicTacToe/TicTacToeContent";
import { CarWashContent } from "./CarWash/CarWashContent";

export function Content() {
  const { t } = useTranslation();
  const { selectedItem } = useNavigation();

  const findFile = (): FileSystemItem | undefined => {
    const traverse = (items: FileSystemItem[]): FileSystemItem | undefined => {
      for (const item of items) {
        if (item.name === selectedItem) return item;
        if (item.type === "folder") {
          const result = traverse(item.children);
          if (result) return result;
        }
      }
      return undefined;
    };
    return traverse(fileSystem);
  };

  const file = selectedItem ? findFile() : null;

  if (!file) {
    return (
      <section className="content">
        <p className="content-empty">{t("content.selectFile")}</p>
      </section>
    );
  }

  // Renders for our fake PDFs
  switch (file.name) {
    case "about_me.pdf":
      return (
        <section className="content">
          <AboutMeContent />
        </section>
      );
    case "experience.pdf":
      return (
        <section className="content">
          <ExperienceContent />
        </section>
      );
    case "tools.pdf":
      return (
        <section className="content">
          <ToolsContent />
        </section>
      );
    case "TicTacToe":
      return (
        <section className="content">
          <TicTacToeContent />
        </section>
      );
    case "CarWash":
      return (
        <section className="content">
          <CarWashContent />
        </section>
      );
    case "Read.me":
      return (
        <section className="content">
          <ReadmeContent />
        </section>
      );
    default:
      // fallback genérico
      return (
        <section className="content">
          <div className="content-inner">
            <p>No preview available for {file.name}</p>
          </div>
        </section>
      );
  }
}
