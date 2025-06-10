const REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;

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
export function toKebabCase(value: string): string {
  return String(value).replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
}

const REGEXP_KEBAB_CASE = /-[A-z\d]/g;

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
export function toCamelCase(value: string): string {
  return value.replace(REGEXP_KEBAB_CASE, (substring: string) =>
    substring.slice(1).toUpperCase()
  );
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
/**
 * 生成uuid
 * @returns 返回一个16位的字符串
 * @example
 * ```ts
 * import { strHelper } from "@pointcloud/pcloud-utils"
 * const uuid = strHelper.uuid();
 * ```
 */
export function uuid(): string {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}