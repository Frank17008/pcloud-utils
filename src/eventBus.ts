// 定义事件处理器类型
export type EventHandler = (...args: any[]) => void;

// 定义事件总线接口
export interface EventBus {
  // 订阅事件
  on: (event: string, handler: EventHandler) => void;
  // 取消订阅
  off: (event: string, handler: EventHandler) => void;
  // 发布事件
  emit: (event: string, ...args: any[]) => void;
  // 订阅一次事件
  once: (event: string, handler: EventHandler) => void;
}

/**
 * 创建事件总线实例
 * @returns {EventBus} 事件总线实例
 */ 
 
export const createEventBus = (): EventBus => {
  // 存储事件及其对应的处理器
  const events: Map<string, Set<EventHandler>> = new Map();

  // 订阅事件
  const on = (event: string, handler: EventHandler): void => {
    if (!events.has(event)) {
      events.set(event, new Set());
    }
    events.get(event)!.add(handler);
  };

  // 取消订阅
  const off = (event: string, handler: EventHandler): void => {
    if (events.has(event)) {
      events.get(event)!.delete(handler);
      // 如果事件没有处理器了，删除该事件
      if (events.get(event)!.size === 0) {
        events.delete(event);
      }
    }
  };

  // 发布事件
  const emit = (event: string, ...args: any[]): void => {
    if (events.has(event)) {
      // 复制处理器集合，避免在处理过程中修改集合导致问题
      const handlers = [...events.get(event)!];
      // 触发所有订阅该事件的处理器
      handlers.forEach((handler) => {
        try {
          handler(...args);
        } catch (error) {
          console.error(`Error in event handler for ${event}:`, error);
        }
      });
    }
  };

  const once = (event: string, handler: EventHandler): void => {
    const onceHandler: EventHandler = (...args) => {
      handler(...args);
      off(event, onceHandler);
    };
    on(event, onceHandler);
  };

  return { on, off, emit, once };
};

// 创建单例事件总线实例
const eventBus = createEventBus();

export default eventBus;
