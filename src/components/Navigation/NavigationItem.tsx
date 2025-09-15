import { FileSystemItem } from "../../types/FileSystemItem";
import { useNavigation } from "../../contexts/useNavigation";
import "./navigation.css";
import { LuFileText, LuFolderClosed } from "react-icons/lu";

interface NavigationItemProps {
  item: FileSystemItem;
  level?: number;
  selected: string;
  setSelected: (item: string) => void;
}

export function NavigationItem({
  item,
  level,
  selected,
  setSelected,
}: NavigationItemProps) {
  const { view, currentPath, setCurrentPath, setSelectedItem } =
    useNavigation();

  const handleDoubleClick = () => {
    if (item.type === "folder") {
      if (view === "columns" && typeof level === "number") {
        // Recortar el path hasta este nivel
        const newPath = currentPath.slice(0, level);
        setCurrentPath([...newPath, item.name]);
      } else {
        // Grid o List
        setCurrentPath([...currentPath, item.name]);
      }
    } else if (item.type === "file") {
      setSelectedItem(item.name);
    }
  };

  return (
    <div
      className={`navigation-item ${item.type} ${
        selected === item.name ? "selected" : ""
      }`}
      onClick={() => setSelected(item.name)}
      onDoubleClick={handleDoubleClick}
    >
      <div className="navigation-icon">
        {item.type === "folder" ? <LuFolderClosed /> : <LuFileText />}
      </div>
      <div className="navigation-name">{item.name}</div>
    </div>
  );
}
