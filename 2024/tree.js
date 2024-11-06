// 将items转换为树形结构

const items = [
    { id: 1, name: 'Item 1', parentId: null },
    { id: 2, name: 'Item 1.1', parentId: 1 },
    { id: 3, name: 'Item 1.2', parentId: 1 },
    { id: 4, name: 'Item 2', parentId: null },
    { id: 5, name: 'Item 2.1', parentId: 4 },
    // ... 更多的项目  
];

const output = [
    {
        id: 1,
        name: 'Item 1',
        parentId: null,
        children: [
            { id: 2, name: 'Item 1.1', parentId: 1 },
            { id: 3, name: 'Item 1.2', parentId: 1 }
        ]
    },
    {
        id: 4,
        name: 'Item 2',
        parentId: null,
        children: [
            { id: 5, name: 'Item 2.1', parentId: 4 }
        ]
    },
    // ... 更多的顶级项目及其子项目  
]

function buildTree(items, parentId = null) {
    let tree = [];
    for (let item of items) {
        if (item.parentId === parentId) {
            item.children = buildTree(items, item.id)
            tree.push(item)
        }
    }
    return tree;
}

// 使用上面的函数构建树  
const tree = buildTree(items);
console.log(tree);
