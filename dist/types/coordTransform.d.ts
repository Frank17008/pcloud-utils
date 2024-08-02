/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lon 百度坐标系的经度
 * @param bd_lat 百度坐标系的纬度
 * @returns {number[]}
 */
export declare const bd09togcj02: (bd_lon: number | string, bd_lat: number | string) => number[];
/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 * @param gc_lng 火星坐标系经度
 * @param gc_lat 火星坐标系纬度
 * @returns {number[]}
 */
export declare const gcj02tobd09: (gc_lng: number | string, gc_lat: number | string) => number[];
/**
 * WGS84转GCj02
 * @param wgs_lng wgs84坐标系经度
 * @param wgs_lat wgs84坐标系纬度
 * @returns {number[]}
 */
export declare const wgs84togcj02: (wgs_lng: number | string, wgs_lat: number | string) => number[];
/**
 * GCJ02 转换为 WGS84
 * @param gc_lng 火星坐标系经度
 * @param gc_lat 火星坐标系纬度
 * @returns {number[]}
 */
export declare const gcj02towgs84: (gc_lng: number | string, gc_lat: number | string) => number[];
/**
 * 判断是否在国内，不在国内则不做偏移
 * @param raw_lng 经度
 * @param raw_lat 维度
 * @returns {boolean}
 */
export declare const outOfChina: (raw_lng: number | string, raw_lat: number | string) => boolean;
/**
 * 经纬度坐标转Web墨卡托坐标
 * @param raw_lon 经度
 * @param raw_lat 纬度
 * @returns {number[]}
 */
export declare const lonLatToMercator: (raw_lon: number | string, raw_lat: number | string) => number[];
/**
 * web墨卡托投影坐标转经纬度坐标
 * @param raw_x 墨卡托投影坐标中的x坐标值
 * @param raw_y 墨卡托投影坐标中的y坐标值
 * @returns {number[]}
 */
export declare const mercatorToLonLat: (raw_x: number | string, raw_y: number | string) => number[];
