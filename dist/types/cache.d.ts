export type CacheType = 'local' | 'session' | 'cookie';
/**
 * 根据key获取缓存数据
 * @param key 唯一标识
 * @param cacheType 缓存类型 'local'(默认) / cookie / session;
 * @returns 返回key对应的缓存值,若找不到返回空字符串
 * @example
 * ```ts
 * const info1 = cache.getCache('person', 'session');
 * const info2 = cache.getCache('person', 'local');
 * const info2 = cache.getCache('person', 'cookie');
 * ```
 */
export declare function getCache(key: string, cacheType?: CacheType): string | {
    [key: string]: any;
};
/**
 * 设置缓存数据
 * @param {string} key 唯一标识
 * @param {any} value 存储的值
 * @param {string} cacheType 缓存类型 'local'(默认) / cookie / session;
 * @example
 * ```ts
 * import { cache } from "@pointclous/pcloud-utils"
 * cache.setCache('person',{ name:'Tom', age:18 },'session');
 * cache.setCache('person',{ name:'Tom', age:18 },'local');
 * cache.setCache('person',{ name:'Tom', age:18 },'cookie');
 * ```
 */
export declare function setCache(key: string, value: any, cacheType?: CacheType): void;
/**
 * 清除缓存
 * @param key 存储的唯一标识key
 * @param cacheType 缓存类型 'local'(默认) / cookie / session;
 * @example
 * ```ts
 * import { cache } from "@pointclous/pcloud-utils"
 * cache.clearCache('person','session');
 * ```
 */
export declare function clearCache(key: string, cacheType?: CacheType): void;
/**
 * 清除所有缓存的值
 * @param cacheType 缓存类型 'local'(默认) / cookie / session;
 * @param keys 唯一标识,type为cookie时必须
 * @example
 * ```ts
 * import { cache } from "@pointclous/pcloud-utils"
 * cache.clearAll('session');
 * ```
 */
export declare function clearAll(cacheType?: CacheType, keys?: string[]): void;
