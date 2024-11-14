export declare const TelRegExp: RegExp;
/**
 * 校验是否是手机号格式
 * @param tel - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * import { formTest } from "@pointcloud/pcloud-utils";
 * formTest.ValidatorTel('18165275413') // true;
 * formTest.ValidatorTel('1816ss') // false;
 * ```
 */
export declare function ValidatorTel(tel: string): boolean;
export declare const EmailRegExp: RegExp;
/**
 * 校验是否为电子邮箱格式
 * @param email - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * import { formTest } from "@pointcloud/pcloud-utils";
 * formTest.ValidatorEmail('40673522@qq.com') // true;
 * formTest.ValidatorEmail('40673522m') // false;
 * ```
 */
export declare function ValidatorEmail(email: string): boolean;
export declare const IdCardRegExp: RegExp;
/**
 * 校验是否为身份证号格式
 * @param idCard - 字符串
 * @returns 是返回`true`,否返回`false`
 * @description 兼容第一代15位号码的身份证, 只校验数字位数
 * @example
 * ```ts
 * import { formTest } from "@pointcloud/pcloud-utils";
 * formTest.ValidatorIdCard('610343197806171621') // true;
 * formTest.ValidatorIdCard('61036ww') // false;
 * ```
 */
export declare function ValidatorIdCard(idCard: string): boolean;
export declare const BankCardRegExp: RegExp;
/**
 * 校验是否为银行卡号格式
 * @param bankCard - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export declare function ValidatorBankCard(bankCard: string): boolean;
/**
 * 正则表达式 校验是否为汉字
 */
export declare const ChineseRegExp: RegExp;
/**
 * 校验是否为汉字
 * @param chinese - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export declare function ValidatorChinese(chinese: string): boolean;
/**
 * 正则表达式 校验是否为字母
 */
export declare const LetterRegExp: RegExp;
/**
 * 校验是否为字母
 * @param letter - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * import { formTest } from "@pointcloud/pcloud-utils";
 * formTest.ValidatorLetter('a') // true;
 * formTest.ValidatorLetter('a1') // false;
 * ```
 */
export declare function ValidatorLetter(letter: string): boolean;
/**
 * 正则表达式 域名
 */
export declare const UrlRegExp: RegExp;
/**
 * 校验是否为url域名
 * @param url - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * import { formTest } from "@pointcloud/pcloud-utils";
 * formTest.ValidatorUrl('https://www.baidu.com') // true;
 * formTest.ValidatorUrl('http://www.baidu.com') // true;
 * formTest.ValidatorUrl('mailto:') // true;
 * formTest.ValidatorUrl('tel:') // true;
 * formTest.ValidatorUrl('http://www.baidu.com') // false;
 * ```
 */
export declare function ValidatorUrl(url: string): boolean;
/**
 * 正则表达式 1~50位的汉字、数字、字母
 */
export declare const CCARegExp: RegExp;
/**
 * 校验是否为1~50位的汉字数字字母
 * @param cca - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * import { formTest } from "@pointcloud/pcloud-utils";
 * formTest.ValidatorCCA('你好') // true;
 * formTest.ValidatorCCA('你好1') // true;
 * formTest.ValidatorCCA('你好1a') // true;
 * formTest.ValidatorCCA('你好1a.') // true;
 * formTest.ValidatorCCA('你好1a.1') // true;
 * formTest.ValidatorCCA('你好1a.1.') // false;
 * ```
 */
export declare function ValidatorCCA(cca: string): boolean;
/**
 * 正则表达式 密码校验 8-20位数字、大小写字母、特殊符号组合
 */
export declare const PswRegExp: RegExp;
/**
 * 校验密码是否为8-20位数字、大小写字母、特殊符号组合
 * @param password - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * import { formTest } from "@pointcloud/pcloud-utils";
 * formTest.ValidatorPsw('12345678') // false;
 * formTest.ValidatorPsw('12345678a') // false;
 * formTest.ValidatorPsw('12345678a.') // true;
 * formTest.ValidatorPsw('12345678a.1') // true;
 * formTest.ValidatorPsw('12345678a.1.') // false;
 * ```
 */
export declare function ValidatorPsw(password: string): boolean;
