/**
 * 将数字转为中文
 * @param num 要转换的数字
 * @return 转换后的中文数字
 * @example
 * ```ts
 * import { numHelper } from "@pointcloud/pcloud-utils"
 * numHelper.convertToChinese('102') // 一百零二;
 * ```
 * */
export declare function convertToChinese(num: string): string;
/**
 * 千分位分隔字符或字符串
 * @param num 需要被分隔的数字或者纯数字的字符串
 * @returns 返回分隔后的字符
 * @example
 * ```ts
 * import { numHelper } from "@pointcloud/pcloud-utils"
 * numHelper.thousand('10212') // 10,212;
 * ```
 */
export declare function thousand(num: string | number): string;
interface GetRandomNumberOptions {
    toFixed?: number;
}
/**
 * 生成指定范围内的随机数
 *
 * @param max 随机数的上限（不包含）
 * @param min 随机数的下限（包含）
 * @param options 可选配置项，包括小数点后保留的位数
 * @param options.toFixed 小数点后保留的位数，默认为0
 * @returns 在指定范围内的随机数，根据options配置四舍五入到指定的小数位
 * @example
 * ```ts
 * import { numHelper } from "@pointcloud/pcloud-utils"
 * numHelper.getRandomNumber(1, 10, { toFixed: 2 }) // 生成1到10之间的随机数，保留两位小数
 * ```
 */
export declare function getRandomNumber(min: number, max: number, options?: GetRandomNumberOptions): number;
export {};
