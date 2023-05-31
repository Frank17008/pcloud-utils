/**
 * 创建a标签下载
 * @param options - 参数对象
 * @param options.url - 下载地址
 * @param options.title - 下载标题
 * @param options.target - 窗口位置
 */
export function tagADownload(options: { url: string; title: string; target?: string }) {
    const { url = "", title = "", target = "_blank" } = options
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

type FILETYPE = keyof typeof FileType

/**
 * 下载文件流
 * @param res - 文件流
 * @param name - 文件名称
 * @param type - 文件类型
 */
export const downloadBlobFile = (res: Blob, name: string, type?: FILETYPE) => {
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

/**
 * 预览PDF文件
 * @param res - pdf文件流
 */
export const previewPdf = (res: Blob) => {
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

/**
 * 预览图片
 * @param res - 图片文件流
 */
export const previewImage = (file: Blob) => {
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

/**
 * 格式化显示文件大小
 * @param fileSize 文件大小值
 * @returns 格式化后的文件大小值
 */
export const convertSize = (fileSize: string | null) => {
    if (fileSize === null || fileSize === "") return "0Kb"
    const unitArr = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    let index = 0
    const originSize = parseFloat(fileSize)
    index = Math.floor(Math.log(originSize) / Math.log(1024))
    const size = originSize / Math.pow(1024, index)
    const sizeString = size.toFixed(2)
    return sizeString + unitArr[index]
}
