import { useEffect, useRef, useState } from "react";
import { useNavigation } from "../../contexts/useNavigation";
import { fileSystem } from "../../data/fileSystem";
import { FileSystemItem, FolderItem } from "../../types/FileSystemItem";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";
import { NavigationItem } from "./NavigationItem";
import { useTranslation } from "../../i18n/useTranslation";
import "./navigation.css";
import { LuLayoutGrid, LuColumns3, LuList } from "react-icons/lu";

export function Navigation() {
  const { t } = useTranslation();
  const { view, setView, currentPath, setCurrentPath } = useNavigation();
  const [selectedPath, setSelectedPath] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (view === "columns" && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  }, [currentPath, view]);

  const handleViewChange = (newView: typeof view) => {
    setView(newView);
  };

  const renderColumns = () => {
    const columns = [];
    let currentLevel = fileSystem;
    columns.push(currentLevel);

    for (const folderName of currentPath) {
      const found = currentLevel.find(
        item => item.type === "folder" && item.name === folderName
      ) as FolderItem | undefined;

      if (found) {
        currentLevel = found.children;
        columns.push(currentLevel);
      } else {
        break;
      }
    }

    return columns;
  };

  const findCurrentFolder = (): FileSystemItem[] => {
    let current: FileSystemItem[] = fileSystem;

    for (const folder of currentPath) {
      const found = current.find(
        item => item.type === "folder" && item.name === folder
      ) as FolderItem | undefined;

      if (found) {
        current = found.children;
      } else {
        current = [];
      }
    }

    return current;
  };

  const currentItems = findCurrentFolder();

  return (
    <section className="navigation">
      {/* Toolbar + Breadcrumb */}
      <div className="navigation-header">
        <Breadcrumb
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
          t={t}
        />
        <div className="toolbar">
          <button
            onClick={() => handleViewChange("grid")}
            title={t("navigation.toolbar.grid")}
            className={view === "grid" ? "active" : ""}
          >
            <LuLayoutGrid />
          </button>
          <button
            onClick={() => handleViewChange("list")}
            title={t("navigation.toolbar.list")}
            className={view === "list" ? "active" : ""}
          >
            <LuList />
          </button>
          <button
            onClick={() => handleViewChange("columns")}
            title={t("navigation.toolbar.column")}
            className={view === "columns" ? "active" : ""}
          >
            <LuColumns3 />
          </button>
        </div>
      </div>

      {/* Área de carpetas/archivos */}
      <div className={`navigation-body ${view}`} ref={scrollRef}>
        {view === "columns" ? (
          renderColumns().map((items, columnIndex) => (
            <div key={columnIndex} className="navigation-column">
              {items.length === 0 ? (
                <div className="navigation-empty">{t("navigation.empty")}</div>
              ) : (
                items.map((item, index) => (
                  <NavigationItem
                    key={index}
                    item={item}
                    level={columnIndex}
                    selected={selectedPath}
                    setSelected={setSelectedPath}
                  />
                ))
              )}
            </div>
          ))
        ) : currentItems.length === 0 ? (
          <p>{t("navigation.empty")}</p>
        ) : (
          currentItems.map((item, index) => (
            <NavigationItem
              key={index}
              item={item}
              selected={selectedPath}
              setSelected={setSelectedPath}
            />
          ))
        )}
      </div>
    </section>
  );
}
