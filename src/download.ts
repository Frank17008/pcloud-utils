/**
 * 创建a标签下载
 * @param {string} url 下载地址
 * @param {string} title 下载标题
 * @param {string} target 窗口位置
 */
export function tagADownload({ url, title = "", target = "_blank" }: { url: string; title?: string; target?: "_blank" | "" }) {
    const tagA = document.createElement("a")
    tagA.setAttribute("href", url)
    tagA.setAttribute("download", title)
    tagA.setAttribute("target", target)
    document.body.appendChild(tagA)
    tagA.click()
    document.body.removeChild(tagA)
}

// 文件类型
enum FileType {
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
    mp4 = "video/mp4",
}

// 下载文件
type FILETYPE = keyof typeof FileType
export const downloadBlobFile = (res: any, name: string, type?: FILETYPE) => {
    const blob = type ? new Blob([res], { type: FileType[type] }) : new Blob([res])
    if ("download" in document.createElement("a")) {
        const tagA = document.createElement("a")
        tagA.download = name
        tagA.style.display = "none"
        tagA.href = URL.createObjectURL(blob)
        document.body.appendChild(tagA)
        tagA.click()
        URL.revokeObjectURL(tagA.href)
        document.body.removeChild(tagA)
    }
}

// 预览pdf
export const previewPdf = (res: any) => {
    const blob = new Blob([res], { type: "application/pdf" })
    if ("download" in document.createElement("a")) {
        const tagA = document.createElement("a")
        tagA.style.display = "none"
        tagA.href = `${URL.createObjectURL(blob)}#scrollbars=0&toolbar=0&statusbar=0`
        tagA.target = "_blank"
        document.body.appendChild(tagA)
        tagA.click()
        URL.revokeObjectURL(tagA.href)
        document.body.removeChild(tagA)
    }
}

// 预览图片
export const previewImage = (file: File) => {
    if ("download" in document.createElement("a")) {
        const tagA = document.createElement("a")
        tagA.style.display = "none"
        tagA.href = URL.createObjectURL(file)
        tagA.target = "_blank"
        document.body.appendChild(tagA)
        tagA.click()
        URL.revokeObjectURL(tagA.href)
        document.body.removeChild(tagA)
    }
}

export default {
    previewImage,
    previewPdf,
    downloadBlobFile,
    tagADownload,
}
