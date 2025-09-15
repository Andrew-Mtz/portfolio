export type FileSystemItem = FileItem | FolderItem;

export interface FileItem {
  type: "file";
  name: string;
}

export interface FolderItem {
  type: "folder";
  name: string;
  children: FileSystemItem[];
}
