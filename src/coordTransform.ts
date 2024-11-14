/**
 * 百度坐标（BD09）、火星坐标（GCJ02）、和WGS84坐标系之间的转换
 * web墨卡托与经纬度坐标之间的转换
 * @author: Frank
 */
const x_PI = (3.14159265358979324 * 3000.0) / 180.0
const PI = 3.1415926535897932384626
// 地球半径(米)
const EARTH_RADIUS = 6378137
const ee = 0.00669342162296594323
/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lon 百度坐标系的经度
 * @param bd_lat 百度坐标系的纬度
 * @returns {number[]}
 * @example
 * ```ts
 * import { coordTransform } from "@pointcloud/pcloud-utils";
 * const [lon, lat] = coordTransform.bd09togcj02(116.404, 39.915)
 * console.log(lon, lat) // [116.397627, 39.9086567]
 */
export const bd09togcj02 = (bd_lon: number | string, bd_lat: number | string): number[] => {
  const x = +bd_lon - 0.0065
  const y = +bd_lat - 0.006
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI)
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI)
  const gg_lng = z * Math.cos(theta)
  const gg_lat = z * Math.sin(theta)
  return [gg_lng, gg_lat]
}

/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 * @param gc_lng 火星坐标系经度
 * @param gc_lat 火星坐标系纬度
 * @returns {number[]}
 * @example
 * ```ts
 * import { coordTransform } from "@pointcloud/pcloud-utils";
 * const [lon, lat] = coordTransform.gcj02tobd09(116.397627, 39.9086567)
 * console.log(lon, lat) // [116.404, 39.915]
 */
export const gcj02tobd09 = (gc_lng: number | string, gc_lat: number | string): number[] => {
  const lat = +gc_lat
  const lng = +gc_lng
  const z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI)
  const theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI)
  const bd_lng = z * Math.cos(theta) + 0.0065
  const bd_lat = z * Math.sin(theta) + 0.006
  return [bd_lng, bd_lat]
}

/**
 * WGS84转GCj02
 * @param wgs_lng wgs84坐标系经度
 * @param wgs_lat wgs84坐标系纬度
 * @returns {number[]}
 * @example
 * ```ts
 * import { coordTransform } from "@pointcloud/pcloud-utils";
 * const [lon, lat] = coordTransform.wgs84togcj02(116.397627, 39.9086567)
 * console.log(lon, lat) // [116.40387, 39.91006]
 */
export const wgs84togcj02 = (wgs_lng: number | string, wgs_lat: number | string): number[] => {
  const lat = +wgs_lat
  const lng = +wgs_lng
  if (outOfChina(lng, lat)) {
    return [lng, lat]
  } else {
    let dlat = transformlat(lng - 105.0, lat - 35.0)
    let dlng = transformlng(lng - 105.0, lat - 35.0)
    const radlat = (lat / 180.0) * PI
    let magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    const sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / (((EARTH_RADIUS * (1 - ee)) / (magic * sqrtmagic)) * PI)
    dlng = (dlng * 180.0) / ((EARTH_RADIUS / sqrtmagic) * Math.cos(radlat) * PI)
    const mglat = lat + dlat
    const mglng = lng + dlng
    return [mglng, mglat]
  }
}

/**
 * GCJ02 转换为 WGS84
 * @param gc_lng 火星坐标系经度
 * @param gc_lat 火星坐标系纬度
 * @returns {number[]}
 * @example
 * ```ts
 * import { coordTransform } from "@pointcloud/pcloud-utils";
 * const [lon, lat] = coordTransform.gcj02towgs84(116.40387, 39.91006)
 * console.log(lon, lat) // [116.397627, 39.9086567]
 */
export const gcj02towgs84 = (gc_lng: number | string, gc_lat: number | string): number[] => {
  const lat = +gc_lat
  const lng = +gc_lng
  if (outOfChina(lng, lat)) {
    return [lng, lat]
  } else {
    let dlat = transformlat(lng - 105.0, lat - 35.0)
    let dlng = transformlng(lng - 105.0, lat - 35.0)
    const radlat = (lat / 180.0) * PI
    let magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    const sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / (((EARTH_RADIUS * (1 - ee)) / (magic * sqrtmagic)) * PI)
    dlng = (dlng * 180.0) / ((EARTH_RADIUS / sqrtmagic) * Math.cos(radlat) * PI)
    const mglat = lat + dlat
    const mglng = lng + dlng
    return [lng * 2 - mglng, lat * 2 - mglat]
  }
}

/**
 * 纬度偏移转换
 * @param lng
 * @param lat
 * @returns
 */
const transformlat = (raw_lng: number | string, raw_lat: number | string): number => {
  const lat = +raw_lat
  const lng = +raw_lng
  let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0
  ret += ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) * 2.0) / 3.0
  ret += ((160.0 * Math.sin((lat / 12.0) * PI) + 320 * Math.sin((lat * PI) / 30.0)) * 2.0) / 3.0
  return ret
}

/**
 * 经度偏移转换
 * @param lng
 * @param lat
 * @returns
 */
const transformlng = (raw_lng: number | string, raw_lat: number | string): number => {
  const lat = +raw_lat
  const lng = +raw_lng
  let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0
  ret += ((20.0 * Math.sin(lng * PI) + 40.0 * Math.sin((lng / 3.0) * PI)) * 2.0) / 3.0
  ret += ((150.0 * Math.sin((lng / 12.0) * PI) + 300.0 * Math.sin((lng / 30.0) * PI)) * 2.0) / 3.0
  return ret
}

/**
 * 判断是否在国内，不在国内则不做偏移
 * @param raw_lng 经度
 * @param raw_lat 维度
 * @returns {boolean}
 * @example
 * ```ts
 * import { coordTransform } from "@pointcloud/pcloud-utils";
 * const outChina = coordTransform.outOfChina(99.123, 10.2144)
 * console.log(outChina) // true
 */
export const outOfChina = (raw_lng: number | string, raw_lat: number | string): boolean => {
  const lat = +raw_lat
  const lng = +raw_lng
  // 中国的大概范围 纬度3.86~53.55,经度73.66~135.05
  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55)
}

/**
 * 经纬度坐标转Web墨卡托坐标
 * @param raw_lon 经度
 * @param raw_lat 纬度
 * @returns {number[]}
 */
export const lonLatToMercator = (raw_lon: number | string, raw_lat: number | string): number[] => {
  const lon = +raw_lon
  const lat = +raw_lat
  const x = (lon * EARTH_RADIUS * PI) / 180
  let y = Math.log(Math.tan(((90 + lat) * PI) / 360)) / (PI / 180)
  y = (y * EARTH_RADIUS * PI) / 180
  return [x, y]
}

/**
 * web墨卡托投影坐标转经纬度坐标
 * @param raw_x 墨卡托投影坐标中的x坐标值
 * @param raw_y 墨卡托投影坐标中的y坐标值
 * @returns {number[]}
 */
export const mercatorToLonLat = (raw_x: number | string, raw_y: number | string): number[] => {
  const x = +raw_x
  const y = +raw_y
  const lon = (x / (EARTH_RADIUS * PI)) * 180
  let lat = (y / (EARTH_RADIUS * PI)) * 180
  lat = (180 / PI) * (2 * Math.atan(Math.exp((lat * PI) / 180)) - PI / 2)
  return [lon, lat]
}
