/**
 * 驼峰式字符串转为短横线分隔的字符串（kebab-case）
 * @param {string} value
 * @returns {string}
 * @example
 * ```ts
 * import { strHelper } from "@pointcloud/pcloud-utils";
 * strHelper.toKebabCase('camelCaseString'); // 'camel-case-string'
 * strHelper.toKebabCase('anotherExample'); // 'another-example'
 * ```
 */
export declare function toKebabCase(value: string): string;
/**
 * 短横线分隔的字符串（kebab-case）转为驼峰式字符串
 * @param {string} value
 * @returns {string}
 * @example
 * ```ts
 * import { strHelper } from "@pointcloud/pcloud-utils";
 * strHelper.toCamelCase('kebab-case-string'); // 'kebabCaseString'
 * strHelper.toCamelCase('another-example'); // 'anotherExample'
 * ```
 */
export declare function toCamelCase(value: string): string;
/**
 * 生成uuid
 * @returns 返回一个16位的字符串
 * @example
 * ```ts
 * import { strHelper } from "@pointcloud/pcloud-utils"
 * const uuid = strHelper.uuid();
 * ```
 */
export declare function uuid(): string;
