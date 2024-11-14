/**
 * 浏览器全屏
 * @param element dom元素选择器
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * fscHelper.fullscreen(document.querySelector('#id'));
 * ```
 */
export function fullscreen(element: Element) {
  element.requestFullscreen()
}

/**
 * 退出浏览器全屏模式
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
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
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * fscHelper.fullscreenEnabled(); // true | false
 * ```
 */
export function fullscreenEnabled(): boolean {
  return document.fullscreenEnabled
}

/**
 * 判断浏览器是否全屏
 * @returns 全屏则返回当前调用全屏的元素,不全屏返回false
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * fscHelper.isFullscreen(); // Element | false
 * ```
 */
export function isFullscreen(): boolean | Element {
  return document.fullscreenElement || false
}

/**
 * 添加/移除 浏览器全屏事件监听
 * @param type 类型 添加事件'addEventListener', 移除事件'removeEventListener'
 * @param fullscreenchange 全屏模式变化后的回调函数
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * fscHelper.fullScreenListener('addEventListener', (e) => {})
 * fscHelper.fullScreenListener('removeEventListener', (e) => {})
 * ```
 */
export function fullScreenListener(type: 'addEventListener' | 'removeEventListener', fullscreenchange: (e: any) => void) {
  document[type]('fullscreenchange', fullscreenchange)
}

function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  // 避免页面滚动
  textArea.style.position = 'fixed'
  textArea.style.top = '0px'
  textArea.style.left = '0px'
  textArea.style.width = '2em'
  textArea.style.height = '2em'
  textArea.style.padding = '0px'
  textArea.style.border = 'none'
  textArea.style.outline = 'none'
  textArea.style.boxShadow = 'none'
  textArea.style.background = 'transparent'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    const msg = successful ? 'successful' : 'unsuccessful'
    console.log(`Fallback: Copying text command was ${msg}`)
  } catch (err) {
    console.error('Fallback: unable to copy', err)
  }
  document.body.removeChild(textArea)
}

/**
 * 将文本复制到剪贴板
 * 将给定的文本复制到剪贴板，并返回操作是否成功的布尔值
 * @param text 要复制到剪贴板的字符串文本
 * @description 兼容老版本浏览器的document.execCommand('copy')
 * @returns Promise<boolean>
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * const res = await fscHelper.copyToClipboard('hello world')
 * console.log(`Copy success: ${res}`);
 * ```
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    // 如果浏览器不支持 Clipboard API，则使用传统的 textArea 方法
    fallbackCopyTextToClipboard(text)
    return true
  }
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    return false
  }
}

/**
 * 剪贴板读取文本，并返回读取到的字符串
 * @param text 要复制到剪贴板的字符串文本
 * @description 兼容老版本浏览器的document.execCommand('copy')
 * @returns Promise<string | null>
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * const res = await fscHelper.pasteFromClipboard()
 * console.log(`paste success: ${res}`);
 * ```
 */
export async function pasteFromClipboard(): Promise<string | null> {
  if (!navigator.clipboard) {
    document.execCommand('paste')
    return null
  }
  try {
    const text = await navigator.clipboard.readText()
    return text
  } catch (err) {
    return null
  }
}
