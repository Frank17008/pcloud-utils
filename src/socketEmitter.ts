const actionList: Array<{ type: string; action: Function }> = []
let errorCounter = 0

/**
 * 注册事件
 * @param type 事件类型
 * @param action 回调函数
 */
export const subscribe = (type: string, action: Function) => {
    actionList.push({ type, action })
}

/**
 * 移除事件
 * @param action 回调函数
 */
export const unsubscribe = (action: Function) => {
    const index = actionList.findIndex((item) => item.action === action)
    actionList.splice(index, 1)
}

/**
 * 按消息类别分发事件
 * @param type 事件类型
 * @param messageBody 接收的消息体
 */
export function execAction(type: string, messageBody?: any) {
    const subList = actionList.filter((item) => item.type === type)
    subList.forEach((listener) => listener.action(messageBody))
}

/**
 * 初始化websocket
 * @param url socket连接地址
 * @param successCb 连接成功的回调函数
 * @param errorCb 连接失败的回调函数
 * @returns
 */
export const initWS = (url: string, successCb: Function, errorCb: Function) => {
    if ("WebSocket" in window) {
        try {
            const ws = new WebSocket(url)
            ws.onopen = () => {
                window.console.info("websocket连接成功...")
            }
            // WebSocket接收到消息
            ws.onmessage = (e) => {
                successCb && successCb(e)
                execAction("all", e.data)
            }

            // WebSocket断开连接
            ws.onclose = () => {
                execAction("wsClose")
                window.console.info("websocket断开连接...")
            }

            // WebSocket发生异常
            ws.onerror = (err: any) => {
                window.console.info("websocket连接异常...")
                errorCb && errorCb(err)
                execAction("wsError", {
                    hasError: true,
                    errorCounter,
                    name: "connectionError",
                    errMessage: `无法连接到: ${err?.target?.url}`,
                    err,
                })
            }
            return ws
        } catch (err: any) {
            errorCounter++
            execAction("wsError", { hasError: true, errorCounter, name: err?.name, errMessage: err?.message, err })
            return null
        }
    } else {
        errorCounter++
        execAction("wsError", {
            hasError: true,
            errorCounter,
            name: "BrowserError",
            errMessage: "您的浏览器不支持WebSocket",
        })
        return null
    }
}
