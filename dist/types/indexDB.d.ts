interface DBI {
    dbName: string;
    version: number | undefined;
    dbInstance: any;
    openDB(): Promise<any>;
    put(storeName: string, data: any): Promise<any>;
    update(storeName: string, key: string, data: any): Promise<any>;
    get(storeName: string, key: string): Promise<any>;
    remove(storeName: string, key: string): Promise<any>;
    closeDB(): void;
    deleteDB(name: string): Promise<any>;
}
declare class IndexDB implements DBI {
    dbName: string;
    version: number | undefined;
    dbInstance: any;
    constructor(name: string, version?: number);
    private __init;
    /**
     * 打开数据库
     */
    openDB(): Promise<any>;
    /**
     * 添加存储数据
     * @param storeName 仓库名称
     * @param key 主键
     * @param data 要存储的数据
     */
    put(storeName: string, data: any): Promise<any>;
    /**
     * 更新数据
     * @param db
     * @param storeName 仓库名称
     * @param data 要存储的数据
     */
    update(storeName: string, data: any): Promise<any>;
    /**
     * 获取数据
     * @param storeName 仓库名称
     * @param key 主键
     */
    get(storeName: string, key: string): Promise<any>;
    /**
     * 删除数据
     * @param storeName 仓库名称
     * @param key 主键
     */
    remove(storeName: string, key: string): Promise<any>;
    /**
     * 关闭数据库
     */
    closeDB(): void;
    /**
     * 删除数据库
     * @param name 数据库名称
     */
    deleteDB(name: string): Promise<any>;
}
export default IndexDB;
