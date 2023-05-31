export interface TreeNode {
    parentId: string | number;
    id: string;
    key?: string;
    value?: string | number;
    children: TreeNode[];
    [key: string]: any;
}
/**
 * 按照全路径查找指定元素
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点
 */
export declare function deepFindPath(node: TreeNode[], fn: Function, result?: any[]): TreeNode[] | undefined;
/**
 * 查找符合条件的第一个元素
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点
 */
export declare function findFirstNode(node: TreeNode[], fn: Function, result?: any[]): TreeNode;
/**
 * 深度优先遍历 查找树节点
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点数组
 */
export declare function deepTraversal(node: TreeNode[], fn: Function, result?: any[]): any[];
/**
 * 广度优先遍历 查找树节点
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点数组
 */
export declare function wideTraversal(node: TreeNode[], fn: Function, result?: any[]): any[];
/**
 * 获取树结构的所有叶子节点
 * @param treeData 树型结构源数据
 * @param leafList 结果数组
 */
export declare function getTreeLeaf(treeData: TreeNode[] | TreeNode, leafList?: any[]): any[];
/**
 * 根据子节点id查找所有父节点的id
 * @param treeData 树结构数据
 * @param nodeId 子节点id
 * @param config 字段映射配置
 * @returns 返回所有父节点id数组
 */
export declare const getParentIdsByTreeId: (treeData: TreeNode[], nodeId: string | number, config?: {
    [key: string]: string;
} | undefined) => string[] | number[];
