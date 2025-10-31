export interface TreeNode {
    parentId: string | number;
    id: string;
    key?: string;
    value?: string | number;
    children: TreeNode[];
    [key: string]: any;
}
/**
 * 查找指定元素
 * @param node 源数组
 * @param fn   过滤函数
 * @returns 查找到的目标节点
 * @example
 * const tree = [{ id: '1', children: [{ id: '2', children: [] }] }];
 * const result = deepFind(tree, node => node.id === '2');
 * // 返回 { id: '2', children: [] }
 */
export declare function deepFind(node: TreeNode[], fn: Function): TreeNode | undefined;
/**
 * 按照全路径查找指定元素
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点
 * @example
 * const tree = [{ id: '1', children: [{ id: '2', children: [] }] }];
 * const result = deepFindPath(tree, node => node.id === '2');
 * // 返回 [ { id: '1', ... }, { id: '2', ... } ]
 */
export declare function deepFindPath(node: TreeNode[], fn: Function, result?: any[]): TreeNode[] | undefined;
/**
 * 查找符合条件的第一个元素
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点
 * @example
 * const tree = [{ id: '1', children: [{ id: '2', children: [] }] }];
 * const result = findFirstNode(tree, node => node.id === '2');
 * // 返回 { id: '2', children: [] }
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
}) => string[] | number[];
/**
 * 将树形结构数据转换为平级结构数组
 * @param treeData 树形结构数据
 * @param result   用于存储扁平化结果的数组
 * @returns 返回平级结构数组
 * @example
 * const tree = [
 *   {
 *     id: '1',
 *     name: 'Node1',
 *     children: [
 *       { id: '2', name: 'Node2', children: [ { id: '2-1', name: 'Node2-1' } ] },
 *       { id: '3', name: 'Node3'}
 *     ]
 *   }
 * ];
 * const list = flatToList(tree);
 * // 返回 [{id: '1', name: 'Node1', parentId: undefined}, {id: '2', name: 'Node2', parentId: '1'}, {id: '2-1', name: 'Node2-1', parentId: '2'},{id: '3', name: 'Node3', parentId: '1'}]
 */
export declare function flatToList(treeData: TreeNode[] | TreeNode, result?: Omit<TreeNode, "children">[], parentId?: string | number): Omit<TreeNode, "children">[];
/**
 * 将平级结构数组转换为树形结构
 * @param flatList 平级结构数组
 * @param options 配置选项
 * @param options.idKey 节点唯一标识的键名，默认为 "id"
 * @param options.parentKey 父节点标识的键名，默认为 "parentId"
 * @param options.childrenKey 子节点数组的键名，默认为 "children"
 * @returns 返回树形结构数据
 * @example
 * const list = [
 *   { id: '1', name: 'Node1', parentId: '0' },
 *   { id: '2', name: 'Node2', parentId: '1' },
 *   { id: '2-1', name: 'Node2-1', parentId: '2' },
 *   { id: '3', name: 'Node3', parentId: '1' }
 * ];
 * const tree = convertFlatToTree(list);
 * // 返回树形结构:
 * // [
 * //   {
 * //     id: '1',
 * //     name: 'Node1',
 * //     parentId: '0',
 * //     children: [
 * //       { id: '2', name: 'Node2', parentId: '1', children: [ { id: '2-1', name: 'Node2-1', parentId: '2', children: [] }] },
 * //       { id: '3', name: 'Node3', parentId: '1', children: [] }
 * //     ]
 * //   }
 * // ]
 */
export declare function flatToTree(flatList: TreeNode[], options?: {
    idKey: string;
    parentKey: string;
    childrenKey: string;
}): TreeNode[];
