/**
 * 异步请求池
 * @description 该函数用于并行执行异步任务，通过限制并发数来控制任务执行的效率和资源占用
 * @param limit 最大并发请求数量
 * @param taskArr 任务数组,包含所有需要执行的任务
 * @param interatorFn 迭代函数,每个让你无实际执行的异步操作
 * @returns 返回一个Promise数组
 * @example
 * ```ts
 * async function main() {
 *  // 示例任务数组
 *  const tasks = Array.from({ length: 10 }, (_, i) => i);
 *
 *  // 异步任务迭代函数
 *  const asyncTask = async (item: number, arr: number[]) => {
 *    console.log(`开始处理任务 ${item}`);
 *    await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟耗时操作
 *    console.log(`任务 ${item} 完成`);
 *  };
 *
 *  // 调用 asyncPool 函数
 *  await asyncPool(3, tasks, asyncTask);
 * }
 *
 *  // 运行示例
 *  main().catch(console.error);
 * ```
 */
export async function asyncPool<T>(limit: number, taskArr: T[], interatorFn: (item: T, arr: T[]) => void): Promise<void[]> {
  const ret: Promise<void>[] = [] // 存储所有promise
  const executing = new Set<Promise<void>>() // 存储当前正在执行的promise
  for (const item of taskArr) {
    const p = Promise.resolve()
      .then(() => interatorFn(item, taskArr))
      .finally(() => executing.delete(p))
    // 加入队列
    ret.push(p)
    executing.add(p)
    // 队列长度大于limit,等待执行队列中的任意一个promise执行完毕
    if (executing.size >= limit) {
      await Promise.race(executing)
    }
  }
  return Promise.all(ret)
}