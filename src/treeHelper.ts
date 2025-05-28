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
export function deepFind(node: TreeNode[], fn: Function): TreeNode | undefined {
  const treelist = node instanceof Array ? node : [node];
  for (let i = 0; i < treelist.length; i++) {
    if (fn(treelist[i])) {
      return treelist[i];
    } else {
      const target = deepFind(treelist[i].children || [], fn);
      if (target) return target;
    }
  }
}

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
export function deepFindPath(
  node: TreeNode[],
  fn: Function,
  result: any[] = []
): TreeNode[] | undefined {
  const treelist = node instanceof Array ? node : [node];
  for (let i = 0; i < treelist.length; i++) {
    if (fn(treelist[i])) {
      result.push(treelist[i]);
      return result;
    } else {
      const target = deepFindPath(treelist[i].children || [], fn, result);
      if (target) {
        result.push(treelist[i]);
        return result;
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
 * @example
 * const tree = [{ id: '1', children: [{ id: '2', children: [] }] }];
 * const result = findFirstNode(tree, node => node.id === '2');
 * // 返回 { id: '2', children: [] }
 */
export function findFirstNode(
  node: TreeNode[],
  fn: Function,
  result: any[] = []
): TreeNode {
  const treelist = node instanceof Array ? node : [node];
  for (let i = 0; i < treelist.length; i++) {
    if (fn(treelist[i])) result.push(treelist[i]);
    treelist[i].children && findFirstNode(treelist[i].children, fn, result);
  }
  return result[0];
}

/**
 * 深度优先遍历 查找树节点
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点数组
 */
export function deepTraversal(
  node: TreeNode[],
  fn: Function,
  result: any[] = []
): any[] {
  const treelist = node instanceof Array ? node : [node];
  for (let i = 0; i < treelist.length; i++) {
    if (fn ? fn(treelist[i]) : true) result.push(treelist[i]);
    treelist[i].children &&
      deepTraversal(treelist[i].children || [], fn, result);
  }
  return result;
}

/**
 * 广度优先遍历 查找树节点
 * @param node 源数组
 * @param fn   过滤函数
 * @param result 存放查找的结果数组
 * @returns 查找到的目标节点数组
 */
export function wideTraversal(
  node: TreeNode[],
  fn: Function,
  result: any[] = []
): any[] {
  const treelist = node instanceof Array ? node : [node];
  const array: any[] = [];
  for (let i = 0; i < treelist.length; i++) {
    if (fn ? fn(treelist[i]) : true) result.push(treelist[i]);
    treelist[i].children && array.push(...treelist[i].children);
    treelist.length === i + 1 && wideTraversal(array, fn, result);
  }
  return result;
}

/**
 * 获取树结构的所有叶子节点
 * @param treeData 树型结构源数据
 * @param leafList 结果数组
 */
export function getTreeLeaf(
  treeData: TreeNode[] | TreeNode,
  leafList: any[] = []
): any[] {
  if (Array.isArray(treeData)) {
    treeData.forEach((item) => {
      if (item.children && item.children.length) {
        getTreeLeaf(item.children, leafList);
      } else {
        leafList.push(item);
      }
    });
  } else if (treeData?.children?.length) {
    getTreeLeaf(treeData.children, leafList);
  } else {
    leafList.push(treeData);
  }
  return leafList;
}

/**
 * 根据子节点id查找所有父节点的id
 * @param treeData 树结构数据
 * @param nodeId 子节点id
 * @param config 字段映射配置
 * @returns 返回所有父节点id数组
 */
export const getParentIdsByTreeId = (
  treeData: TreeNode[],
  nodeId: string | number,
  config?: { [key: string]: string }
): string[] | number[] => {
  if (!treeData || !Array.isArray(treeData) || !nodeId) return [];
  const { children = "children", id = "id" } = config || {};
  const getIds = (flatArray: any[]): string[] | number[] => {
    let ids: any[] = [nodeId];
    let child: any = flatArray.find((_: TreeNode) => _[id] === nodeId);
    while (child && child.parentId) {
      ids = [child.parentId, ...ids];
      child = flatArray.find((item) => item[id] === child.parentId);
    }
    return ids;
  };
  const toFlatArray = (_tree: any[], parentId?: string | number): any[] => {
    return _tree.reduce((t, _) => {
      const child = _[children];
      return [
        ...t,
        parentId ? { ..._, parentId } : _,
        ...(child && child.length ? toFlatArray(child, _[id]) : []),
      ];
    }, []);
  };
  return getIds(toFlatArray(treeData));
};

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
export function flatToList(
  treeData: TreeNode[] | TreeNode,
  result: Omit<TreeNode, "children">[] = [],
  parentId: string | number = "0"
): Omit<TreeNode, "children">[] {
  if (Array.isArray(treeData)) {
    treeData.forEach((node) => {
      const { children, ...rest } = node;
      result.push({ ...rest, parentId });
      if (children && children.length) {
        flatToList(children, result, node.id);
      }
    });
  } else {
    const { children, ...rest } = treeData;
    result.push({ ...rest, parentId });
    if (children && children.length) {
      flatToList(children, result, treeData.id);
    }
  }
  return result;
}

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
export function flatToTree(
  flatList: TreeNode[],
  options = {
    idKey: "id",
    parentKey: "parentId",
    childrenKey: "children",
  }
): TreeNode[] {
  const { idKey, parentKey, childrenKey } = options;
  const tree: TreeNode[] = [];
  const hashTable: Record<string | number, TreeNode> = {};

  // 创建哈希表
  flatList.forEach((node) => {
    hashTable[node[idKey]] = { ...node, [childrenKey]: [] };
  });

  // 构建树结构
  flatList.forEach((node) => {
    const parentId = node[parentKey];
    if (parentId !== undefined && hashTable[parentId]) {
      hashTable[parentId][childrenKey].push(hashTable[node[idKey]]);
    } else {
      tree.push(hashTable[node[idKey]]);
    }
  });

  return tree;
}
