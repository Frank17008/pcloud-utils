export type EventHandler = (...args: any[]) => void;
export interface EventBus {
    on: (event: string, handler: EventHandler) => void;
    off: (event: string, handler: EventHandler) => void;
    emit: (event: string, ...args: any[]) => void;
    once: (event: string, handler: EventHandler) => void;
}
/**
 * 创建事件总线实例
 * @returns {EventBus} 事件总线实例
 */
export declare const createEventBus: () => EventBus;
declare const eventBus: EventBus;
export default eventBus;
