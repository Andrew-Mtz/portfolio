import { LuArrowLeft } from "react-icons/lu";
import "./breadcrumb.css";

interface BreadcrumbProps {
  currentPath: string[];
  setCurrentPath: (path: string[]) => void;
  t: (key: string) => string;
}

export function Breadcrumb({
  currentPath,
  setCurrentPath,
  t,
}: BreadcrumbProps) {
  const handleBreadcrumbClick = (index: number) => {
    setCurrentPath(currentPath.slice(0, index + 1));
  };

  const handleGoBack = () => {
    setCurrentPath(currentPath.slice(0, -1));
  };

  return (
    <div className="breadcrumb">
      <button
        onClick={handleGoBack}
        title={t("navigation.toolbar.back")}
        className="breadcrumb-back"
        disabled={currentPath.length == 0}
      >
        <LuArrowLeft size={"1.25rem"} />
      </button>
      <span>/</span>
      {currentPath.map((part, index) => (
        <span
          key={index}
          className="breadcrumb-part"
          onClick={() => handleBreadcrumbClick(index)}
        >
          {part}
          {index < currentPath.length - 1 && <span> / </span>}
        </span>
      ))}
    </div>
  );
}
