import { FileSystemItem } from "../types/FileSystemItem";

export const fileSystem: FileSystemItem[] = [
  {
    type: "folder",
    name: "Work",
    children: [
      {
        type: "folder",
        name: "About",
        children: [
          { type: "file", name: "about_me.pdf" },
          { type: "file", name: "experience.pdf" },
          { type: "file", name: "tools.pdf" },
        ],
      },
      {
        type: "folder",
        name: "Projects",
        children: [
          { type: "file", name: "TicTacToe" },
          { type: "file", name: "CarWash" },
        ],
      },
      /* {
        type: "folder",
        name: "Images",
        children: [],
      }, */
    ],
  },
  {
    type: "folder",
    name: "Playlists",
    children: [
      {
        type: "file",
        name: "youtube_music_playlists",
      },
    ],
  },
  {
    type: "file",
    name: "Read.me",
  },
];
