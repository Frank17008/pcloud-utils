/**
 * 将数字转为中文
 * @param num 要转换的数字
 * @return 转换后的中文数字
 * */
export function convertToChinese(num: string): string {
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
 * 千分位分隔字符或字符串
 * @param num 需要被分隔的数字或者纯数字的字符串
 * @returns 返回分隔后的字符
 */
export function thousand(num: string | number): string {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
}