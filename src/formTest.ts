/**
 * 校验是否是手机号格式
 * @param tel - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorTel(tel: string): boolean {
    const Tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    return Tel.test(tel)
}

/**
 * 校验是否为电子邮箱格式
 * @param email - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorEmail(email: string): boolean {
    const Email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return Email.test(email)
}

/**
 * 校验是否为身份证号格式
 * @param idCard - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorIdCard(idCard: string): boolean {
    const IdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return IdCard.test(idCard)
}

/**
 * 校验是否为银行卡号格式
 * @param bankCard - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorBankCard(bankCard: string): boolean {
    const BankCard = /^([1-9]{1})(\d{14}|\d{18})$/
    return BankCard.test(bankCard)
}

/**
 * 校验是否为汉字
 * @param chinese - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorChinese(chinese: string): boolean {
    const Chinese = /^[u4e00-u9fa5]$/
    return Chinese.test(chinese)
}

/**
 * 校验是否为字母
 * @param letter - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorLetter(letter: string): boolean {
    const Letter = /^[A-Za-z]*$/
    return Letter.test(letter)
}

/**
 * 校验是否为url域名
 * @param url - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorUrl(url: string): boolean {
    const Url = /^(https?:|mailto:|tel:)$/
    return Url.test(url)
}

/**
 * 校验是否为1~50位的汉字数字字母
 * @param cca - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorCCA(cca: string): boolean {
    const ChineseCharacterAlphanumeric = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,50}$/
    return ChineseCharacterAlphanumeric.test(cca)
}

/**
 * 校验是否为分数
 * @param score - 字符串
 * @returns 是返回`true`,否返回`false`
 */
export function ValidatorScore(score: string): boolean {
    const Score = /^([0-9]|10)$/
    return Score.test(score)
}
