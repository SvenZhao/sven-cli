export const isUrl = (path: string): boolean => {
  const urlPattern = /^(https?:\/\/|ftp:\/\/|file:\/\/|mailto:|data:)/i;
  return urlPattern.test(path);
};
