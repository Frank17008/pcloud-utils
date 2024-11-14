/**
 * 注册事件
 * @param type 事件类型
 * @param action 回调函数
 */
export declare const subscribe: (type: string, action: Function) => void;
/**
 * 移除事件
 * @param action 回调函数
 */
export declare const unsubscribe: (action: Function) => void;
/**
 * 按消息类别分发事件
 * @param type 事件类型
 * @param messageBody 接收的消息体
 */
export declare function execAction(type: string, messageBody?: any): void;
/**
 * 初始化websocket
 * @param url socket连接地址
 * @param successCb 连接成功的回调函数
 * @param errorCb 连接失败的回调函数
 * @returns
 */
export declare const initWS: (url: string, successCb: Function, errorCb: Function) => WebSocket | null;
