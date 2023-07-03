interface DBI {
    dbName: string
    version: number | undefined
    dbInstance: any
    openDB(): Promise<any>
    put(storeName: string, data: any): Promise<any>
    update(storeName: string, key: string, data: any): Promise<any>
    get(storeName: string, key: string): Promise<any>
    remove(storeName: string, key: string): Promise<any>
    closeDB(): void
    deleteDB(name: string): Promise<any>
}

class IndexDB implements DBI {
    dbName: string
    version: number | undefined
    dbInstance: any
    constructor(name: string, version?: number) {
        this.dbName = name
        this.version = version || 1
        this.dbInstance = null
        this.__init()
    }
    private async __init() {
        if (!window.indexedDB) {
            console.error("Your browser doesn't support a stable version of IndexedDB.")
            return
        }
        this.dbInstance = await this.openDB()
    }
    /**
     * 打开数据库
     */
    openDB(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.dbInstance) {
                resolve(this.dbInstance)
            } else {
                let _dbInstance
                // 打开数据库，若没有则会创建
                const request = window.indexedDB.open(this.dbName, this.version)
                // 数据库打开成功回调
                request.onsuccess = (event: any) => {
                    // 数据库对象
                    _dbInstance = event.target.result
                    resolve(_dbInstance)
                }
                // 数据库打开失败的回调
                request.onerror = (error) => {
                    reject(error)
                }
                // 首次创建或者更新时触发
                request.onupgradeneeded = (event: any) => {
                    _dbInstance = event.target.result
                    // 创建仓库 id/主键
                    const storeName = this.dbName
                    _dbInstance.createObjectStore(storeName, { keyPath: "id", autoIncrement: false })
                }
            }
        })
    }

    /**
     * 添加存储数据
     * @param storeName 仓库名称
     * @param key 主键
     * @param data 要存储的数据
     */
    public put(storeName: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = this.dbInstance.transaction([storeName], "readwrite").objectStore(storeName).add(data)
            request.onsuccess = () => {
                resolve(request.result)
            }
            request.onerror = (error: any) => {
                reject(error)
            }
        })
    }
    /**
     * 更新数据
     * @param db
     * @param storeName 仓库名称
     * @param data 要存储的数据
     */
    public update(storeName: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = this.dbInstance.transaction([storeName], "readwrite").objectStore(storeName).put(data)
            request.onsuccess = () => {
                resolve(request.result)
            }
            request.onerror = (error: any) => {
                reject(error)
            }
        })
    }
    /**
     * 获取数据
     * @param storeName 仓库名称
     * @param key 主键
     */
    public get(storeName: string, key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = this.dbInstance.transaction([storeName]).objectStore(storeName).get(key)
            request.onsuccess = () => {
                resolve(request.result)
            }
            request.onerror = (error: any) => {
                reject(error)
            }
        })
    }
    /**
     * 删除数据
     * @param storeName 仓库名称
     * @param key 主键
     */
    public remove(storeName: string, key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = this.dbInstance.transaction([storeName], "readwrite").objectStore(storeName).delete(key)
            request.onsuccess = () => {
                resolve(request.result)
            }
            request.onerror = (error: any) => {
                reject(error)
            }
        })
    }
    /**
     * 关闭数据库
     */
    public closeDB() {
        this.dbInstance.close()
    }
    /**
     * 删除数据库
     * @param name 数据库名称
     */
    public deleteDB(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.deleteDatabase(name)
            request.onsuccess = () => {
                resolve(request.result)
            }
            request.onerror = (error: any) => {
                reject(error)
            }
        })
    }
}

export default IndexDB
