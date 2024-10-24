const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
// 判断文件是否为图片
export const isImageFile = (file: string) => imageExtensions.test(file);
