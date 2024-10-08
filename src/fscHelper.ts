/**
 * 浏览器全屏
 * @param element dom元素选择器
 */
export function fullscreen(element: Element) {
    element.requestFullscreen()
}

/**
 * 退出浏览器全屏模式
 * @example
 * ```ts
 * fscHelper.exitFullscreen();
 * ```
 */
export function exitFullscreen() {
    if (!isFullscreen()) return
    document.exitFullscreen()
}

/**
 * 判读是否支持浏览器全屏
 * @returns 支持返回true,否则返回false
 */
export function fullscreenEnabled(): boolean {
    return document.fullscreenEnabled
}

/**
 * 判断浏览器是否全屏
 * @returns 全屏则返回当前调用全屏的元素,不全屏返回false
 */
export function isFullscreen(): boolean | Element {
    return document.fullscreenElement || false
}

/**
 * 添加/移除 浏览器全屏事件监听
 * @param type 类型 添加事件'addEventListener', 移除事件'removeEventListener'
 * @param fullscreenchange 全屏模式变化后的回调函数
 */
export function fullScreenListener(type: "addEventListener" | "removeEventListener", fullscreenchange: (e: any) => void) {
    document[type]("fullscreenchange", fullscreenchange)
}
