import * as formTest from './formTest';
import * as file from './file';
import * as cache from './cache';
import * as treeHelper from './treeHelper';
import * as SocketEmitter from './socketEmitter';
import * as numHelper from './numHelper';
import * as fscHelper from './fscHelper';
import IndexDB from './indexDB';
/**
 * 生成uuid
 * @returns 返回一个16位的字符串
 */
declare function uuid(): string;
/**
 * eval函数的替代
 * @param fn Function
 * @returns
 */
declare function evil(fn: Function): any;
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
export { formTest, file, cache, treeHelper, numHelper, fscHelper, uuid, evil, groupByField, SocketEmitter, IndexDB };
export type { TreeNode } from './treeHelper';
export type { CacheType } from './cache';
