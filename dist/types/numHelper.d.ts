/**
 * 将数字转为中文
 * @param num 要转换的数字
 * @return 转换后的中文数字
 * @example
 * ```ts
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
 * numHelper.thousand('10212') // 10,212;
 * ```
 */
export declare function thousand(num: string | number): string;
