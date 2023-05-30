import formTest from "./formTest";
import file from "./file";
import cache from "./cache";
import treeHelper from "./treeHelper";
/**
 * 生成uuid
 * @returns 返回一个16位的字符串
 */
declare function uuid(): string;
/**
 * 将数字转为中文
 * @param num 要转换的数字
 * @return 转换后的中文数字
 * */
declare function numConvertToChinese(num: string): string;
/**
 * 按照某个字段对数组进行分组
 * @param sortData 源数据数组
 * @param fieldName 分组的字段
 * @returns 返回分组后的数组
 */
declare function groupByField<T>(sortData: T[], fieldName: string): {
    label: string;
    data: T[];
}[];
export { formTest, file, cache, treeHelper, uuid, numConvertToChinese, groupByField };
export type { TreeNode } from "./treeHelper";
export type { CacheType } from "./cache";
