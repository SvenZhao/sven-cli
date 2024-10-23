import { basename } from "path";

export const getFilename = (file: { path: string; }) => {
  const filename = basename(file.path);
};
