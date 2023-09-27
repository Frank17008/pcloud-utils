export const TelRegExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

/**
 * 校验是否是手机号格式
 * @param tel - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * formTest.ValidatorTel('18165275413') // true;
 * formTest.ValidatorTel('1816ss') // false;
 * ```
 */
export function ValidatorTel(tel: string): boolean {
    return TelRegExp.test(tel)
}

export const EmailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
/**
 * 校验是否为电子邮箱格式
 * @param email - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * formTest.ValidatorEmail('40673522@qq.com') // true;
 * formTest.ValidatorEmail('40673522m') // false;
 * ```
 */
export function ValidatorEmail(email: string): boolean {
    return EmailRegExp.test(email)
}

export const IdCardRegExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
/**
 * 校验是否为身份证号格式
 * @param idCard - 字符串
 * @returns 是返回`true`,否返回`false`
 * @example
 * ```ts
 * formTest.ValidatorIdCard('610343197806171621') // true;
 * formTest.ValidatorIdCard('61036ww') // false;
 * ```
 */
export function ValidatorIdCard(idCard: string): boolean {
    return IdCardRegExp.test(idCard)
}

export const BankCardRegExp = /^([1-9]{1})(\d{14}|\d{18})$/

/**
 * 校验是否为银行卡号格式
 * @param bankCard - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorBankCard(bankCard: string): boolean {
    return BankCardRegExp.test(bankCard)
}

/**
 * 正则表达式 校验是否为汉字
 */
export const ChineseRegExp = /^[u4e00-u9fa5]$/
/**
 * 校验是否为汉字
 * @param chinese - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorChinese(chinese: string): boolean {
    return ChineseRegExp.test(chinese)
}

/**
 * 正则表达式 校验是否为字母
 */
export const LetterRegExp = /^[A-Za-z]*$/
/**
 * 校验是否为字母
 * @param letter - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorLetter(letter: string): boolean {
    return LetterRegExp.test(letter)
}

/**
 * 正则表达式 域名
 */
export const UrlRegExp = /^(https?:|mailto:|tel:)$/
/**
 * 校验是否为url域名
 * @param url - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorUrl(url: string): boolean {
    return UrlRegExp.test(url)
}

/**
 * 正则表达式 1~50位的汉字、数字、字母
 */
export const CCARegExp = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,50}$/
/**
 * 校验是否为1~50位的汉字数字字母
 * @param cca - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorCCA(cca: string): boolean {
    return CCARegExp.test(cca)
}

/**
 * 正则表达式 密码校验 8-20位数字、大小写字母、特殊符号组合
 */
export const PswRegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$/

/**
 * 校验密码是否为8-20位数字、大小写字母、特殊符号组合
 * @param password - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorPsw(password: string): boolean {
    return PswRegExp.test(password)
}
