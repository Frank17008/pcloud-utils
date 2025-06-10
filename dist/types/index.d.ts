import * as formTest from "./formTest";
import * as file from "./file";
import * as cache from "./cache";
import * as treeHelper from "./treeHelper";
import * as SocketEmitter from "./socketEmitter";
import * as numHelper from "./numHelper";
import * as fscHelper from "./fscHelper";
import IndexDB from "./indexDB";
import * as coordTransform from "./coordTransform";
import * as http from "./http";
import * as strHelper from "./strHelper";
/**
 * 生成uuid
 * @returns 返回一个16位的字符串
 * @example
 * ```ts
 * import { uuid } from "@pointcloud/pcloud-utils"
 * const uuid = uuid()
 * ```
 */
declare function uuid(): string;
/**
 * eval函数的替代
 * @param fn Function
 * @returns Function
 */
declare function evil(fn: Function): any;
/**
 * 按照某个字段对数组进行分组
 * @param sortData 源数据数组
 * @param fieldName 分组的字段
 * @returns 返回分组后的数组
 * @example
 * ```ts
 * import { groupByField } from "@pointcloud/pcloud-utils"
 * const mockData = [
 *   { name: 'Alice', age: 25, city: 'New York' },
 *   { name: 'Bob', age: 30, city: 'Los Angeles' },
 *   { name: 'Charlie', age: 25, city: 'New York' },
 *   { name: 'David', age: 35, city: 'Chicago' },
 *   { name: 'Eve', age: 28, city: 'Los Angeles' }
 * ];
 * // 按照city字段分组
 * const groupedByCity = groupByField(mockData, 'city');
 * console.log(groupedByCity);
 * [
 *   {
 *     label: 'New York',
 *     data: [{ name: 'Alice', age: 25, city: 'New York' },{ name: 'Charlie', age: 25, city: 'New York' }]
 *   },
 *   {
 *     label: 'Los Angeles',
 *     data: [{ name: 'Bob', age: 30, city: 'Los Angeles' },{ name: 'Eve', age: 28, city: 'Los Angeles'}]
 *   },
 *   {
 *     label: 'Chicago',
 *     data: [{ name: 'David', age: 35, city: 'Chicago' }]
 *   }
 * ]
 */
declare function groupByField<T>(sortData: T[], fieldName: string): {
    label: string;
    data: T[];
}[];
export { formTest, file, cache, treeHelper, numHelper, fscHelper, uuid, evil, groupByField, SocketEmitter, IndexDB, coordTransform, http, strHelper, };
export type { TreeNode } from "./treeHelper";
export type { CacheType } from "./cache";
