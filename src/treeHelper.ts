export interface TreeNode {
    parentId: string | number
    id: string
    key?: string
    value?: string | number
    children: TreeNode[]
    [key: string]: any
}

/**
 * 按照全路径查找指定元素
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点
 */
export function deepFindPath(node: TreeNode[], fn: Function, result: any[] = []): TreeNode[] | undefined {
    const treelist = node instanceof Array ? node : [node]
    for (let i = 0; i < treelist.length; i++) {
        if (fn(treelist[i])) {
            result.push(treelist[i])
            return result
        } else {
            const target = deepFindPath(treelist[i].children || [], fn, result)
            if (target) {
                result.push(treelist[i])
                return result
            }
        }
    }
}

/**
 * 查找符合条件的第一个元素
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点
 */
export function findFirstNode(node: TreeNode[], fn: Function, result: any[] = []): TreeNode {
    const treelist = node instanceof Array ? node : [node]
    for (let i = 0; i < treelist.length; i++) {
        if (fn(treelist[i])) result.push(treelist[i])
        treelist[i].children && findFirstNode(treelist[i].children, fn, result)
    }
    return result[0]
}

/**
 * 深度优先遍历 查找树节点
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点数组
 */
export function deepTraversal(node: TreeNode[], fn: Function, result: any[] = []): any[] {
    const treelist = node instanceof Array ? node : [node]
    for (let i = 0; i < treelist.length; i++) {
        if (fn ? fn(treelist[i]) : true) result.push(treelist[i])
        treelist[i].children && deepTraversal(treelist[i].children || [], fn, result)
    }
    return result
}

/**
 * 广度优先遍历 查找树节点
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点数组
 */
export function wideTraversal(node: TreeNode[], fn: Function, result: any[] = []): any[] {
    const treelist = node instanceof Array ? node : [node]
    const array: any[] = []
    for (let i = 0; i < treelist.length; i++) {
        if (fn ? fn(treelist[i]) : true) result.push(treelist[i])
        treelist[i].children && array.push(...treelist[i].children)
        treelist.length === i + 1 && wideTraversal(array, fn, result)
    }
    return result
}

/**
 * 获取树结构的所有叶子节点
 * @param treeData 树型结构源数据
 * @param leafList 结果数组
 */
export function getTreeLeaf(treeData: TreeNode[] | TreeNode, leafList: any[] = []): any[] {
    if (Array.isArray(treeData)) {
        treeData.forEach((item) => {
            if (item.children && item.children.length) {
                getTreeLeaf(item.children, leafList)
            } else {
                leafList.push(item)
            }
        })
    } else if (treeData?.children?.length) {
        getTreeLeaf(treeData.children, leafList)
    } else {
        leafList.push(treeData)
    }
    return leafList
}

/**
 * 根据子节点id查找所有父节点的id
 * @param treeData 树结构数据
 * @param nodeId 子节点id
 * @param config 字段映射配置
 * @returns 返回所有父节点id数组
 */
export const getParentIdsByTreeId = (treeData: TreeNode[], nodeId: string | number, config?: { [key: string]: string }): string[] | number[] => {
    if (!treeData || !Array.isArray(treeData) || !nodeId) return []
    const { children = "children", id = "id" } = config || {}
    const getIds = (flatArray: any[]): string[] | number[] => {
        let ids: any[] = [nodeId]
        let child: any = flatArray.find((_: TreeNode) => _[id] === nodeId)
        while (child && child.parentId) {
            ids = [child.parentId, ...ids]
            // eslint-disable-next-line no-loop-func
            child = flatArray.find((item) => item[id] === child.parentId)
        }
        return ids
    }
    const toFlatArray = (_tree: any[], parentId?: string | number): any[] => {
        return _tree.reduce((t, _) => {
            const child = _[children]
            return [...t, parentId ? { ..._, parentId } : _, ...(child && child.length ? toFlatArray(child, _[id]) : [])]
        }, [])
    }
    return getIds(toFlatArray(treeData))
}
