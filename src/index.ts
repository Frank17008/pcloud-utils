import * as formTest from "./formTest";
import * as file from "./file";
import * as cache from "./cache";
import * as treeHelper from "./treeHelper";
import * as SocketEmitter from "./socketEmitter";
// 数字工具助手
import * as numHelper from "./numHelper";
// 全屏工具助手
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
function uuid(): string {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
/**
 * eval函数的替代
 * @param fn Function
 * @returns Function
 */
function evil(fn: Function) {
  const Fn = Function;
  return new Fn("return " + fn)();
}

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
function groupByField<T>(
  sortData: T[],
  fieldName: string
): { label: string; data: T[] }[] {
  const groupBy = (array: T[], f: Function): { label: string; data: any }[] => {
    const groups: any = {};
    array.forEach((o) => {
      const group: string = f(o) || "未知";
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map((group) => {
      return { label: group, data: groups[group] };
    });
  };
  const sorted = groupBy(sortData, (item: any) => {
    return item[fieldName];
  });
  return sorted;
}

export {
  formTest,
  file,
  cache,
  treeHelper,
  numHelper,
  fscHelper,
  uuid,
  evil,
  groupByField,
  SocketEmitter,
  IndexDB,
  coordTransform,
  http,
  strHelper,
};
export type { TreeNode } from "./treeHelper";
export type { CacheType } from "./cache";
