import * as formTest from "./formTest"
import * as file from "./file"
import * as cache from "./cache"
import * as treeHelper from "./treeHelper"
import * as SocketEmitter from "./socketEmitter"

/**
 * 生成uuid
 * @returns 返回一个16位的字符串
 */
function uuid(): string {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
}

/**
 * 将数字转为中文
 * @param num 要转换的数字
 * @return 转换后的中文数字
 * */
function numConvertToChinese(num: string): string {
    if (num) {
        const changeNum: string[] = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
        const unit: string[] = ["", "十", "百", "千", "万"]
        const digital = parseInt(num, 10)
        if (!digital) return "未知"
        const getWan = (temp: number): string => {
            const strArr = temp.toString().split("").reverse()
            let newNum = ""
            const newArr: any = []
            strArr.forEach((item: string, index: number) => {
                newArr.unshift(item === "0" ? changeNum[Number(item)] : changeNum[Number(item)] + unit[index])
            })
            const numArr: number[] = []
            newArr.forEach((m: string, n: number) => {
                if (m !== "零") numArr.push(n)
            })
            if (newArr.length > 1) {
                newArr.forEach((m: string, n: number) => {
                    if (newArr[newArr.length - 1] === "零") {
                        if (n <= numArr[numArr.length - 1]) {
                            newNum += m
                        }
                    } else {
                        newNum += m
                    }
                })
            } else {
                newNum = newArr[0]
            }
            return newNum
        }
        const overWan = Math.floor(digital / 10000)
        let noWan: any = digital % 10000
        if (noWan.toString().length < 4) {
            noWan = `0${noWan}`
        }
        return overWan ? `${getWan(overWan)}万${getWan(noWan)}` : getWan(digital)
    } else {
        return "一"
    }
}

/**
 * 按照某个字段对数组进行分组
 * @param sortData 源数据数组
 * @param fieldName 分组的字段
 * @returns 返回分组后的数组
 */
function groupByField<T>(sortData: T[], fieldName: string): { label: string; data: T[] }[] {
    const groupBy = (array: T[], f: Function): { label: string; data: any }[] => {
        const groups: any = {}
        array.forEach((o) => {
            const group: string = f(o) || "未知"
            groups[group] = groups[group] || []
            groups[group].push(o)
        })
        return Object.keys(groups).map((group) => {
            return { label: group, data: groups[group] }
        })
    }
    const sorted = groupBy(sortData, (item: any) => {
        return item[fieldName]
    })
    return sorted
}

export { formTest, file, cache, treeHelper, uuid, numConvertToChinese, groupByField, SocketEmitter }
export type { TreeNode } from "./treeHelper"
export type { CacheType } from "./cache"
