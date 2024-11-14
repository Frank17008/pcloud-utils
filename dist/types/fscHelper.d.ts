/**
 * 浏览器全屏
 * @param element dom元素选择器
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * fscHelper.fullscreen(document.querySelector('#id'));
 * ```
 */
export declare function fullscreen(element: Element): void;
/**
 * 退出浏览器全屏模式
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * fscHelper.exitFullscreen();
 * ```
 */
export declare function exitFullscreen(): void;
/**
 * 判读是否支持浏览器全屏
 * @returns 支持返回true,否则返回false
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * fscHelper.fullscreenEnabled(); // true | false
 * ```
 */
export declare function fullscreenEnabled(): boolean;
/**
 * 判断浏览器是否全屏
 * @returns 全屏则返回当前调用全屏的元素,不全屏返回false
 * @example
 * ```ts
 * import { fscHelper } from '@pointcloud/pcloud-utils'
 * fscHelper.isFullscreen(); // Element | false
 * ```
 */
export declare function isFullscreen(): boolean | Element;
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
export declare function fullScreenListener(type: 'addEventListener' | 'removeEventListener', fullscreenchange: (e: any) => void): void;
