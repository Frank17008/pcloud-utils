/**
 * 创建a标签下载
 * @param options - 参数对象
 * @param options.url - 下载地址
 * @param options.title - 下载标题
 * @param options.target - 窗口位置
 */
export declare function tagADownload(options: {
    url: string;
    title: string;
    target?: string;
}): void;
declare enum FileType {
    excel = "application/vnd.ms-excel",
    xls = "application/vnd.ms-excel",
    xlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    pdf = "application/pdf",
    doc = "application/msword",
    docx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    zip = "application/zip",
    rar = "application/rar",
    png = "image/png",
    webp = "image/webp",
    bmp = "image/bmp",
    jpeg = "image/jpeg",
    gif = "image/gif",
    tiff = "image/tiff",
    svg = "image/svg+xml",
    mp4 = "video/mp4"
}
type FILETYPE = keyof typeof FileType;
/**
 * 下载文件流
 * @param res - 文件流
 * @param name - 文件名称
 * @param type - 文件类型
 */
export declare const downloadBlobFile: (res: Blob, name: string, type?: FILETYPE) => void;
/**
 * 预览PDF文件
 * @param res - pdf文件流
 */
export declare const previewPdf: (res: Blob) => void;
/**
 * 预览图片
 * @param res - 图片文件流
 */
export declare const previewImage: (file: Blob) => void;
/**
 * 格式化显示文件大小
 * @param fileSize 文件大小值
 * @returns 格式化后的文件大小值
 */
export declare const convertSize: (fileSize: string | null) => string;
declare const _default: {
    convertSize: (fileSize: string | null) => string;
    previewImage: (file: Blob) => void;
    previewPdf: (res: Blob) => void;
    downloadBlobFile: (res: Blob, name: string, type?: "excel" | "xls" | "xlsx" | "pdf" | "doc" | "docx" | "zip" | "rar" | "png" | "webp" | "bmp" | "jpeg" | "gif" | "tiff" | "svg" | "mp4" | undefined) => void;
    tagADownload: typeof tagADownload;
};
export default _default;
