/**
 * 将数字转为中文
 * @param num 要转换的数字
 * @return 转换后的中文数字
 * @example
 * ```ts
 * import { numHelper } from "@pointcloud/pcloud-utils"
 * numHelper.convertToChinese('102') // 一百零二;
 * ```
 * */
export function convertToChinese(num: string): string {
  if (num) {
    const changeNum: string[] = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    const unit: string[] = ['', '十', '百', '千', '万']
    const digital = parseInt(num, 10)
    if (!digital) return '未知'
    const getWan = (temp: number): string => {
      const strArr = temp.toString().split('').reverse()
      let newNum = ''
      const newArr: any = []
      strArr.forEach((item: string, index: number) => {
        newArr.unshift(item === '0' ? changeNum[Number(item)] : changeNum[Number(item)] + unit[index])
      })
      const numArr: number[] = []
      newArr.forEach((m: string, n: number) => {
        if (m !== '零') numArr.push(n)
      })
      if (newArr.length > 1) {
        newArr.forEach((m: string, n: number) => {
          if (newArr[newArr.length - 1] === '零') {
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
    return '一'
  }
}

/**
 * 千分位分隔字符或字符串
 * @param num 需要被分隔的数字或者纯数字的字符串
 * @returns 返回分隔后的字符
 * @example
 * ```ts
 * import { numHelper } from "@pointcloud/pcloud-utils"
 * numHelper.thousand('10212') // 10,212;
 * ```
 */
export function thousand(num: string | number): string {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

interface GetRandomNumberOptions {
  toFixed?: number;
}
/**
 * 生成指定范围内的随机数
 * 
 * @param max 随机数的上限（不包含）
 * @param min 随机数的下限（包含）
 * @param options 可选配置项，包括小数点后保留的位数
 * @param options.toFixed 小数点后保留的位数，默认为0
 * @returns 在指定范围内的随机数，根据options配置四舍五入到指定的小数位
 * @example
 * ```ts
 * import { numHelper } from "@pointcloud/pcloud-utils"
 * numHelper.getRandomNumber(1, 10, { toFixed: 2 }) // 生成1到10之间的随机数，保留两位小数
 * ```
 */
export function getRandomNumber( min: number, max: number, options?: GetRandomNumberOptions) {
  const { toFixed = 0 } = options ?? {};
  return Number((Math.random() * (max - min) + min).toFixed(toFixed));
}