import Cookie from "js-cookie"

export type CacheType = "local" | "session" | "cookie"

/**
 * 根据key获取缓存数据
 * @param {string} key 唯一标识
 * @param {string} type 缓存类型 'local'(默认) / cookie / session;
 * @returns 返回key对应的缓存值,若找不到返回undefined
 */
function getCache(key: string, type: CacheType = "local"): string | undefined {
    let data
    switch (type) {
        case "cookie":
            data = Cookie.get(key)
            break
        case "session":
            // eslint-disable-next-line no-case-declarations
            const strS = sessionStorage.getItem(key) || ""
            try {
                data = JSON.parse(strS)
            } catch (e) {
                data = strS
            }
            break
        default:
            // eslint-disable-next-line no-case-declarations
            const strL = localStorage.getItem(key) || ""
            try {
                data = JSON.parse(strL)
            } catch (e) {
                data = strL
            }
            break
    }
    return data
}

/**
 * 设置缓存数据
 * @param {string} key 唯一标识
 * @param {any} value 存储的值
 * @param {string} type 缓存类型 'local'(默认) / cookie / session;
 */
function setCache(key: string, value: any, type: CacheType = "local") {
    switch (type) {
        case "cookie":
            Cookie.set(key, value, { expires: 7 })
            break
        case "session":
            sessionStorage.setItem(key, JSON.stringify(value))
            break
        default:
            localStorage.setItem(key, JSON.stringify(value))
            break
    }
}

/**
 * 清除缓存
 * @param key 存储的唯一标识key
 * @param type 缓存类型 'local'(默认) / cookie / session;
 */
function clearCache(key: string, type: CacheType = "local") {
    switch (type) {
        case "cookie":
            Cookie.remove(key)
            break
        case "session":
            sessionStorage.removeItem(key)
            break
        default:
            localStorage.removeItem(key)
            break
    }
}

/**
 * 清除所有缓存的值
 * @param type 缓存类型 'local'(默认) / cookie / session;
 * @param keys 唯一标识,type为cookie时必须
 */

function clearAll(type: CacheType = "local", keys?: string[]) {
    switch (type) {
        case "cookie":
            keys?.forEach((key) => Cookie.remove(key))
            break
        case "session":
            sessionStorage.clear()
            break
        default:
            localStorage.clear()
            break
    }
}

export default {
    getCache,
    setCache,
    clearCache,
    clearAll,
}
